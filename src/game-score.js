import Element from "./lib/element.js";

export default function Score(
  { container, bird, obstacles, controllers },
  settings) {
  const score = new Element(settings);

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
        }
      }
    });
  };

  container.append(score);

  return score;
}
