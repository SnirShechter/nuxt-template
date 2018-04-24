function getWindowVariable( name, dv ) {
 if( typeof window === 'undefined' )
	return dv;
 
 if( window && name in window ) {
	return window[name];
 }
 return dv;
}

export default getWindowVariable;