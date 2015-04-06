(function() {

	'use strict';

	var fioApp = angular
		.module('fioApp', [
			'ngAnimate',
			'ngCookies',
			'ngResource',
			'ngRoute',
			'ngSanitize',
			'ngTouch',
			'LocalStorageModule',
			'angular-mapbox',
			'angular-yelp'
		  ])
		  .config(['localStorageServiceProvider', function(localStorageServiceProvider){
			  localStorageServiceProvider.setPrefix('ls');
		  }])
		  .config(function ($routeProvider) {
			$routeProvider
			  .when('/', {
				templateUrl: 'views/main.html',
				controller: 'MainCtrl'
			  })
			  .otherwise({
				redirectTo: '/'
			  });
		});
})();