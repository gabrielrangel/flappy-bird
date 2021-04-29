import Element from "./element.js";
import Movements from "./movements.js"

export default class AnimatedElement extends Element {
  constructor(gameArea, settings) {
    super(settings);
    this.move = Movements(gameArea, this, {
      left: this.left ? this.left : gameArea.width,
    });
  }
}
