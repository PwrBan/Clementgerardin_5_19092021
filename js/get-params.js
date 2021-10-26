const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const idProduct = urlParams.get('id');

fetch("http://localhost:3000/api/teddies/" + idProduct)
    .then(res => {
        if(res.ok) {
            return res.json();
        }
    })
    .then(teddy => {
        createProductHtmlElt(teddy);
    })
    .catch(err => console.log(err));

/*Recupere l'id qui se trouve dans l'URL afin d'identifier le produit souhaite*/
function createProductHtmlElt(teddy)
{
    const imgProduct = document.querySelector(".product__img");
    const nameProduct = document.querySelector(".product__name");
    const priceProduct = document.querySelector(".product__price");
    const descriptionProduct = document.querySelector(".product__description");
    const customProduct = document.querySelector(".product__custom")
    for (const key of teddy.colors) {
        let labelOptionsElt = document.createElement("option");
        labelOptionsElt.setAttribute("teddy", key)
        labelOptionsElt.setAttribute("id", key);
        customProduct.appendChild(labelOptionsElt);
        labelOptionsElt.textContent = key;
    }
    document.querySelector(".product__order").setAttribute("data-id", teddy._id);
    document.querySelector(".product__order").setAttribute("data-name", teddy.name);
    document.querySelector(".product__order").setAttribute("data-price", teddy.price / 100);
    imgProduct.setAttribute("src", teddy.imageUrl);
    nameProduct.textContent = teddy.name;
    priceProduct.textContent = teddy.price / 100 + "€";
    descriptionProduct.textContent = teddy.description;    
}
