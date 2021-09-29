let orderBtn = document.querySelector(".product__order");
const cart = document.querySelector(".panier");
let nbArticle = cart.textContent;
orderBtn.addEventListener("click", () =>
{
    let idBtn = orderBtn.dataset.id;
    let nameBtn = orderBtn.dataset.name;
    let priceBtn = orderBtn.dataset.price;
    localStorage.setItem(nameBtn, idBtn);
    localStorage.setItem(nameBtn + "price", priceBtn);
    
    if (localStorage.getItem("nbArticle")) {
        console.log(nbArticle)
        nbArticle++;
        localStorage.setItem("nbArticle", nbArticle);
        cart.textContent = Object.values(localStorage.getItem("nbArticle"));
    }
    else {
        localStorage.setItem("nbArticle", 1);
    };
    /* Condition pour gérer les doubles dans le panier*/
    if (localStorage.getItem(nameBtn) && localStorage.getItem("qt" + nameBtn)) {
        let qtTeddys = parseInt(Object.values(localStorage.getItem("qt" + nameBtn)));
        qtTeddys++;
        localStorage.setItem("qt" + nameBtn, qtTeddys);
    }
    else {
        localStorage.setItem("qt" + nameBtn, 1);
    }
})
