'use strict';

/**
 * @ngdoc overview
 * @name fioApp
 * @description
 * # fioApp
 *
 * Main module of the application.
 */
angular
	.module('fioApp', [
		'ngAnimate',
		'ngCookies',
		'ngResource',
		'ngRoute',
		'ngSanitize',
		'ngTouch',
		'LocalStorageModule'
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