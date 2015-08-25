'use strict';

angular.module('politicianApp')
	.factory('questionsFactory', function questionsFactory() {

		function getQuestions() {
			return [
				{
					name: 'Question 1',
					type: 'quote',
					contentHeader: 'In 2004, which candidate said:',
					content: 'I believe marriage is not just a bond but a sacred bond between a man and a woman',
					choices: [
						{ name: 'Sanders', correct: false },
						{ name: 'Clinton', correct: true }
					],
					moreInfo: 'In 1996, Sanders voted against the Defense of Marriage Act which barred recognition of gay marriage at the federal level',
					selected: true,
					answered: false,
					correct: false,
					source1: 'https://www.youtube.com/watch?t=11&v=6I1-r1YgK9I',
					source2: 'http://www.advocate.com/politics/election/2015/04/30/bernie-sanders-most-lgbt-friendly-candidate'
				},
				{
					name: 'Question 2',
					type: 'table',
					contentHeader: 'Which candidate\'s top five contributors are the following?',
					content: ['Citigroup Inc', 'Goldman Sachs', 'DLA Piper', 'JPMorgan Chase & Co', 'Emily\'s List'],
					choices: [
						{ name: 'Sanders', correct: false },
						{ name: 'Clinton', correct: true }
					],
					moreInfo: 'Bernie Sanders\'s top contributors are all unions',
					selected: false,
					answered: false,
					correct: false,
					source1: 'https://www.opensecrets.org'
				},
				{
					name: 'Question 3',
					type: 'general',
					contentHeader: 'How many Clinton Foundation donors also lobbied the State Department while Clinton was Secretary of State?',
					choices: [
						{ name: '0', correct: false },
						{ name: '5-10', correct: false },
						{ name: '25-50', correct: false },
						{ name: '175-200', correct: true }
					],
					selected: false,
					answered: false,
					correct: false,
					source1: 'http://www.vox.com/2015/4/28/8501643/Clinton-foundation-donors-State'
				},
				{
					name: 'Question 4',
					type: 'general',
					contentHeader: 'How did Clinton vote on both the 2001 Patriot Act and its 2006 re-authorization?',
					choices: [
						{ name: 'Against & against', correct: false },
						{ name: 'Against & for', correct: false },
						{ name: 'For & against', correct: false },
						{ name: 'For & for', correct: true }
					],
					moreInfo: 'Sanders voted against the Patriot Act in both cases',
					selected: false,
					answered: false,
					correct: false,
					source1: 'http://educate-yourself.org/cn/patriotact20012006senatevote.shtml'
				},
				{
					name: 'Question 5',
					type: 'quote',
					contentHeader: 'In Congress in 1991, who said:',
					content: 'Let\'s not keep putting poor people into jail and disproportionately punishing blacks.',
					choices: [
						{ name: 'Sanders', correct: true },
						{ name: 'Clinton', correct: false }
					],
					selected: false,
					answered: false,
					correct: false,
					source1: 'https://www.youtube.com/watch?v=aZJ7f-3XGB4'
				},
				{
					name: 'Question 6',
					type: 'general',
					contentHeader: 'Which candidate was arrested for protesting segregation in Chicago public schools?',
					choices: [
						{ name: 'Sanders', correct: true },
						{ name: 'Clinton', correct: false }
					],
					moreInfo: 'In 1969, Clinton wrote her senior thesis about a famous community organizer',
					selected: false,
					answered: false,
					correct: false,
					source1: 'http://time.com/3896500/bernie-sanders-vermont-campaign-radical/',
					source2: 'https://en.wikipedia.org/wiki/Hillary_Rodham_senior_thesis'
				},
				{
					name: 'Question 7',
					type: 'general',
					contentHeader: 'How many times has Sanders been elected to Congress?',
					choices: [
						{ name: '2', correct: false },
						{ name: '4', correct: false },
						{ name: '7', correct: false },
						{ name: '10', correct: true }
					],
					selected: false,
					answered: false,
					correct: false,
					source1: 'https://en.wikipedia.org/wiki/Electoral_history_of_Bernie_Sanders'
				},
				{
					name: 'Question 8',
					type: 'general',
					contentHeader: 'In the same week Sanders held a rally with 28,000 people in Portland, Oregon, what did Clinton do there?',
					choices: [
						{ name: 'She held an even larger rally', correct: false },
						{ name: 'She held a slightly smaller rally', correct: false },
						{ name: 'She spoke to a group of high school students', correct: false },
						{ name: 'She held a $2700-per-ticket private fundraising event', correct: true }
					],
					moreInfo: 'Sanders\'s rally has been the biggest of any candidate this election cycle',
					selected: false,
					answered: false,
					correct: false,
					source1: 'http://www.kgw.com/story/news/politics/2015/07/10/hillary-clinton-portland/29999585/',
					source2: 'http://www.msnbc.com/msnbc/bernie-sanders-shatters-2016-turnout-record-28000-crowd'
				},
				{
					name: 'Question 9',
					type: 'general',
					contentHeader: 'How did the candidates vote on the 2002 bill authorizing the invasion of Iraq?',
					choices: [
						{ name: 'Sanders: against / Clinton: against', correct: false },
						{ name: 'Sanders: for / Clinton: against', correct: false },
						{ name: 'Sanders: against / Clinton: for', correct: true },
						{ name: 'Sanders: for / Clinton: for', correct: false }
					],
					selected: false,
					answered: false,
					correct: false,
					source1: 'http://www.ontheissues.org/'
				},
				{
					name: 'Question 10',
					type: 'general',
					contentHeader: 'How long was Sanders\'s 2010 fillibuster opposing President Obama\'s extension of the Bush-era tax cuts for high-income earners?',
					choices: [
						{ name: '2 hours', correct: false },
						{ name: '4 hours', correct: false },
						{ name: '8 hours', correct: true },
						{ name: '12 hours', correct: false }
					],
					moreInfo: 'Clinton voted against and then in favor of the Bush-era tax cuts',
					selected: false,
					answered: false,
					correct: false,
					source1: 'http://www.c-span.org/video/?297021-5/senator-sanders-filibuster',
					source2: 'http://www.forbes.com/sites/anthonynitti/2015/04/13/what-hillary-clintons-voting-record-reveals-about-her-tax-plan/'
				}
			];
		}

		return {
			getQuestions: getQuestions
		};

	});
