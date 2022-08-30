import type { CardProps } from 'src/types/Card';
import Gboggle from '../../static/images/GBoggle/Game.png';
import Gengine from '../../static/images/GEngine/Vulkan.png';
import Badminton from '../../static/images/Badminton/MatchEnd.png';
import Ragkar from '../../static/videos/Ragkar/RagkarDemo.mp4';
import Ecologic from '../../static/videos/Ecologic/EcologicDemo.mp4';
import Croma from '../../static/images/Croma/CromaScreenshot.png';
import Isala from '../../static/images/Isala/IsalaScreenshot.png';
import Gstain from '../../static/images/GStain/GStainScreenshot.png';

export const projects: CardProps[] = [];

projects.push({
	imageRoute: Ragkar,
	imageAlt: 'Image of the "Ragkar"',
	languages: [
		'Python',
		'C',
		'MQTT',
		'HTML',
		'CSS',
		'Javascript',
		'Websockets',
		'RTSP',
		'PI',
		'ESP32'
	],
	projectTitle: 'Ragkar',
	projectDescription:
		'A small car, which can be controlled from a website. The website also has a video stream, which streams a first person view of the car.',
	githubLink: 'https://github.com/AnnoyingDog99/Ragkar'
});

projects.push({
	imageRoute: Ecologic,
	imageAlt: 'Screenshot of Ecologic',
	languages: ['Unity', 'C#', 'HLSL', 'Shadergraph', 'CG'],
	projectTitle: 'Ecologic',
	projectDescription:
		'An ecosystem simulation build with Unity, with generated terrain and organisms that interact with each other.',
	githubLink: 'https://github.com/AnnoyingDog99/Ecosystem-simulation'
});

projects.push({
	imageRoute: Gboggle,
	imageAlt: 'Gboggle game screen',
	languages: [
		'Svelte',
		'Node',
		'Typescript',
		'HTML',
		'SCSS',
		'Rollup',
		'Express',
		'Redis',
		'Socket.io'
	],
	projectTitle: 'GBoggle',
	projectDescription: 'GBoggle is a web application based on the board game Boggle.',
	githubLink: 'https://github.com/Jitzek/GBoggle'
});

projects.push({
	imageRoute: Badminton,
	imageAlt: 'Darts app screenshot',
	languages: ['SvelteKit', 'Typescript', 'SCSS', 'Jest', 'HTML', 'Vite'],
	projectTitle: 'Badminton',
	projectDescription: 'Badminton is a web application for keeping track of your darts matches. ',
	githubLink: 'https://github.com/JorunnO/Badminton'
});

projects.push({
	imageRoute: Gengine,
	imageAlt: 'Screenshot render engine',
	languages: ['Vulkan', 'C++', 'CMake', 'GLSL'],
	projectTitle: 'Vulkan graphics engine',
	projectDescription: 'Gengine is a custom game engine made with Vulkan',
	githubLink: 'https://github.com/AnnoyingDog99/GEngine'
});

projects.push({
	imageRoute: Croma,
	imageAlt: 'Screenshot robotics website',
	languages: ['HTML', 'Css', 'Javascript', 'Websockets', 'Python'],
	projectTitle: 'Robotics website',
	projectDescription: 'A site made for info about our robot for the robotics tournament',
	githubLink: 'https://github.com/Jitzek/TCS-Simulation',
	liveLink: 'https://jitzek.github.io/croma-web-site/home.html'
});

projects.push({
	imageRoute: Isala,
	imageAlt: 'Screenshot homepage Isala',
	languages: ['HTML', 'Css', 'Javascript', 'PHP', 'LDAP', 'MySQL'],
	projectTitle: 'Isala',
	projectDescription: `A website created for Isala to monitor diabetus patients. 
	Website was made for a project based on security, where students tried to find vulnerabilities in eachothers websites.`,
	githubLink: 'https://github.com/Jitzek/isala-web-app'
});

projects.push({
	imageRoute: Gstain,
	imageAlt: 'Screenshot Gstain',
	languages: ['Java', 'Javafx'],
	projectTitle: 'Gstain',
	projectDescription:
		'A drawing app that tries to copy Adobe Illustrator. This project was made to learn about design patterns.',
	githubLink: 'https://github.com/Jitzek/GStain'
});
