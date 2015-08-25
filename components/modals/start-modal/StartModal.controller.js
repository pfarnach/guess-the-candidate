'use_strict';

angular.module('politicianApp')
	.controller('StartModalController', function($scope, $modalInstance) {
		
		$scope.closeModal = function () {
    	$modalInstance.close();
  	};

	});