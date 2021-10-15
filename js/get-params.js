const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const idProduct = urlParams.get('id');

fetch("http://localhost:3000/api/teddies")
    .then(res => {
        if(res.ok) {
            return res.json();
        }
    })
    .then(value => {
        createProductHtmlElt(value);
        addArticleToLocal(value);
    })
    .catch(err => console.log(err));

/*Recupere l'id qui se trouve dans l'URL afin d'identifier le produit souhaite*/
function createProductHtmlElt(value)
{
    const identifierProduct = value.find(value => value._id === idProduct);
    const imgProduct = document.querySelector(".product__img");
    const nameProduct = document.querySelector(".product__name");
    const priceProduct = document.querySelector(".product__price");
    const descriptionProduct = document.querySelector(".product__description");
    const customProduct = document.querySelector(".product__custom")
    for (const key of identifierProduct.colors) {
        let labelOptionsElt = document.createElement("option");
        labelOptionsElt.setAttribute("value", key)
        labelOptionsElt.setAttribute("id", key);
        customProduct.appendChild(labelOptionsElt);
        labelOptionsElt.textContent = key;
    }
    document.querySelector(".product__order").setAttribute("data-id", identifierProduct["_id"]);
    document.querySelector(".product__order").setAttribute("data-name", identifierProduct["name"]);
    document.querySelector(".product__order").setAttribute("data-price", identifierProduct["price"] / 100);
    imgProduct.setAttribute("src", identifierProduct["imageUrl"]);
    nameProduct.textContent = identifierProduct["name"];
    priceProduct.textContent = identifierProduct["price"] / 100 + "€";
    descriptionProduct.textContent = identifierProduct["description"];    
}
