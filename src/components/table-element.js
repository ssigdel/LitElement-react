import { css, html, LitElement } from "lit-element";

class TableElement extends LitElement{
    static get properties(){
        return {
            goods: {type: Array},
            sports: {type: Array},
            electronics: {type: Array}
        }
    }

    static get styles(){
        return css `
            .table-container{
                margin: 20px;
            }
            .table-container span{
                font-weight: bold;
                margin-left: 10px;
            }
        `
    }
    constructor(){
        super();
        this.goods = []
        this.sports = []
        this.electronics = []
    }

    filterCategory(value){
        return this.goods.filter((item) => {
            return item.category === value
        })
    }

    render(){
        this.electronics = this.filterCategory('Electronics')

        this.sports = this.filterCategory('Sporting Goods')

        return html `<div class="table-container">
        <span>Name</span>
        <span>Price</span>
        <item-element category="Sporting Goods" .items="${this.sports}"></item-element>
        <item-element category="Electronics" .items="${this.electronics}"></item-element>
        </div>`
    }
}

customElements.define('table-element', TableElement)