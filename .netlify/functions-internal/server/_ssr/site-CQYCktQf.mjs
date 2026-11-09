//#region node_modules/.nitro/vite/services/ssr/assets/site-CQYCktQf.js
var entrepreneurship_default = "/assets/entrepreneurship-CDWXlnNa.jpg";
var finance_default = "/assets/finance-CokmDG-w.jpg";
var robotics_default = "/assets/robotics-B8czbjAb.jpg";
var BRAND = "Skillnest";
var programmes = [
	{
		slug: "entrepreneurship",
		name: "Young Entrepreneurship",
		short: "Children learn to notice everyday problems, shape ideas and present them with confidence.",
		grades: "Grades 3–12",
		image: entrepreneurship_default,
		color: "venture",
		outcomes: [
			"Problem spotting",
			"Idea testing",
			"Teamwork",
			"Public speaking"
		],
		stages: [
			{
				band: "Grades 3–5",
				focus: "Curiosity projects and simple market days"
			},
			{
				band: "Grades 6–8",
				focus: "Customer interviews and product prototypes"
			},
			{
				band: "Grades 9–12",
				focus: "Business plans and investor-style pitches"
			}
		]
	},
	{
		slug: "finance",
		name: "Financial Literacy",
		short: "Practical money sense through budgets, saving goals and real-life choices.",
		grades: "Grades 3–12",
		image: finance_default,
		color: "money",
		outcomes: [
			"Budgeting",
			"Saving habits",
			"Smart spending",
			"Understanding risk"
		],
		stages: [
			{
				band: "Grades 3–5",
				focus: "Needs vs wants and piggy-bank goals"
			},
			{
				band: "Grades 6–8",
				focus: "Family budgets and price comparison"
			},
			{
				band: "Grades 9–12",
				focus: "Banking, investing basics and taxes"
			}
		]
	},
	{
		slug: "ai-robotics",
		name: "AI & Robotics",
		short: "From using screens to building with them — logic, coding and responsible technology.",
		grades: "Grades 1–12",
		image: robotics_default,
		color: "tech",
		outcomes: [
			"Logical thinking",
			"Coding basics",
			"Robot builds",
			"Responsible AI"
		],
		stages: [
			{
				band: "Grades 1–4",
				focus: "Unplugged logic games and patterns"
			},
			{
				band: "Grades 5–8",
				focus: "Block coding and simple sensor robots"
			},
			{
				band: "Grades 9–12",
				focus: "Python, AI models and capstone builds"
			}
		]
	}
];
var colorClass = {
	venture: {
		text: "text-venture",
		bg: "bg-venture"
	},
	money: {
		text: "text-money",
		bg: "bg-money"
	},
	tech: {
		text: "text-tech",
		bg: "bg-tech"
	}
};
var quizQuestions = [
	{
		topic: "Entrepreneurship",
		q: "You spot a problem at school that bothers many students. What do you do first?",
		options: [
			"Complain about it to a friend",
			"Think of one way to fix it",
			"Plan a fix and explain how it helps everyone"
		]
	},
	{
		topic: "Money sense",
		q: "Your aunt gives you ₹200. What's the wisest plan?",
		options: [
			"Spend it all today",
			"Spend a part, keep a part",
			"Set a goal, save most, spend a little wisely"
		]
	},
	{
		topic: "Technology",
		q: "How should you use an AI helper for homework?",
		options: [
			"Copy whatever it says",
			"Use it to understand the topic",
			"Use it to learn, then create your own answer"
		]
	},
	{
		topic: "Leadership",
		q: "Your team disagrees on a project idea. What do you do?",
		options: [
			"Let the loudest person decide",
			"Suggest a vote",
			"Listen to everyone, then combine the best ideas"
		]
	},
	{
		topic: "Entrepreneurship",
		q: "Nobody bought your lemonade at the fair. What next?",
		options: [
			"Give up",
			"Lower the price",
			"Ask people why, then improve it"
		]
	},
	{
		topic: "Money sense",
		q: "A toy costs ₹500 here and ₹420 online. You…",
		options: [
			"Buy the first one you see",
			"Pick the cheaper one",
			"Compare price, delivery and quality first"
		]
	},
	{
		topic: "Technology",
		q: "A robot keeps turning the wrong way. You…",
		options: [
			"Ask someone else to fix it",
			"Try random changes",
			"Check each step of the code to find the bug"
		]
	},
	{
		topic: "Leadership",
		q: "A classmate is struggling with a task. You…",
		options: [
			"Ignore it",
			"Do it for them",
			"Show them how and encourage them"
		]
	}
];
//#endregion
export { quizQuestions as i, colorClass as n, programmes as r, BRAND as t };
