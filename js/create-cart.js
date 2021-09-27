function createCartPagesElt(value){
    let keys = Object.values(localStorage);
    keys.forEach(key => {
        const find = value.find(value => key === value["_id"]);

        let articleCartElt = document.createElement("article");
        let imgElt = document.createElement("img");
        let divLegendeElt = document.createElement("div");
        let h2NameElt = document.createElement("h2");
        let priceElt = document.createElement("p");
        let descriptionElt = document.createElement("p");

        imgElt.setAttribute("alt", "Ours en peluche" + value["name"]);
        imgElt.setAttribute('src', find["imageUrl"]);

        articleCartElt.classList.add("cart-elt__article");
        imgElt.classList.add("cart-elt__img");
        divLegendeElt.classList.add("cart-elt__legende");
        h2NameElt.classList.add("cart-elt__name");
        priceElt.classList.add("cart-elt__price");
        descriptionElt.classList.add("cart-elt__description");

        document.querySelector(".cart").appendChild(articleCartElt);
        articleCartElt.appendChild(imgElt);
        articleCartElt.appendChild(divLegendeElt);
        divLegendeElt.appendChild(h2NameElt);
        divLegendeElt.appendChild(priceElt);
        divLegendeElt.appendChild(descriptionElt);

        h2NameElt.textContent = find["name"];
        priceElt.textContent = find["price"];
        descriptionElt.textContent = find["description"];

    });
}