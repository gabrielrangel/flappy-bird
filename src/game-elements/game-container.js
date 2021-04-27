export default class GameContainer {
  constructor(id, {className}) {
    this.element = document.querySelector(`#${id}`)
    this.element.setAttribute('class', className)
  }

  get width() {
    return this.element.offsetWidth;
  }

  get height() {
    return this.element.offsetHeight;
  }
}
