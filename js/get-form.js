let products = [];
function getIdProducts(id){
    if (id !== undefined) {
        products.push(id);
    }
}
function getInfoForm(){
    let contact = new Object();
    contact.firstName = document.querySelector("#firstName").value;
    contact.lastName = document.querySelector("#lastName").value;
    contact.address = document.querySelector("#address").value;
    contact.city = document.querySelector("#city").value;
    contact.email = document.querySelector("#mail").value;

    const mailRegex = /^[a-z0-9]+([_|\.|-]{1}[a-z0-9]+)*@[a-z0-9]+([_|\.|-]­{1}[a-z0-9]+)*[\.]{1}[a-z]{2,6}$/;
    if (mailRegex.exec(contact.email)) {
        fetch("http://localhost:3000/api/teddies/order", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ contact, products })
                  
        })
        .then((response) => response.json())
        .then((data) => {
            localStorage.setItem("order", JSON.stringify(data));
            window.location.href="confirmation-commande.html"
        })
        .catch((erreur) => console.log("erreur : " + erreur));
    } else {
        console.log("erreur")
    }
    console.log(contact);
}