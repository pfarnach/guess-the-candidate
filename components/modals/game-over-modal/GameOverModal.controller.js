'use_strict';

angular.module('politicianApp')
	.controller('GameOverModalController', function($scope, finalScore) {
		$scope.finalScore = finalScore

		$scope.reload = function() {
			location.reload();
		};

	});