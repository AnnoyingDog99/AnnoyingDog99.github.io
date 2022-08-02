import type { CardProps } from "src/types/Card";
import Gboggle from "../../static/images/GBoggle/Game.png";
import Gengine from "../../static/images/GEngine/Vulkan.png";
import Badminton from "../../static/images/Badminton/MatchEnd.png";
import Ragkar from "../../static/videos/Ragkar/RagkarDemo.mp4";
import Ecologic from "../../static/videos/Ecologic/EcologicDemo.mp4";
import Croma from "../../static/images/Croma/CromaScreenshot.png";





export const projects: CardProps[] = [];


projects.push({
    imageRoute: Ragkar,
    imageAlt: "Image of the \"Ragkar\"",
    languages: ["Python", "C", "MQTT", "HTML", "CSS", "Javascript", "Websockets", "RTSP", "PI", "ESP32"],
    projectTitle: "Ragkar",
    projectDescription: "A small car controlled from the web", //FIXME
    githubLink: "https://github.com/AnnoyingDog99/Ragkar"
});

projects.push({
    imageRoute: Ecologic, 
    imageAlt: "Screenshot of Ecologic",
    languages: ["Unity", "C#", "HLSL", "Shadergraph", "CG"],
    projectTitle: "Ecologic",
    projectDescription: "An ecosystem simulation", //FIXME
    githubLink: "https://github.com/AnnoyingDog99/Ecosystem-simulation"
});

projects.push({
    imageRoute: Gboggle,
    imageAlt: "Gboggle game screen",
    languages: ["Svelte", "Node", "Typescript", "HTML", "SCSS", "Rollup", "Express", "Redis", "Socket.io"],
    projectTitle: "GBoggle",
    projectDescription: "GBoggle is a game based on the board game Boggle.", //FIXME
    githubLink: "https://github.com/Jitzek/GBoggle"
});

projects.push({
    imageRoute: Badminton,
    imageAlt: "Darts app screenshot",
    languages: ["SvelteKit", "Typescript", "SCSS", "Jest", "HTML", "Vite"],
    projectTitle: "Badminton",
    projectDescription: "A way to manage your dart matches", //FIXME
    githubLink: "https://github.com/JorunnO/Badminton"
});

projects.push({
    imageRoute: Gengine,
    imageAlt: "Screenshot render engine",
    languages: ["Vulkan", "C++", "CMake", "GLSL"],
    projectTitle: "Vulkan graphics engine",
    projectDescription: "Gengine is a render engine made with Vulkan", //FIXME
    githubLink: "https://github.com/AnnoyingDog99/GEngine"
});



projects.push({
    imageRoute: Croma,
    imageAlt: "Screenshot robotics website",
    languages: ["HTML", "Css", "Javascript", "Websockets", "Python"],
    projectTitle: "Robotics website",
    projectDescription: "A site made for info about our robot for the robotics tournament", //FIXME
    githubLink: "https://github.com/Jitzek/TCS-Simulation",
    liveLink: "https://jitzek.github.io/croma-web-site/home.html"
});