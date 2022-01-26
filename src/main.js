import { css, html, LitElement } from "lit-element";

const listItems = [
    {category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
    {category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
    {category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
    {category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
    {category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
    {category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"}
]

class ContainerElement extends LitElement{
    static get properties(){
        return {
            checkBox: {type: Boolean},
            checkClicked: {type: Function},
            getSearch: {type: Function},
            products : {type: Array}
        }
    }

    static get styles(){
        return css `
            .container{
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                font-size: 20px;
                margin: 10%;
                
            }
        `
    }

    constructor(){
        super();

        this.checkClicked = this.checkClicked.bind(this)

        this.getSearch = this.getSearch.bind(this)

        this.checkBox = false

        this.products = [...listItems]
    }

    checkClicked(event){
       this.checkBox = event.target.checked
       if(this.checkBox){
           this.products = this.products.filter((product) => {
               return product.stocked === true
           })
       }
       else{
           this.products = [...listItems]
       }
    }

    getSearch(event){
        let value = event.target.value.trim()
        
        this.products = this.products.filter((product) => {
            return product.name.toLowerCase().startsWith(value)
        })

        if(value === ''){
            this.products = [...listItems]
        }

    }

    render(){
        return html `
        <div class="container">
            <search-element .onCheckClicked=${this.checkClicked} .onSearchInput=${this.getSearch}  check=${this.checkBox}></search-element>
            ${this.products.length === 0 ? html `<h3>No match found!</h3>` : html `<table-element .goods=${this.products} ></table-element>`}
        </div>
        `
    }

}

customElements.define('container-element', ContainerElement)