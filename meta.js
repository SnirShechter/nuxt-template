const path = require('path');
const spawn = require('child_process').spawn;

module.exports = {
	helpers: {
		escape: function (value) {
			return value.replace(/'/g, '&apos;');
		}
	},
	prompts: {
		name: {
			'type': 'string',
			'required': true,
			'message': 'Project name'
		},
		description: {
			'type': 'string',
			'required': false,
			'message': 'Project description',
			'default': 'A Monolith Web project'
		},
		author: {
			'type': 'string',
			'message': 'Author',
			'default': 'Monolith Web'
		},
	},
	async complete(data, { chalk }){
		
		const cwd = path.join(process.cwd(),data.destDirName);
		
		// Install dependencies
		console.log(`\n\n# Installing project dependencies...`);
		await runCommand('ncu', ['-u'], {cwd});
		await runCommand('npm', ['install','--save-exact'], {cwd});
		await runCommand('npx', ['cypress','verify'], {cwd});
		
		// Run lint fix
		await runCommand('npm', ['run', 'lint', '--', '--fix'], {cwd});
		
		console.log(`Done!`);
	},
};

function runCommand(cmd, args, options) {
	return new Promise((resolve, reject) => {
		const spwan = spawn(cmd, args, Object.assign({cwd: process.cwd(), stdio: 'inherit', shell: true}, options));
		
		spwan.on('exit', () => {resolve()});
	})
}