import Element from "./lib/element.js";

export default function Controllers(gameArea, settings) {
  const controllers = new Element(settings);

  controllers.isPlaying = false;
  controllers.isOver = false;
  controllers.keyIsPressed = false;

  controllers["flappy-play-pause"].element.onclick = () => {
    controllers.isPlaying = !controllers.isPlaying;
  };

  window.addEventListener("blur", () => {
    controllers.isPlaying = false;
  });

  window.addEventListener("focus", () => {
    if (!controllers.isOver) {
      controllers.isPlaying = true;
    }
  });

  window.addEventListener("keydown", () => {
    controllers.keyIsPressed = true;
  });

  window.addEventListener("keyup", () => {
    controllers.keyIsPressed = false;
  });

  gameArea.append(controllers)

  return controllers;
}
