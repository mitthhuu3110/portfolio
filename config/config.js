
import profile from './profile.png';
import { faAppStore, faGithub, faGooglePlay } from '@fortawesome/free-brands-svg-icons';
import { } from '@fortawesome/free-solid-svg-icons';

export const navigation = {
	name: "Mithilesh",
	links: [
		{
			title: "About",
			link: "#about",
		},
		{
			title: "Projects",
			link: "#projects",
		},
		{
			title: "Contact",
			link: "#contact",
		},
		{
			title: "Links",
			link: "/links",
		},
	],
}
export const intro = {
	title: "Hey, I'm Mithilesh",
	description: "Problem Solving Aficionado, Computer Science Engineer",
	image: profile.src,
	buttons: [
		{
			title: "Contact Me",
			link: "#contact",
			isPrimary: true,
		},
		{
			title: "Resume",
			link: "https://drive.google.com/file/d/1vonZWupRXhzgOqhOODXK_-8S6x-kHO-O/view?usp=sharing",
			isPrimary: false,
		},
	],
}

export const about = {
	title: "Who I am",
	description: [
		"I'm an undergraduate from National Institute of Technology (NIT), Raipur pursuing my bachelors in Computer Engineering. I am enthusiast in iOS mobile application developer ",
		"The tech industry is ever-evolving and I love being able to grow with it, while continually solidifying the fundamentals. I opensource my code from a place of empathy - for future developers, teammates, users, and with accessibility in mind. I also love joining communities, helping and mentoring new developers, and supporting organizations to promote diversity in tech. I’m sharing my programming journey on instagram, helping people who are just getting into the space of programming.",
		"When I’m not programming, I focus on my hobbies which are: content writing, exploring WEB3, meeting people and growing my network.",
	],
}

export const work = {
	title: "My Technical Skills",
	cards: [
		{
			title: "DSA - problem solving",
			description: "Problem solving using various Data Structures and Algorithms using C++ programming language. Competitive Programming enthusiast",
			icons: null,
		},
		{
			title: "iOS Development",
			description: "I create iOS applications using Swift, SwiftUI, UIKit & XCode. Native iOS, ipadOS, macOS, watchOS applications can be built using these technologies.",
			icons: null,
		},
		{
			title: "Web Development",
			description: "I create responsive static websites using HTML, CSS, JS and using frameworks like bootstrap, react. Also backend tools like node.js, Mysql, Django etc",
			icons: null,
		},
		{
			title: "Python programming",
			description: "Using various libraries of Python, like tkinter, pandas etc, I make some interesting applications.",
			icons: null,
		},
	],
}

export const projects = {
	title: "Projects",
	cards: [
		{
			title: "Move ticketing - Straight Seat layout",
			description: "A project which is used to select the tickets inside the movie theatre according to the position of the screen. This helps you to pre-book your seats in advance without waiting in queue for your favourite movie.",
			icons: [
				{
					icon: faGithub,
					link: "https://github.com/mitthhuu3110/Movie-ticketing",
				},
			]
		},
		{
			title: "2048-italy",
			description: "An italian tile puzzle game. An interesting Arithmetic game, keep solving until you get a 2048 tile",
			icons: [
				{
					icon: faGithub,
					link: "https://github.com/mitthhuu3110/2048-italy",
				},
			]
		},
		{
			title: "finish-your-tasks",
			description: "This is a basic to-do list application, which when you can check whether you completed a specific task or not. If you have not completed then, you can remind yourselves that you have a pending task",
			icons: [
				{
					icon: faGithub,
					link: "https://github.com/mitthhuu3110/Finish-your-Tasks",
				},
			]
		},
		{
			title: "Portfolio",
			description: "A portfolio website template that helps you showcase your work, projects and skills as a software developer or freelancer.",
			icons: [
				{
					icon: faGithub,
					link: "https://github.com/mitthhuu3110/portfolio",
				},
			]
		},
	],
}

export const contact = {
	title: "Get in touch",
	description: "Chat with me anytime! Alternatively, feel free to reach out directly by email at 3110mithilesh@gmail.com.",
	buttons: [
		{
			title: "Email Me",
			link: "mailto:3110mithilesh@gmail.com",
			isPrimary: true,
		},
		{
			title: "Schedule Meeting",
			link: "",
			isPrimary: false,
		},
	]
}

// SEARCH ENGINE 
export const SEO = {
	// 50 - 60 char  
	title: "Mithilesh Perugu| Computer Science Engineer | iOs | Web developer",
	description: "I create iOS apps and static websites. I am pursuing my bachelors in Computer Science in National Institute of Technology(NIT), Raipur.",
	image: profile.src,
}

export const links = {
	image: profile.src,
	title: "@mithileshperugu",
	description: "Computer Engineer | Flutter | Reactjs Developer",
	cards: [
		{
			title: "My website",
			link: "",
		},
		{
			title: "My GitHub",
			link: "https://github.com/mitthhuu3110",
		},
		{
			title: "My LinkedIn",
			link: "https://www.linkedin.com/in/mithilesh-p-5a1726236/",
		},
	]
}
