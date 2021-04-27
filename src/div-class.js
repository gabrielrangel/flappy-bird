export default class Div {
  constructor(parentElement, className = null) {
    this.element = document.createElement("div");
    if (className) {
      this.element.setAttribute("class", className);
    }
    parentElement.appendChild(this.element);
  }

  set height(height) {
    this.element.style.height = `${height}%`;
  }

  get height() {
    return Number(this.element.style.height.replace('%','').trim());
  }
}
