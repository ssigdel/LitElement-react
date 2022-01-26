import { css, html, LitElement } from "lit-element";

class SearchElement extends LitElement{

    static get properties(){
        return {
            onCheckClicked : {type: Function},
            onSearchInput: {type: Function}
        }
    }

    static get styles(){
        return css `
        .search-area{
            display: flex;
            flex-direction: column;
        }
        input[type="text"]{
            padding: 5px;
            font-size: 16px;
        }
        `
    }
    constructor(){
        super();

        this.onCheckClicked = () => {}

        this.onSearchInput = () => {}
    }

    render(){
        return html
        `<div class="search-area">
            <input type="text" @change=${(event) => this.onSearchInput(event)} value="" placeholder="Search..."/>
            <div>
            <input type="checkbox"  @click=${(event) => this.onCheckClicked(event)}> <label>Only show products in stock</label>
            </div>
        </div>`
    }

}

customElements.define('search-element', SearchElement)