export default function Loop(game) {
  return setInterval(() => {
    if (game.controllers.isPlaying) {
      const obstaclesPositions = game.obstacles.mover();
      let lastObstacle = Object()
      try {
        lastObstacle = obstaclesPositions.reduce((acc, cur) => {
          return acc.left > cur.left ? acc : cur;
        });
      } catch (e) {
        lastObstacle = { left: 0, top: 0 };
      } finally {
        if (lastObstacle.left < game.area.width/2) {
          game.obstacles.generator();
        }
      }

      const birdPosition = game.bird.mover(game.controllers.keyIsPressed);
    }
  }, 40);
}
