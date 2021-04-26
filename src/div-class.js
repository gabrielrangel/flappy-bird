export default class Div {
    constructor (parentElement, className){
        this.element = document.createElement('div');
        this.element.setAttribute('class', className)
        parentElement.appendChild(this.element)
    }
}