
function createCartPagesElt(value){
    let keys = Object.keys(localStorage);
    console.log(keys)
    keys.forEach(key => {
        const findId = value.find(value => key === value["_id"]);
        if (findId) {

        let teddy = JSON.parse(localStorage.getItem(findId._id));
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
        imgElt.setAttribute("alt", "Ours en peluche" + teddy.name);
        imgElt.setAttribute('src', findId.imageUrl);
        addBtnElt.setAttribute("onClick", "addArticle('" + teddy.id + "')");
        addBtnElt.setAttribute("data-name", teddy.name);
        removeBtnElt.setAttribute("onClick", "removeArticle('" + teddy.id + "')");
        removeBtnElt.setAttribute("data-name", teddy.name);
        qteElt.setAttribute("id", teddy.name);
        priceElt.setAttribute("id", teddy.name + "Price")

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
        calucateTotalPrice(findId);
        }
    });
}


function addArticle(id){
    let getQte = localStorage.getItem(id);
    let parse = JSON.parse(getQte);
        parse.qte++;
        parse.totalPrice = parse.qte * parse.price;
    localStorage.setItem(id, JSON.stringify(parse));
    document.querySelector("#" + parse.name).textContent = "Quantité : " + parse.qte;
    document.querySelector("#" + parse.name + "Price").textContent = parse.totalPrice + "€";
}
function removeArticle(id){
    let getQte = localStorage.getItem(id);
    let parse = JSON.parse(getQte);
        parse.qte--;
        parse.totalPrice = parse.qte * parse.price;
    localStorage.setItem(id, JSON.stringify(parse));
    document.querySelector("#" + parse.name).textContent = "Quantité : " + parse.qte;
    document.querySelector("#" + parse.name + "Price").textContent = parse.totalPrice + "€";
    if (parse.qte === 0) {
        localStorage.removeItem(id);
    }
    
}

function calucateTotalPrice(id){
}
