angular
	.module('politicianApp')
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
				
				scope.setSelectedQ = function(question) {
					_.each(scope.questions, function(q) {
						q.selected = false;
					});
					question.selected = true;
				};

			}

		});