'use strict';

angular.module('politicianApp')
	.directive('pQuestions', function pQuestions($modal) {

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

				var finalScore;

				// get correct answer out of possible choices to compare with below
				correctAnswer = _.find(scope.selectedQ.choices, function(choice) {
					return choice.correct === true;
				});

				// check answer
				if (scope.option.selectedChoice === correctAnswer.name) {
					scope.selectedQ.correct = true;
					scope.selectedQ.answered = true;
				} else {
					scope.selectedQ.answered = true;
				}

				// reset selected option
				scope.option.selectedChoice = false;

				// check if all questions are answered
				if (allQuestionsAnswered()) {
					// do something like count final score
					finalScore = countFinalScore();
					openGameOverModal(finalScore);
				}

			};

			function countFinalScore() {
				var correctNum = 0;

				_.each(scope.questions, function(q) {
					if (q.correct === true) {
						correctNum++;
					}
				});

				return correctNum;
			};

			function allQuestionsAnswered() {
				return _.every(scope.questions, function(q) {
					return q.answered === true;
				});
			}

			function openGameOverModal(finalScore) {
				var modalInstance;
				
				modalInstance = $modal.open({
		      animation: scope.animationsEnabled,
		      templateUrl: 'components/modals/game-over-modal/game-over-modal.html',
		      controller: 'GameOverModalController',
		      resolve: {
		        finalScore: function () {
		          return finalScore;
		        }
		      }
		    });

		    modalInstance.result
		    	.then(function() {});

			}	
		}

	});