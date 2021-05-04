import Element from "./lib/element.js";

export default function Controllers(gameContainer, settings) {
  const controllers = new Element(settings);

  controllers.isPlaying = false;
  controllers.isOver = false;
  controllers.keyIsPressed = false;

  controllers.playPauseToggle = function () {
    if (!controllers.isOver) {
      controllers.isPlaying = !controllers.isPlaying;
      controllers["flappy-play-pause"].element.src = controllers.isPlaying
        ? "../assets/img/pause_circle_filled_white_48dp.svg"
        : "../assets/img/play_circle_filled_white_48dp.svg";
    }
  };

  controllers["flappy-play-pause"].element.onclick =
    controllers.playPauseToggle;

  window.addEventListener("blur", () => {
    if (controllers.isPlaying) {
      controllers.playPauseToggle();
    }
  });

  window.addEventListener("keydown", ({ key }) => {
    const keyFunctions = {
      " ": () => {
        controllers.keyIsPressed = true;
      },
      p: controllers.playPauseToggle,
    };

    if (keyFunctions[key.toLowerCase()]) {
      keyFunctions[key.toLowerCase()]();
    }
  });

  window.addEventListener("keyup", ({ key }) => {
    const keyFunctions = {
      " ": () => {
        controllers.keyIsPressed = false;
      },
    };

    if (keyFunctions[key.toLowerCase()]) {
      keyFunctions[key.toLowerCase()]();
    }
  });

  gameContainer.append(controllers);

  return controllers;
}
