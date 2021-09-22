const queryString = window.location.search;
const urlParams = new URLSearchParams (queryString);
const product_id = urlParams.get('id');

function product(value)
{
    const identifierProduct = value.find(value => value._id === product_id);
    var product__img = document.querySelector(".product__img");
    var product__name = document.querySelector(".product__name");
    var product__price = document.querySelector(".product__price");
    var product__description = document.querySelector(".product__description");
    var btn_order = document.querySelector(".product__order");
    btn_order.setAttribute("data-id", identifierProduct["_id"])
    product__img.setAttribute("src", identifierProduct["imageUrl"]);
    product__name.textContent = identifierProduct["name"];
    product__price.textContent = identifierProduct["price"] + "€";
    product__description.textContent = identifierProduct["description"];


}
