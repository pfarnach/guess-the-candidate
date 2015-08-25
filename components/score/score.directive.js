'use strict';

angular.module('politicianApp')
	.directive('pScore', function pScore() {

		return {
			restrict: 'E',
			templateUrl: 'components/score/score.partial.html',
			scope: {
				questions: '='
			},
			link: link
		}

		function link(scope) {
			
			// set particular question as selected if user clicks it
			scope.setSelectedQ = function(question) {
				_.each(scope.questions, function(q) {
					q.selected = false;
				});
				question.selected = true;
			};

			// set CSS class on each scorebox
			scope.scoreBoxClass = function(question) {
				if (!question.answered) {
					return 'unanswered score-box';
				} else if (question.answered && question.correct) {
					return 'correct score-box';
				} else {
				return 'incorrect score-box';						
				}
			}

		}

	});