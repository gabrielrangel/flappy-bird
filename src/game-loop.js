export default function Loop({ controllers, obstacles, bird, score }) {
  return setInterval(() => {
    if (controllers.isPlaying && !controllers.isOver) {
      obstacles.generator();
      obstacles.mover();
      bird.mover();
      score.movementChecker();
    }
  }, 40);
}
