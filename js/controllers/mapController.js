'use strict';

	angular.module('fioApp')
		.controller('mapController', function($scope, $timeout, mapboxService, localStorageService, fioYelpAPI) {
		mapboxService.init({ accessToken: 'pk.eyJ1IjoiMXBhcmtwbGFjZSIsImEiOiJ0VnNHQ0o4In0.Ju1ET8Y81mGY1Eu0l5DfRQ' });
		$timeout(function() {
			var map = mapboxService.getMapInstances()[0];
		}, 100);

		$scope.mapMovedCallback = function(bounds) {
			console.log('You repositioned the map to:');
			console.log(bounds);
		};
		$scope.mapZoomedCallback = function(bounds) {
			console.log('You zoomed the map to:');
			console.log(bounds.getCenter().toString());
		};

		var photogsInStore = localStorageService.get('photog');

		$scope.photogs = photogsInStore || [];

		$scope.$watch('photogs', function () {
			localStorageService.set('photogs', $scope.photogs);
		}, true);

		fioYelpAPI.retrieveYelp('', '', function(data) {
			$scope.photogs = data.businesses;
		});
		//TODO: Fix this... for some reason it nukes the scope, but wont set the new
		//I think it has to do with the callback within the function
		$scope.zipInput = function() {
			if ($scope.zip.input.length == 5) {
				$scope.photogs = null;
				fioYelpAPI.retrieveYelp('', $scope.zip.input, function(cb) {
					$scope.photogs = cb.businesses;
				});
			}
		};


});