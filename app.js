'use strict';

angular
	.module('politicianApp', ['ui.bootstrap'])
		.controller('mainController', function($scope, questionsFactory) {
		  
		  // all questions
			$scope.questions = questionsFactory.getQuestions();
		  
		});