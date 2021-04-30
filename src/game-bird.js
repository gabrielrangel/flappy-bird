import AnimatedElement from "./lib/animated-element.js";

export default function Bird(gameArea, { ratio, speed, ...settings }) {
  settings.initialTop = gameArea.height / 2;
  settings.initialLeft = -settings.style.height * ratio;
  const bird = new AnimatedElement(gameArea, settings);
  gameArea.append(bird);
  return {
    mover: (keyIsPressed) => {
      if (bird.left < gameArea.width / 4) {
        bird.move.right(speed);
      }
      if (bird.left > 0) {
        if (keyIsPressed) {
          bird.move.up(2 * speed);
        } else {
          bird.move.down(speed);
        }
      }
      return { top: bird.top, left: bird.left };
    },
    ...bird,
  };
}
