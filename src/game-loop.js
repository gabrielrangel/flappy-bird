export default function GameLoop(game) {
  game.obstacles.generator();
  const obstacleBuilder = setInterval(() => {
    if (game.isRunning) {
      game.obstacles.generator();
    }
  }, 2000);

  const gameAnimation = setInterval(() => {
    if (game.isRunning) {
      game.obstacles.mover();
      game.bird.mover(game.keyIsPressed);
    }
  }, 40);
}
