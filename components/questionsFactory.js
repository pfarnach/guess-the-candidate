angular
	.module('politicianApp')
		.factory('questionsFactory', function questionsFactory() {

			function getQuestions() {
				return [
					{
						name: 'Question 1',
						type: 'quote',
						contentHeader: 'Who said:',
						content: 'I believe marriage is not just a bond but a sacred bond between a man and a woman.',
						choices: [
							{ name: 'Bernie Sanders', correct: false },
							{ name: 'Hillary Clinton', correct: true }
						],
						selected: true,
						answered: false,
						correct: false,
						source: 'https://www.youtube.com/watch?t=11&v=6I1-r1YgK9I'
					},
					{
						name: 'Question 2',
						type: 'table',
						contentHeader: 'Which candidate\'s top five contributors are the following?',
						content: ['Citigroup Inc', 'Goldman Sachs', 'DLA Piper', 'JPMorgan Chase & Co', 'Emily\'s List'],
						choices: [
							{ name: 'Bernie Sanders', correct: false },
							{ name: 'Hillary Clinton', correct: true }
						],
						selected: false,
						answered: false,
						correct: false,
						source: 'https://www.opensecrets.org'
					},
					{
						name: 'Question 3',
						type: 'table',
						contentHeader: 'Which candidate\'s top five contributors are the following?',
						content: ['Communications Workers of America', 'UNITE HERE', 'National Education Association', 'American Federation of State, County and Municipal Employees', 'Service Employees International Union'],
						choices: [
							{ name: 'Bernie Sanders', correct: true },
							{ name: 'Hillary Clinton', correct: false }
						],
						selected: false,
						answered: false,
						correct: false,
						source: 'https://www.opensecrets.org'
					},
					{
						name: 'Question 4',
						type: 'quote',
						contentHeader: 'In Congress in 1991, who said:',
						content: 'Let\'s not keep putting poor people into jail and disproportionately punishing blacks.',
						choices: [
							{ name: 'Bernie Sanders', correct: true },
							{ name: 'Hillary Clinton', correct: false }
						],
						selected: false,
						answered: false,
						correct: false,
						source: 'https://www.youtube.com/watch?v=aZJ7f-3XGB4'
					},
					{
						name: 'Question 5',
						type: 'general',
						contentHeader: 'Which candidate was arrested for protesting segregation in Chicago public schools?',
						choices: [
							{ name: 'Bernie Sanders', correct: true },
							{ name: 'Hillary Clinton', correct: false }
						],
						selected: false,
						answered: false,
						correct: false,
						source: 'http://time.com/3896500/bernie-sanders-vermont-campaign-radical/'
					},
					{
						name: 'Question 6',
						type: 'general',
						contentHeader: 'How many times has Bernie Sanders been elected to Congress?',
						choices: [
							{ name: '2', correct: false },
							{ name: '4', correct: false },
							{ name: '7', correct: false },
							{ name: '10', correct: true }
						],
						selected: false,
						answered: false,
						correct: false,
						source: 'https://en.wikipedia.org/wiki/Electoral_history_of_Bernie_Sanders'
					},
					{
						name: 'Question 7',
						type: 'general',
						contentHeader: 'How many times has Hillary Clinton been elected to Congress?',
						choices: [
							{ name: '2', correct: true },
							{ name: '4', correct: false },
							{ name: '7', correct: false },
							{ name: '10', correct: false }
						],
						selected: false,
						answered: false,
						correct: false,
						source: 'https://en.wikipedia.org/wiki/Electoral_history_of_Hillary_Clinton'
					},
					{
						name: 'Question 8',
						type: 'general',
						contentHeader: 'How did the candidates vote on the 2002 bill authorizing the invasion of Iraq?',
						choices: [
							{ name: 'Sanders and Clinton: against', correct: false },
							{ name: 'Sanders: for / Clinton: against', correct: false },
							{ name: 'Sanders: against / Clinton: for', correct: true },
							{ name: 'Sanders and Clinton: for', correct: false }
						],
						selected: false,
						answered: false,
						correct: false,
						source: 'http://www.ontheissues.org/'
					},
					{
						name: 'Question 9',
						type: 'general',
						contentHeader: 'How did Hillary Clinton vote on both the 2001 Patriot Act and its 2006 re-authorization?',
						choices: [
							{ name: 'Against & against', correct: false },
							{ name: 'Against & for', correct: false },
							{ name: 'For & against', correct: false },
							{ name: 'For & for', correct: true }
						],
						selected: false,
						answered: false,
						correct: false,
						source: 'http://educate-yourself.org/cn/patriotact20012006senatevote.shtml'
					},
					{
						name: 'Question 10',
						type: 'general',
						contentHeader: 'How did Hillary Clinton vote on both the 2001 Patriot Act and its 2006 re-authorization?',
						choices: [
							{ name: 'Against & against', correct: false },
							{ name: 'Against & for', correct: false },
							{ name: 'For & against', correct: false },
							{ name: 'For & for', correct: true }
						],
						selected: false,
						answered: false,
						correct: false,
						source: 'http://educate-yourself.org/cn/patriotact20012006senatevote.shtml'
					}
				];
			}

			return {
				getQuestions: getQuestions
			};
		});


/*

- Whose top 5 contributors
-x Who said the following
- Who said the following in (past year)
- Who voted a certain way
- Who has more years of experience
- Who has been elected X amount of times
- Who flip-flopped on X issue
- Speaking engagement fees
- War voting record
- Education
-x Number of times elected


*/