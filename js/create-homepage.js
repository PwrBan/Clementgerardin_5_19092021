let shopElt = document.querySelector(".shop");

function createHomepageHtmlElt(value) {           
    value.forEach(element => {
        let linkElt = document.createElement("a"); 
        let articleElt = document.createElement("article");
        let divImgElt = document.createElement("div")
        let imgElt = document.createElement("img");
        let divElt = document.createElement("div");
        let h2Elt = document.createElement("h2");
        let priceElt = document.createElement("p");

        linkElt.classList.add("article__link");
        articleElt.classList.add("article");
        divImgElt.classList.add("article__div-img")
        imgElt.classList.add("article__img");
        divElt.classList.add("article__legende");
        h2Elt.classList.add("article__name");
        priceElt.classList.add("article__price");

        imgElt.setAttribute("alt", "Ours en peluche");
        imgElt.setAttribute('src', element["imageUrl"]);
        linkElt.setAttribute("href", "product.html?id=" + element["_id"]);
                
        shopElt.appendChild(linkElt);
        linkElt.appendChild(articleElt);
        articleElt.appendChild(divImgElt);
        divImgElt.appendChild(imgElt);
        articleElt.appendChild(divElt);
        divElt.appendChild(h2Elt);
        divElt.appendChild(priceElt);    

        h2Elt.textContent = element["name"];
        priceElt.textContent = element["price"] + "€";
    });
}



                 