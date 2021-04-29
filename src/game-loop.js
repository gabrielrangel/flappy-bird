export default function GameLoop(game) {
  game.obstacles.generator()
  setInterval(game.obstacles.generator, 2000);
  setInterval(()=>{
    game.obstacles.mover()
    game.bird.mover()
  }, 40);
}
