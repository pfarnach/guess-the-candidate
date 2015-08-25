'use strict';

angular
	.module('politicianApp', ['ui.bootstrap'])
		.controller('mainController', function($scope, $modal, questionsFactory) {

			var modalInstance;
		  
		  // all questions
			$scope.questions = questionsFactory.getQuestions();

			modalInstance = $modal.open({
	      animation: $scope.animationsEnabled,
	      templateUrl: 'components/modals/start-modal/start-modal.html',
	      controller: 'StartModalController'
	    });

	    modalInstance.result
	    	.then(function() {});

		});