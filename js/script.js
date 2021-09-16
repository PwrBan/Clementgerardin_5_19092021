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
        console.log("erreur")
    });

    function product(teddys)
    {
        var elt_Img = document.createElement("img");
        var elt_Article = document.querySelector("article");
        var elt_Legende = document.querySelector(".article__legende");
        elt_Img.setAttribute("alt", "Ours en peluche");
        elt_Img.classList.add("article__img");
        var teddy_name = document.querySelector(".article__name")

        teddys.forEach(element => {
            
            elt_Article.insertBefore(elt_Img, elt_Legende);
            elt_Img.setAttribute('src', element["imageUrl"]);
            teddy_name.textContent = element["name"];
        });
    }