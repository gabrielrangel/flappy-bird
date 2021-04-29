export default function GameLoop(game) {
  setInterval(game.obstacles.generator, 2000);
  setInterval(game.obstacles.mover, 40);
}
