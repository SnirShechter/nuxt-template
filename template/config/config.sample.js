const BASE_PATH = getWindowVariable('BASE_PATH', 'https://barak.cloud.yo/iqoscrmbg/api/');

const envConfig = {
	default: {
		ga_id: '1',
		site_base_path: '/'
	},
	production: {
		ga_id: '2',
		site_base_path: '/'
	},
	dev: {
		ga_id: '3',
		site_base_path: '/'
	},
	stage: {
		ga_id: '4',
		site_base_path: '/'
	}
};

module.exports = {
	BASE_PATH,
	env: envConfig[process.env.NODE_ENV] || envConfig.default
};


function getWindowVariable(name, dv) {
	if (typeof window === 'undefined')
		return dv;
	
	if (window && name in window) {
		return window[name];
	}
	return dv;
}