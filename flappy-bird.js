import GameImpl from "./src/game-implementation.js";

const stylesheet = document.createElement("link");
stylesheet.setAttribute("rel", "stylesheet");
stylesheet.setAttribute("href", "./assets/css/flappy-bird.css");

document.querySelector("head").appendChild(stylesheet);

new GameImpl();