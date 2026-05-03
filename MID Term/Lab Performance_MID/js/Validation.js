const price = document.getElementById('uprice');
const quantity = document.getElementById("qperday");
const total = document.getElementById("tprice");
const unit = 1000;
const days = 30; 


function calculator(){
    let q = parseInt(quantity.value);
    

    if (q < 0) {
        alert("Quantity cannot be negative!");
        q= 0;
        quantity.value = 0;
    }

    else if(isNaN(q)) {
        total.value = "";
        return;
    }
        let ctotal = unit * q * days;
        total.value = ctotal;
     if (ctotal > 1000) {
        alert("Congratulations! You are eligible for a gift coupon");
    }




    
}



quantity.addEventListener('input',calculator );