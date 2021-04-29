import Element from "./lib/element.js";
import GameLoop from "./game-loop.js";
import Bird from "./game-bird.js"
import Obstacle from'./game-obstacle.js'

export default function GameImpl(settings, containerId) {
  new Element(settings.stylesheet);

  const game = {};

  game.container = new Element({
    query: `#${containerId}`,
    ...settings.gameContainer,
  });
  game.score = new Element(settings.gameScore);
  game.controllers = new Element(settings.gameControllers);
  settings.gameArea.style = settings.gameContainer.style;
  game.area = new Element(settings.gameArea);

  Object.entries(game).forEach(([key, value]) => {
    if (key !== "container") {
      game.container.append(value);
    }
  });

  game.obstacles = Obstacle(game.area, settings.gameObstacle)
  game.bird = Bird(game.area, settings.gameBird)

  GameLoop(game);
}
