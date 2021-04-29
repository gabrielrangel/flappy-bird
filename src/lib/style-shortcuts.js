export default class StyleShortcuts {
  set height(value) {
    this.element.style.height = `${value}px`;
  }

  get height() {
    return Number(this.element.style.height.replace("px", "").trim());
  }

  set width(value) {
    this.element.style.width = `${value}px`;
  }

  get width() {
    return Number(this.element.style.width.replace("px", "").trim());
  }

  set top(value) {
    this.element.style.top = `${value}px`;
  }

  get top() {
    return Number(this.element.style.top.replace("px", "").trim());
  }

  set left(value) {
    this.element.style.left = `${value}px`;
  }

  get left() {
    return Number(this.element.style.left.replace("px", "").trim());
  }
}
