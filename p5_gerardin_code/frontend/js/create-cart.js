let totalPriceArray = [];
const reducer = (a,b) => a + b;

function distribue(value) { createCartHtmlElt(value)}

function createCartHtmlElt(value){
    let keys = Object.keys(localStorage);
    keys.forEach(key => {
        const findId = value.find(value => key === value["_id"]);
        if (findId) {
        
        const teddy = JSON.parse(localStorage.getItem(findId._id));
        const teddyName = teddy.name.replaceAll(' ', '_')
        const qte = teddy.qte;
        const totalPriceTeddy = qte * teddy.price;
        const articleCartElt = document.createElement("article");
        const imgElt = document.createElement("img");
        const divLegendeElt = document.createElement("div");
        const h2NameElt = document.createElement("h2");
        const divQteElt = document.createElement("div");
        const qteElt = document.createElement("p");
        const addBtnElt = document.createElement("button");
        const removeBtnElt = document.createElement("button");
        const priceElt = document.createElement("p");
        
        articleCartElt.setAttribute("id", teddy.name + "Article");
        priceElt.setAttribute("data-price", totalPriceTeddy);
        imgElt.setAttribute("alt", "Ours en peluche" + teddyName);
        imgElt.setAttribute('src', findId.imageUrl);
        addBtnElt.setAttribute("onClick", "addArticle('" + teddy.id + "')");
        addBtnElt.setAttribute("data-name", teddyName);
        removeBtnElt.setAttribute("onClick", "removeArticle('" + teddy.id + "')");
        removeBtnElt.setAttribute("data-name", teddyName);
        qteElt.setAttribute("id", teddyName);
        priceElt.setAttribute("id", teddyName + "Price")

        articleCartElt.classList.add("cart-elt");
        imgElt.classList.add("cart-elt__img");
        divLegendeElt.classList.add("cart-elt__legende");
        divQteElt.classList.add("cart-elt__qte-elt")
        h2NameElt.classList.add("cart-elt__name");
        qteElt.classList.add("cart-elt__qte");
        addBtnElt.classList.add("cart-elt__add");
        addBtnElt.classList.add("btn");
        removeBtnElt.classList.add("cart-elt___remove");
        removeBtnElt.classList.add("btn");
        priceElt.classList.add("cart-elt__price");

        document.querySelector(".cart").appendChild(articleCartElt);
        articleCartElt.appendChild(imgElt);
        articleCartElt.appendChild(divLegendeElt);
        divLegendeElt.appendChild(h2NameElt);
        divLegendeElt.appendChild(divQteElt);
        divQteElt.appendChild(qteElt);
        divQteElt.appendChild(removeBtnElt);
        divQteElt.appendChild(addBtnElt);
        divLegendeElt.appendChild(priceElt);

        totalPriceArray.push(teddy.totalPrice);
        h2NameElt.textContent = teddy.name;
        priceElt.textContent = totalPriceTeddy + "€";
        qteElt.textContent = "Quantité : " + qte;
        addBtnElt.textContent = "+";
        removeBtnElt.textContent = "-";
        document.querySelector(".resumed__total-price").textContent = "Prix total : " + totalPriceArray.reduce(reducer) + "€";
        getIdProducts(teddy.id);
        }
        
    });
}

function addArticle(id) {
    let getQte = localStorage.getItem(id);
    let parse = JSON.parse(getQte);
    const findIndex = totalPriceArray.indexOf(parse.totalPrice);
    const teddyName = parse.name.replaceAll(' ', '_');
    parse.qte++; 
    parse.totalPrice = parse.qte * parse.price;
    totalPriceArray.splice(findIndex, 1, parse.totalPrice);
    localStorage.setItem(id, JSON.stringify(parse));
    document.querySelector("#" + teddyName).textContent = "Quantité : " + parse.qte;
    document.querySelector("#" + teddyName + "Price").textContent = parse.totalPrice + "€";
    document.querySelector(".resumed__total-price").textContent =  "Prix total : " + totalPriceArray.reduce(reducer) + "€";
}

function removeArticle(id) {
    let getQte = localStorage.getItem(id);
    let parse = JSON.parse(getQte);
    const findIndex = totalPriceArray.indexOf(parse.totalPrice);
    let teddyName = parse.name.replaceAll(' ', '_');
    parse.qte--;
    parse.totalPrice = parse.qte * parse.price;
    totalPriceArray.splice(findIndex, 1, parse.totalPrice);
    localStorage.setItem(id, JSON.stringify(parse));
    document.querySelector("#" + teddyName).textContent = "Quantité : " + parse.qte;
    document.querySelector("#" + teddyName + "Price").textContent = parse.totalPrice + "€";
    document.querySelector(".resumed__total-price").textContent =  "Prix total : " + totalPriceArray.reduce(reducer) + "€";
    if (parse.qte == 0) {
        localStorage.removeItem(id);
        const parentNode = document.querySelector(".cart");
        const childNode = document.querySelector("#" + parse.name + "Article");
        parentNode.removeChild(childNode);
        removeIdOfProduct(id)
    }
}
