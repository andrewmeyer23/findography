'use strict';

/**
 * @ngdoc function
 * @name fioApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the fioApp
 */
angular.module('fioApp')
	.controller('MainCtrl', function ($scope, localStorageService, fioYelpAPI) {

		var photogsInStore = localStorageService.get('photog');

		$scope.photogs = photogsInStore || [];

		$scope.$watch('photogs', function () {
			localStorageService.set('photogs', $scope.photogs);
		}, true);

		fioYelpAPI.retrieveYelp('', function(data) {
			$scope.photogs = data.businesses;
		});

	});