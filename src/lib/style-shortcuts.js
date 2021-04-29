export default class StyleShortcuts {
  set height(value) {
    this.element.style.height = `${value}px`;
  }

  get height() {
    const height = this.element.style.height.replace("px", "").trim()
    return height == "" ? undefined : Number(height)
  }

  set width(value) {
    this.element.style.width = `${value}px`;
  }

  get width() {
    const width = this.element.style.width.replace("px", "").trim()
    return width == "" ? undefined : Number(width)
  }

  set top(value) {
    this.element.style.top = `${value}px`;
  }

  get top() {
    const top = this.element.style.top.replace("px", "").trim()
    return top == "" ? undefined : Number(top)
  }

  set left(value) {
    this.element.style.left = `${value}px`;
  }

  get left() {
    const left = this.element.style.left.replace("px", "").trim()
    return left == "" ? undefined : Number(left)
  }
}
