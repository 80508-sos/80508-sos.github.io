const INFO = {
	main: {
		title: "Reactfolio by truethari",
		name: "Karen Meng",
		email: "kmeng@berkeley.edu",
		logo: "../logo.png",
	},

	socials: {
		// twitter: "https://twitter.com/",
		github: "https://github.com/kmeng805",
		linkedin: "https://www.linkedin.com/in/karen-meng-5414392a5/",
		// instagram: "https://instagram.com/",
		// stackoverflow: "https://stackoverflow.com/",
		// facebook: "https://facebook.com/",
	},

	homepage: {
		title: "welcome to my page :)",
		desc1:
			"Hi! I'm Karen - nice to meet you 👋.",
		desc2: 
			"A little bit about me: I am a third-year student studying Electrical Engineering & Computer Science at UC Berkeley 🧸. Currently, I’m helping out with Berkeley’s Data Structures course, CS61B(L), as a Teaching Assistant, teaching weekly discussions and specializing in lab development and exam writing. I’m interested in computer science education and pedagogical development, and I’m also exploring other areas of CS, including AI/ML, database management, computer security, and more!",
		desc3:
			"In my free time, I enjoy listening to music 🎶 (mostly cpop, but feel free to rec me anything!), getting boba at Sharetea 👀 🧋, going on late night walks 🌃, and doom-scrolling 💀 through EdStem 🤓 (the course forum used by many CS classes at Berkeley). In case you couldn’t tell, I’m a big fan of using emojis 👌 💯, especially :eyes: and :zany-face: 🤪. I also dabble in grandma hobbies (knitting/crocheting 🧶, baking 🍪, puzzles 🧩, etc.), go on scenic hikes once in a while 😌, and take cool photos sometimes 📸 (see the pic of SF on the right!)"
	},

	about: {
		title: "Teaching & Coursework",
		desc_teach:
			"Teaching:",
		desc_course:
			"Coursework:"
	},

	articles: {
		title: "TBD (hmm)",
		description:
			"",
	},

	projects: [
		{
			title: "Secure File Sharing System",
			description:
				"Designed and implemented a secure file sharing system in Go, used cryptographic library functions to detect tampering of data and prevent information leakage, tested using Ginkgo framework. Supported user authentication, loading/storing and appending text to files, sharing files and revoking access for other users. Scored 114.09/120 on autograder (z-score of +2.23 relative to class cohort).",
			logo: "cs161.png",
			linkText: "View Project (must request access)",
			link: "https://github.com/cs161-students/sp25-proj2-jk",
		},

		{
			title: "RookieDB",
			description:
				"Implemented simplified database with support for B+ tree indexing, join algorithms, query optimization (Selinger optimizer), multigranularity locking for concurrent execution of transactions, and database recovery (ARIES).",
			logo: "dbms.png",
			linkText: "View Project (must request access)",
			link: "https://github.com/cs186-student/sp25-proj5-kmeng805",
		},

		{
			title: "World Exploration",
			description:
				"Built interactive game where user travels through a 2D world created using random generation and graph traversal algorithms. Features include saving and loading previous plays, collecting characters, and distinct terrain tiles.",
			logo: "byow.png",
			linkText: "View Project (must request access)",
			link: "https://github.com/kmeng805/sp24-ngordnet/tree/main/sp24-proj3-g264/proj3",
		},

		{
			title: "Ngordnet",
			description:
				"Back-end development for Ngordnet tool that visualizes history of word usage from WordNet database.",
			logo: "ngordnet.png",
			linkText: "N/A (email for access)",
			// link: "https://github.com/kmeng805/sp24-ngordnet",
		},

		{
			title: "Spam Email Classifier",
			description:
				"Given database of subject and body texts, built spam email classifier using exploratory data analysis (EDA), principal component analysis (PCA), feature engineering, and cross-validation concepts.",
			logo: "spam.png",
			linkText: "N/A (email for access)",
			// link: "https://github.com",
		},

		{
			title: "Cook County Housing Prices",
			description:
				"Given database of Cook County properties, trained model using scikit-learn to predict property price, performed LASSO/ridge regression on features.",
			logo: "regression.png",
			linkText: "N/A (email for access)",
			// link: "https://github.com",
		},

		{
			title: "Scheme Interpreter",
			description:
				"Built a Scheme interpreter using Python.",
			logo: "https://cs61a.org/proj/scheme/images/scheme_eval_recursion.png",
			linkText: "N/A",
			// link: "https://github.com",
		},
	],
};

export default INFO;
