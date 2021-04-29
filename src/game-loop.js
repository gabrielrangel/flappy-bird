export default function GameLoop(game) {
  game.obstacles.generator();
  setInterval(() => {
    if (game.isRunning) {
      game.obstacles.generator();
    }
  }, 2000);
  setInterval(() => {
    if (game.isRunning) {
      game.obstacles.mover();
      game.bird.mover();
    }
  }, 40);
}
