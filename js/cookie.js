var btn_order = document.querySelector(".product__order");
btn_order.addEventListener("click", function()
{
    let btn_id = btn_order.dataset.id;
    document.cookie = "_id=" + btn_id;
    console.log(document.cookie);
})
