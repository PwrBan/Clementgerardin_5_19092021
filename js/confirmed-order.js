const infoContact = JSON.parse(localStorage.getItem("order"));
console.log(infoContact);
document.querySelector(".prenom").textContent = infoContact.contact.firstName;
document.querySelector(".n-order").textContent = infoContact.orderId;
localStorage.clear();