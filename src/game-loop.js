export default function Loop({ controllers, obstacles, area, bird, score }) {
  return setInterval(() => {
    if (controllers.isPlaying) {
      const obstaclesPositions = obstacles.mover();
      let lastObstacle = Object();
      try {
        lastObstacle = obstaclesPositions.reduce((acc, cur) => {
          score.movementChecker(cur)
          return acc.obstacle.left > cur.obstacle.left ? acc : cur;
        });
      } catch (e) {
        lastObstacle = { obstacle: { left: 0, top: 0 } };
      } finally {
        if (lastObstacle.obstacle.left < area.width / 2) {
          obstacles.generator();
        }
      }

      bird.mover(controllers.keyIsPressed);
    }
  }, 40);
}
