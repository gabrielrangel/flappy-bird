import Div from "../div-class.js";

function tubeGenerator(parentElement) {
  const container = new Div(parentElement);
  new Div(container.element);
  new Div(container.element);
  return container;
}

export default class GameObstacle {
  constructor(parentElement, {className, gapSize, minHeight}) {
    this.container = new Div(parentElement, className);

    this.upperTube = tubeGenerator(this.container.element);
    this.upperTube.height = Math.floor(
      Math.random() * (100 - gapSize - minHeight - minHeight) + minHeight
    );

    this.bottomTube = tubeGenerator(this.container.element);
    this.bottomTube.height = 100 - gapSize - this.upperTube.height;
  }
}