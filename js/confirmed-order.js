const infoContact = JSON.parse(localStorage.getItem("order"));
document.querySelector(".prenom").textContent = infoContact.contact.firstName;
document.querySelector(".n-order").textContent = infoContact.orderId;