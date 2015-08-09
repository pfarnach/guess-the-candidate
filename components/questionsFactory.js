angular
	.module('politicianApp')
		.factory('questionsFactory', function questionsFactory() {

			function getQuestions() {
				return [
					{
						name: 'Question 1',
						content: 'What is the squareroot of 4?',
						choices: [
							{ name: '1', correct: false },
							{ name: 'dog', correct: false },
							{ name: '2', correct: true },
							{ name: '5', correct: false }
						],
						selected: true,
						answered: false,
						correct: false,
						source: ''
					},
					{
						name: 'Question 2',
						content: 'What is the squareroot of 9?',
						choices: [
							{ name: 'perro', correct: false },
							{ name: 'dog', correct: false },
							{ name: 'chien', correct: false },
							{ name: '3', correct: true }
						],
						selected: false,
						answered: false,
						correct: false,
						source: ''
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