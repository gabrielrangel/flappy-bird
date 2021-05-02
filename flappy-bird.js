import GameImpl from "./src/game-implementation.js";

export default (function flappyBird(containerId = "flappy-bird") {
  fetch("./settings.json")
    .then((response) => response.json())
    .then((settings) => {
      GameImpl(settings, containerId);
    })
    .catch((err) => {
      throw err;
    });
})();
