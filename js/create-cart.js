
function createCartPagesElt(value){
    let keys = Object.values(localStorage);
    console.log(keys);
    keys.forEach(key => {
        const findId = value.find(value => key === value["_id"]);
        if (findId === undefined) {
            console.log("error");
        }
        else
        {        
        console.log(findId);
        console.log(key);
        let qte = localStorage.getItem("qt" + findId["name"]);
        console.log(qte);
        let totalPriceTeddy = qte * findId["price"];
        let articleCartElt = document.createElement("article");
        let imgElt = document.createElement("img");
        let divLegendeElt = document.createElement("div");
        let h2NameElt = document.createElement("h2");
        let qteElt = document.createElement("p");
        let addBtnElt = document.createElement("button");
        let removeBtnElt = document.createElement("button");
        let priceElt = document.createElement("p");
        let descriptionElt = document.createElement("p");
        
        imgElt.setAttribute("alt", "Ours en peluche" + value["name"]);
        imgElt.setAttribute('src', findId["imageUrl"]);
        addBtnElt.setAttribute("onClick", "addArticle('" + findId["name"] + "')");
        addBtnElt.setAttribute("data-name", findId["name"]);
        removeBtnElt.setAttribute("onClick", "removeArticle('" + findId["name"] + "')");
        removeBtnElt.setAttribute("data-name", findId["name"]);
        qteElt.setAttribute("id", findId["name"].replaceAll(" ", "_"))

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

        h2NameElt.textContent = findId["name"];
        priceElt.textContent = totalPriceTeddy + "€";
        descriptionElt.textContent = findId["description"];
        qteElt.textContent = "Quantité : " + qte;
        addBtnElt.textContent = "+";
        removeBtnElt.textContent = "-";

        }
    });
}


function addArticle(name){
    console.log(name);
    let qteTeddys = parseInt(Object.values(localStorage.getItem("qt" + name)));
    qteTeddys++;
    localStorage.setItem("qt" + name, qteTeddys);
    document.querySelector("#" + name.replaceAll(" ", "_")).textContent = "Quantité : " + qteTeddys;
    
}
function removeArticle(name){
    let qteTeddys = parseInt(Object.values(localStorage.getItem("qt" + name)));
    qteTeddys--;
    localStorage.setItem("qt" + name, qteTeddys);
    document.querySelector("#" + name.replaceAll(" ", "_")).textContent = "Quantité : " + qteTeddys;
}

function calucateTotalPrice(totalPriceTeddy){
    localStorage.setItem("total-price", totalPriceTeddy);
    let x = parseInt(Object.values(localStorage.getItem("total-price")));
    let total = totalPriceTeddy + x;
    localStorage.setItem("total-price", total);
}
