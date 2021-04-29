import AnimatedElement from './lib/animated-element.js'

export default function Obstacle(gameArea, { gapHeight, speed, ...settings }) {
  class Obstacle extends AnimatedElement {
    constructor(gameArea, settings) {
      if (!settings.element) {
        const minPerc = gapHeight / gameArea.height;
        const maxPerc = 1 - minPerc;

        const random = Math.random() * (maxPerc - minPerc - minPerc) + minPerc;

        settings.children[0].style.height = random * gameArea.height;
        settings.children[1].style.height =
          (maxPerc - random) * gameArea.height;
      }
      settings.initialLeft = gameArea.width
      super(gameArea, settings)
    }
  }

  return {
    generator: () => {
      gameArea.append(new Obstacle(gameArea, settings));
    },

    mover: () => {
      document.querySelectorAll(`#${settings.id}`).forEach((element) => {
        const obstacle = new Obstacle(gameArea, { element });
        if (obstacle.left > -obstacle.width) {
          obstacle.move.left(speed);
        } else {
          obstacle.remove();
        }
      });
    },
  };
}
