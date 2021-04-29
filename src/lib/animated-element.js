import Element from "./element.js";
import Movements from "./movements.js";

export default class AnimatedElement extends Element {
  constructor(gameArea, { initialLeft = 0, initialTop = 0, ...settings }) {
    super(settings);
    this.move = Movements(gameArea, this, {
      left: isNaN(this.left) ? initialLeft : this.left,
      top: isNaN(this.top) ? initialTop : this.top,
    });
  }
}
