import Element from "./lib/element.js";
import Loop from "./game-loop.js";
import Bird from "./game-bird.js";
import Obstacle from "./game-obstacle.js";
import Controllers from "./game.controllers.js";
import Score from "./game-score.js";

export default function GameImpl(settings, containerId) {
  new Element(settings.stylesheet);
  const game = new Object();

  game.container = new Element({
    query: `#${containerId}`,
    ...settings.gameContainer,
  });

  settings.gameArea.style = settings.gameContainer.style;
  game.area = new Element(settings.gameArea);
  game.container.append(game.area);

  game.obstacles = Obstacle(game.area, settings.gameObstacle);

  game.newGame = function () {
    game.bird = Bird(game, settings.gameBird);

    game.score = Score(game, settings.gameScore);

    game.loop = Loop(game);
  };

  game.resetGame = () => {
    clearInterval(game.loop);
    delete game.loop;

    game.score.remove();
    delete game.score;

    game.bird.remove();
    delete game.bird;

    game.obstacles.list().forEach((obstacle) => {
      obstacle.remove();
    });

    game.newGame();
  };

  game.controllers = Controllers(game, settings.gameControllers);

  game.newGame();
}
