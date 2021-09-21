const queryString = window.location.search;
const urlParams = new URLSearchParams (queryString);
const product_id = urlParams.get('id');

function product(value)
{
    const identifierProduct = value.find(value => value._id === product_id);
    var product__img = document.querySelector(".product__img");
    var product__name = document.querySelector(".product__name");
    product__img.setAttribute("src", identifierProduct["imageUrl"]);
    product__name.textContent = identifierProduct["name"];

}
