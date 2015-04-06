'use strict';

	angular.module('fioApp').controller('mapController', function($scope, $timeout, mapboxService) {
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

});