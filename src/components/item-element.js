import { css, html, LitElement } from "lit-element";

class ItemElement extends LitElement{
    static get properties(){
        return {
            category: {type: String},
            items: {type: Array}
        }
    }

    static get styles(){
        return css `
            .item-category{
                font-weight: bold;
                margin: 5px;
            }
            .list-items span{
                margin: 5px 10px;
            }

            .items{
                display: flex;
                flex-direction: column;
                margin: 5px;
            }
            .red-text{
                color: red;
            }
        `
    }

   
    constructor(){
        super();
        this.category = ''
        this.items = []
    }

    render(){
       
        return html `
        <div class="list-items"> 
            <div class="item-category">${this.category}</div>
            <div class="items">${this.items.map(item => html `<div><span class=${!item.stocked ? 'red-text': ''}>${item.name}</span> <span>${item.price}</span></div>`)}</div>
        </div>
           `
    }
}

customElements.define('item-element', ItemElement)