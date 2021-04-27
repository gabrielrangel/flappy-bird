export default class Bird {
    constructor(parentNode, {tag, ...attributes}){
        this.element = document.createElement(tag)
        Object.entries(attributes).forEach(([name, value]) =>{
            this.element.setAttribute(name, value)
        })
        parentNode.appendChild(this.element)
    }
}