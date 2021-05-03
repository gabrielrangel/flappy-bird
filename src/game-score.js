import Element from "./lib/element.js";

export default function Score(
  { container, bird, obstacles, controllers },
  settings
) {
  const score = new Element(settings);

  score.element.innerHTML = 0;

  score.up = () => {
    score.element.innerHTML = Number(score.element.innerHTML) + 1;
  };

  score.movementChecker = () => {
    obstacles.list().forEach((obstacle) => {
      if (
        obstacle.left <= bird.left + bird.width &&
        obstacle.left + obstacle.width >= bird.left
      ) {
        if (
          bird.top < obstacle.gap.top ||
          bird.top + bird.height > obstacle.gap.top + obstacle.gap.height
        ) {
          controllers.isOver = true;
        } else {
          obstacle.overcome = false;
        }
      } else if (typeof obstacle.overcome === "boolean" && !obstacle.overcome) {
        obstacle.overcome = true;
        score.up();
      }
    });
  };

  container.append(score);

  return score;
}
