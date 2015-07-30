angular
	.module('politicianApp')
		.directive('pScore', function pScore() {

			return {
				restrict: 'E',
				templateUrl: 'components/score/score.partial.html',
				link: link
			}

			function link(scope) {
				
			}

		});