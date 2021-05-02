import StyleShortcuts from "./style-shortcuts.js";
import Movements from "./movements.js";

export default class Element extends StyleShortcuts {
  constructor({ element = null, query = "", movements, ...elementSettings }) {
    super();
    try {
      this.element = element ? element : document.querySelector(query);
    } catch (e) {
      const { tag } = elementSettings;
      this.element = document.createElement(tag);
    } finally {
      const { tag, style = {}, children = [], ...attributes } = elementSettings;
      Object.entries(attributes).forEach(([name, value]) => {
        this.element.setAttribute(name, value);
      });

      Object.entries(style).forEach(([name, value]) => {
        this[name] = value;
      });

      children.forEach((childSettings) => {
        this[childSettings.id] = new Element(childSettings);
        this.element.append(this[childSettings.id].element);
      });
    }
  }
  
  append = (child) => {
    this.element.appendChild(child.element);
  }

  remove = () => {
    this.element.remove()
  }
}
