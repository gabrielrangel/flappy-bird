import Element from "./lib/element.js";

export default function Controllers({ resetGame, container }, settings) {
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

  controllers.restart = () => {
    controllers.isPlaying = true;
    controllers.isOver = false;
    controllers.keyIsPressed = false;
    resetGame();
  };

  controllers.functionKeys = {
    " ": () => {
      controllers.keyIsPressed = true;
    },
    p: controllers.playPauseToggle,
    r: controllers.restart,
  };

  controllers["flappy-play-pause"].element.onclick =
    controllers.playPauseToggle;

  controllers["flappy-restart"].element.onclick = () => controllers.restart;

  window.addEventListener("blur", () => {
    if (controllers.isPlaying) {
      controllers.playPauseToggle();
    }
  });

  window.addEventListener("keydown", ({ key }) => {
    if (controllers.functionKeys[key.toLowerCase()]) {
      controllers.functionKeys[key.toLowerCase()]();
    }
  });

  window.addEventListener("keyup", ({ key }) => {
    if (key === " ") {
      controllers.keyIsPressed = false;
    }
  });

  container.append(controllers);

  return controllers;
}
