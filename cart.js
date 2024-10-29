const plus = document.getElementById("btnp");
const minus = document.getElementById("btnm");
const price = document.getElementById("count");

function Bplus() {
    let quantityElement = document.getElementById("qty"); 
    let quantity = parseInt(quantityElement.innerHTML); 
    let priceElement = document.getElementById("count");
    let price = parseInt(priceElement.innerHTML)
    console.log(price)
    price = price + 320;
    let res = quantity + 1; 
    if (res > 10) {
        alert("Max up to 10")
    }
    else {
        quantityElement.innerHTML = res; 
        priceElement.innerHTML = price;
    }
    
}
function Bminus() {
    let quantityElement = document.getElementById("qty"); 
    let quantity = parseInt(quantityElement.innerHTML);
    let priceElement = document.getElementById("count");
    let price = parseInt(priceElement.innerHTML)
    console.log(price)
    price = price - 320;
    let res = quantity - 1; 
    if (res < 0) {
        alert("Limit finish")
    }
    else {
        quantityElement.innerHTML = res; 
        priceElement.innerHTML = price;
    }
}
