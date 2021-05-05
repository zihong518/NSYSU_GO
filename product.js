const addQuantity = document.getElementById('addQuantity');
const reduceQuantity = document.getElementById('reduceQuantity');
let productQuantity =document.getElementById('productQuantity');

addQuantity.addEventListener('click',() => {
    productQuantity.innerHTML++
})
reduceQuantity.addEventListener('click',() => {
    if (productQuantity.innerHTML>0){
        productQuantity.innerHTML--;
    }
})

