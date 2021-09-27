let orderBtn = document.querySelector(".product__order");
const cart = document.querySelector(".panier");
let x = 0;
orderBtn.addEventListener("click", () =>
{
    let idBtn = orderBtn.dataset.id;
    let nameBtn = orderBtn.dataset.name;
    x++;
    localStorage.setItem(nameBtn + x, idBtn);
    cart.textContent = x;
})


