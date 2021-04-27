import Div from '../div-class.js'

export default class GameControllers extends Div{
    constructor(parentElement, {className, children}){
        super(parentElement, className)
        children.forEach(({tag, ...attributes})=>{
            this[attributes.id] = document.createElement(tag)
            Object.entries(attributes).forEach(([name, value])=>{
                this[attributes.id].setAttribute(name, value)
            })
            this.element.appendChild(this[attributes.id])
        })
    }
}