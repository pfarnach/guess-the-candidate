angular
	.module('politicianApp')
		.directive('pQuestions', function pQuestions(questionsFactory) {

			return {
				restrict: 'E',
				templateUrl: 'components/questions/questions.partial.html',
				link: link
			}

			function link(scope) {
				scope.questions = questionsFactory.getQuestions();
			}

		});