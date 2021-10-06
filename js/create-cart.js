let totalPriceArray = [];
const reducer = (a,b) => a + b;

function createCartPagesElt(value){
    let keys = Object.keys(localStorage);
    console.log(keys)
    keys.forEach(key => {
        const findId = value.find(value => key === value["_id"]);
        if (findId) {
        
        let teddy = JSON.parse(localStorage.getItem(findId._id));
        let teddyName = teddy.name.replaceAll(' ', '_')
        let qte = teddy.qte;
        let totalPriceTeddy = qte * teddy.price;
        let articleCartElt = document.createElement("article");
        let imgElt = document.createElement("img");
        let divLegendeElt = document.createElement("div");
        let h2NameElt = document.createElement("h2");
        let divQteElt = document.createElement("div");
        let qteElt = document.createElement("p");
        let addBtnElt = document.createElement("button");
        let removeBtnElt = document.createElement("button");
        let priceElt = document.createElement("p");
        let descriptionElt = document.createElement("p");
        
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
        addBtnElt.classList.add("btnQte");
        removeBtnElt.classList.add("cart-elt___remove");
        removeBtnElt.classList.add("btnQte");
        priceElt.classList.add("cart-elt__price");
        descriptionElt.classList.add("cart-elt__description");

        document.querySelector(".cart").appendChild(articleCartElt);
        articleCartElt.appendChild(imgElt);
        articleCartElt.appendChild(divLegendeElt);
        divLegendeElt.appendChild(h2NameElt);
        divLegendeElt.appendChild(divQteElt);
        divQteElt.appendChild(qteElt);
        divQteElt.appendChild(addBtnElt);
        divQteElt.appendChild(removeBtnElt);
        divLegendeElt.appendChild(priceElt);
        divLegendeElt.appendChild(descriptionElt);

        totalPriceArray.push(teddy.totalPrice);
        console.log(totalPriceArray);
        h2NameElt.textContent = teddy.name;
        priceElt.textContent = totalPriceTeddy + "€";
        descriptionElt.textContent = findId.description;
        qteElt.textContent = "Quantité : " + qte;
        addBtnElt.textContent = "+";
        removeBtnElt.textContent = "-";
        document.querySelector(".resumed__total-price").textContent = totalPriceArray.reduce(reducer) + "€";
        getIdProducts(teddy.id);
        }
        
    });
}

 

function addArticle(id){
    console.log(totalPriceArray);
    let getQte = localStorage.getItem(id);
    let parse = JSON.parse(getQte);
    const findIndex = totalPriceArray.indexOf(parse.totalPrice);
    console.log(findIndex);
    let teddyName = parse.name.replaceAll(' ', '_')
        parse.qte++;  
    parse.totalPrice = parse.qte * parse.price;
    totalPriceArray.splice(findIndex, 1, parse.totalPrice);
    console.log(totalPriceArray);
    localStorage.setItem(id, JSON.stringify(parse));
    document.querySelector("#" + teddyName).textContent = "Quantité : " + parse.qte;
    document.querySelector("#" + teddyName + "Price").textContent = parse.totalPrice + "€";
    document.querySelector(".resumed__total-price").textContent = totalPriceArray.reduce(reducer) + "€";
    

}
function removeArticle(id){
    let getQte = localStorage.getItem(id);
    let parse = JSON.parse(getQte);
    const findIndex = totalPriceArray.indexOf(parse.totalPrice);
    let teddyName = parse.name.replaceAll(' ', '_')
        parse.qte--;
        parse.totalPrice = parse.qte * parse.price;
    totalPriceArray.splice(findIndex, 1, parse.totalPrice);
    localStorage.setItem(id, JSON.stringify(parse));
    document.querySelector("#" + teddyName).textContent = "Quantité : " + parse.qte;
    document.querySelector("#" + teddyName + "Price").textContent = parse.totalPrice + "€";
    document.querySelector(".resumed__total-price").textContent = totalPriceArray.reduce(reducer) + "€";
    if (parse.qte == 0) {
        localStorage.removeItem(id);
        const parentNode = document.querySelector(".cart");
        const childNode = document.querySelector("#" + parse.name + "Article");
        parentNode.removeChild(childNode);
        console.log(test);
    }
    console.log(totalPriceArray);
}
