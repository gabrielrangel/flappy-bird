import AnimatedElement from "./lib/animated-element.js";

export default function Bird(gameArea, { ratio, speed, ...settings }) {
  settings.initialTop = gameArea.height / 2;
  settings.initialLeft = -settings.style.height * ratio;
  const bird = new AnimatedElement(gameArea, settings);
  gameArea.append(bird);
  return {
    mover: () => {
      if (bird.left < gameArea.width/4) {
        bird.move.right(speed)
      }
    },
    ...bird,
  };
}
