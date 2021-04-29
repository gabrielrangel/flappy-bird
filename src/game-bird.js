export default function(){
    game.bird = new Element(settings.gameBird);
    game.area.append(game.bird);
    game.bird.move = Movements(game.area, game.bird, {
      top: game.area.height / 2,
      left: -game.bird.width,
    });
}