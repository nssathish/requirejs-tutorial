// config.js

requirejs.config ({
	baseUrl: 'js',
	paths: {
		angular: [
			'https://ajax.googleapis.com/ajax/libs/angularjs/1.5.7/angular.min', //this is something we see that we can include the CDNs.
			'angular.min',
		],
		extCore: 'ext-bootstrap',
		jquery: 'jquery-3.1.1.min',
		mootools: 'MooTools-Core-1.6.0',
		swfobj: 'swfobject'
	}
});
