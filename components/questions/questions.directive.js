'use strict';

angular
	.module('politicianApp')
		.directive('pQuestions', function pQuestions() {

			return {
				restrict: 'E',
				templateUrl: 'components/questions/questions.partial.html',
				scope: {
					questions: '='
				},
				link: link
			}

			function link(scope) {

				var correctAnswer;
				scope.option = {};
				
				scope.$watch('questions', function() {
					scope.selectedQ = _.find(scope.questions, function(q) {
						return q.selected === true;
					});
				}, true);

				scope.checkAnswer = function() {

					correctAnswer = _.find(scope.selectedQ.choices, function(choice) {
						return choice.correct === true;
					});

					if (scope.option.selectedChoice === correctAnswer.name) {
						scope.selectedQ.correct = true;
						scope.selectedQ.answered = true;
					} else {
						scope.selectedQ.answered = true;
					}

					scope.option.selectedChoice = false;
				};
			}

		});