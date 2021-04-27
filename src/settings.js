export default class Settings {
  constructor() {
    this.gameContainer = {
      className: "flappy-game-container",
    };

    this.gameScore = {
      className: "flappy-game-score",
    };

    this.gameControllers = {
      className: "flappy-game-controllers",
    };

    this.gameArea = {
      className: "flappy-game-area",
    };

    this.gameObstacle = {
      className: "flappy-game-obstacle",
      gapSize: 20,
      minHeight: 20,
    };
  }
}
