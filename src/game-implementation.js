import Element from "./lib/element.js";
import Loop from "./game-loop.js";
import Bird from "./game-bird.js";
import Obstacle from "./game-obstacle.js";
import Controllers from "./game.controllers.js"
import Score from "./game-score.js"

export default function GameImpl(settings, containerId) {
  new Element(settings.stylesheet);
  const game = new Object();

  game.container = new Element({
    query: `#${containerId}`,
    ...settings.gameContainer,
  });
  
  settings.gameArea.style = settings.gameContainer.style;
  game.area = new Element(settings.gameArea);
  game.container.append(game.area)
  
  game.controllers = Controllers(game.area, settings.gameControllers);
  
  game.obstacles = Obstacle(game.area, settings.gameObstacle);
  
  game.bird = Bird(game.area, settings.gameBird);
  
  game.score = Score(game, settings.gameScore)

  game.loop = Loop(game);
}