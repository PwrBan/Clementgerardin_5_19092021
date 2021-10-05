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

function createProductHtmlElt(value)
{
    const identifierProduct = value.find(value => value._id === idProduct);
    const imgProduct = document.querySelector(".product__img");
    const nameProduct = document.querySelector(".product__name");
    const priceProduct = document.querySelector(".product__price");
    const descriptionProduct = document.querySelector(".product__description");
    const customProduct = document.querySelector(".product__custom")
    for (const key of identifierProduct.colors) {
        let labelCheckboxElt = document.createElement("label");
        let checkboxElt = document.createElement("input");
        labelCheckboxElt.setAttribute("id", key);
        checkboxElt.setAttribute("id", key)
        checkboxElt.setAttribute("type", "radio")
        checkboxElt.setAttribute("value", key);
        checkboxElt.setAttribute("name", "custom")

        customProduct.appendChild(checkboxElt);
        customProduct.appendChild(labelCheckboxElt);
        labelCheckboxElt.textContent = key;
    }
    document.querySelector(".product__order").setAttribute("data-id", identifierProduct["_id"]);
    document.querySelector(".product__order").setAttribute("data-name", identifierProduct["name"]);
    document.querySelector(".product__order").setAttribute("data-price", identifierProduct["price"]);
    imgProduct.setAttribute("src", identifierProduct["imageUrl"]);
    nameProduct.textContent = identifierProduct["name"];
    priceProduct.textContent = identifierProduct["price"] + "€";
    descriptionProduct.textContent = identifierProduct["description"];    
}
