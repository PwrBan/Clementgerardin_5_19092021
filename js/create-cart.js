let totalPriceArray = [];
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
        let qteElt = document.createElement("p");
        let addBtnElt = document.createElement("button");
        let removeBtnElt = document.createElement("button");
        let priceElt = document.createElement("p");
        let descriptionElt = document.createElement("p");
        
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
        h2NameElt.classList.add("cart-elt__name");
        qteElt.classList.add("cart-elt__qte");
        addBtnElt.classList.add("cart-elt__add");
        removeBtnElt.classList.add("cart-elt___remove");
        priceElt.classList.add("cart-elt__price");
        descriptionElt.classList.add("cart-elt__description");

        document.querySelector(".cart").appendChild(articleCartElt);
        articleCartElt.appendChild(imgElt);
        articleCartElt.appendChild(divLegendeElt);
        divLegendeElt.appendChild(h2NameElt);
        divLegendeElt.appendChild(qteElt);
        divLegendeElt.appendChild(addBtnElt);
        divLegendeElt.appendChild(removeBtnElt);
        divLegendeElt.appendChild(priceElt);
        divLegendeElt.appendChild(descriptionElt);

        h2NameElt.textContent = teddy.name;
        priceElt.textContent = totalPriceTeddy + "€";
        descriptionElt.textContent = findId.description;
        qteElt.textContent = "Quantité : " + qte;
        addBtnElt.textContent = "+";
        removeBtnElt.textContent = "-";
        totalPriceArray.push(teddy.totalPrice);
        console.log(totalPriceArray);
        calucateTotalPrice(teddy.id);
        getIdProducts(teddy.id);
        }
        
    });
}


function addArticle(id){
    let getQte = localStorage.getItem(id);
    let parse = JSON.parse(getQte);
    let teddyName = parse.name.replaceAll(' ', '_')
        parse.qte++;  
    let findIndex = totalPriceArray.indexOf(parse.totalPrice);
    parse.totalPrice = parse.qte * parse.price;
    localStorage.setItem(id, JSON.stringify(parse));
    document.querySelector("#" + teddyName).textContent = "Quantité : " + parse.qte;
    document.querySelector("#" + teddyName + "Price").textContent = parse.totalPrice + "€";
    calucateTotalPrice(parse.id);
}
function removeArticle(id){
    let getQte = localStorage.getItem(id);
    let parse = JSON.parse(getQte);
    let teddyName = parse.name.replaceAll(' ', '_')
        parse.qte--;
        parse.totalPrice = parse.qte * parse.price;
    localStorage.setItem(id, JSON.stringify(parse));
    document.querySelector("#" + teddyName).textContent = "Quantité : " + parse.qte;
    document.querySelector("#" + teddyName + "Price").textContent = parse.totalPrice + "€";
    calucateTotalPrice(parse.id);
    if (parse.qte === 0) {
        localStorage.removeItem(id);
    }
    console.log(totalPriceArray);
}

function calucateTotalPrice(id){
    let teddy = JSON.parse(localStorage.getItem(id));
    totalPriceArray.push(teddy.totalPrice)
    localStorage.setItem("totalPrice", totalPriceArray);
}
