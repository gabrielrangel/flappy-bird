import AnimatedElement from "./lib/animated-element.js";

export default function Bird(
  { area, controllers },
  { ratio, speed, ...settings }
) {
  settings.initialTop = area.height / 2;
  settings.initialLeft = -settings.style.width;

  const bird = new AnimatedElement(area, settings);

  bird.mover = () => {
    if (bird.left < area.width / 4) {
      bird.move.right(speed);
    }
    if (bird.left > 0) {
      if (controllers.keyIsPressed) {
        bird.move.up(2 * speed);
      } else {
        bird.move.down(speed);
      }
    }
    return { top: bird.top, left: bird.left };
  };

  area.append(bird);

  return bird;
}
