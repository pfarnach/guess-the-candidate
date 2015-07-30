angular
	.module('politicianApp')
		.directive('pHeader', function pHeader() {

			return {
				restrict: 'E',
				templateUrl: 'components/header/header.partial.html',
				link: link
			}

			function link(scope) {
			}

		});