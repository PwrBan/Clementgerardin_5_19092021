var elt_Shop = document.querySelector(".shop");

function product(value)
{           
    value.forEach(element => {
        var elt_Link = document.createElement("a"); 
        var elt_Article = document.createElement("article");
        var elt_DivImg = document.createElement("div")
        var elt_Img = document.createElement("img");
        var elt_Div = document.createElement("div");
        var elt_H2 = document.createElement("h2");
        var elt_Price = document.createElement("p");

                elt_Link.classList.add("article__link");
                elt_Article.classList.add("article");
                elt_DivImg.classList.add("article__div-img")
                elt_Img.classList.add("article__img");
                elt_Div.classList.add("article__legende");
                elt_H2.classList.add("article__name");
                elt_Price.classList.add("article__price");

                elt_Img.setAttribute("alt", "Ours en peluche");
                elt_Img.setAttribute('src', element["imageUrl"]);
                elt_Link.setAttribute("href", "product.html?id=" + element["_id"]);
                
                elt_Shop.appendChild(elt_Link);
                elt_Link.appendChild(elt_Article);
                elt_Article.appendChild(elt_DivImg);
                elt_DivImg.appendChild(elt_Img);
                elt_Article.appendChild(elt_Div);
                elt_Div.appendChild(elt_H2);
                elt_Div.appendChild(elt_Price)    

                    elt_H2.textContent = element["name"];
                    elt_Price.textContent = element["price"] + "€";
    });
}



                 