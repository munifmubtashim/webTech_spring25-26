const unitPrice = 1000;
const days = 30;

let quantityInput = document.getElementById("quantity");
let totalField = document.getElementById("total");

quantityInput.addEventListener("input", function(){

    let quantity = parseInt(quantityInput.value);

    if(quantity < 0){
        alert("Quantity cannot be negative");
        quantityInput.value = 0;
        quantity = 0;
    }

    if(isNaN(quantity)){
        totalField.value = 0;
        return;
    }

    let totalPrice = unitPrice * quantity * days;

    totalField.value = totalPrice;

    if(totalPrice > 1000){
        alert("Eligible for a Gift Coupon!");
    }

});