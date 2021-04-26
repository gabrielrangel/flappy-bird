import Settings from "./settings.js";
import GameContainer from "./game-elements/game-container.js";
import GameScore from "./game-elements/game-score.js";
import GameControllers from "./game-elements/game-controllers.js";
import GameArea from "./game-elements/game-area.js";

export default class GameImpl {
  constructor(id = "flappy-bird") {
    this.settings = new Settings();

    this.container = new GameContainer(
      id,
      this.settings.gameContainer.className
    );

    this.score = new GameScore(
        this.container.element,
        this.settings.gameScore.className
    );

    this.controllers = new GameControllers(
      this.container.element,
      this.settings.gameControllers.className
    );

    this.area = new GameArea(
        this.container.element,
        this.settings.gameArea.className
    )
  }
}
