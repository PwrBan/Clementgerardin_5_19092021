fetch("http://localhost:3000/api/teddies")
    .then(function(res) {
        if(res.ok) {
            return res.json();
        }
    })
    .then(function(value) {
        var teddys = value;
        console.log(teddys);
        return product(teddys);
    })
    .catch(function(err) {
        console.log(err)
    });

var elt_Shop = document.querySelector(".shop");

  

function product(teddys)
{           
    teddys.forEach(element => {
        var elt_Link = document.createElement("a"); 
        var elt_Article = document.createElement("article");
        var elt_Img = document.createElement("img");
        var elt_Div = document.createElement("div");
        var elt_H2 = document.createElement("h2");
        /*var elt_Description = document.createElement("p");*/
        var elt_Price = document.createElement("p");

                elt_Link.classList.add("article__link");
                elt_Article.classList.add("article");
                elt_Img.classList.add("article__img");
                elt_Div.classList.add("article__legende");
                elt_H2.classList.add("article__name");
                /*elt_Description.classList.add("article__description");*/
                elt_Price.classList.add("article__price");

                elt_Img.setAttribute("alt", "Ours en peluche");
                elt_Img.setAttribute('src', element["imageUrl"]);
                elt_Link.setAttribute("href", "#");
                
                elt_Shop.appendChild(elt_Link);
                elt_Link.appendChild(elt_Article);
                elt_Article.appendChild(elt_Img);
                elt_Article.appendChild(elt_H2);
                /*elt_Article.appendChild(elt_Description);*/
                elt_Article.appendChild(elt_Price)    

                    elt_H2.textContent = element["name"];
                    /*elt_Description.textContent = element["description"];*/
                    elt_Price.textContent = element["price"] + "€";

    });
}



                 