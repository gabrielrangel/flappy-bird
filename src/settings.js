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
      children: [
        {
          tag: "img",
          id: "flappy-play-pause",
          src: "../assets/img/play_circle_filled_black_48dp.svg",
        }
      ],
    };

    this.gameArea = {
      className: "flappy-game-area",
    };

    this.gameBird = {
      tag: 'img',
      class: 'flappy-game-bird',
      src: '../assets/img/bird.png'
    }

    this.gameObstacle = {
      className: "flappy-game-obstacle",
      gapSize: 20,
      minHeight: 20,
    };
  }
}
