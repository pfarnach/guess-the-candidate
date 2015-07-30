angular
	.module('politicianApp')
		.factory('questionsFactory', function pHeader() {

			function getQuestions() {
				return [
					{
						name: 'Question 1',
						content: 'What is the squareroot of 4?',
						answer: '2'
					},
					{
						name: 'Question 2',
						content: 'What smells like a dog and walks like a dog?',
						answer: 'A dog'
					}
				];
			}

			return {
				getQuestions: getQuestions
			};
		});


/*

- Whose top 5 contributors
- Who said the following
- Who said the following in (past year)
- Who voted a certain way
- Who has more years of experience
- Who has been elected X amount of times
- Who flip-flopped on X issue


*/