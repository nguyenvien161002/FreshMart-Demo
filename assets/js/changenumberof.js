// Increase or decrease the amount
var btnMinus = document.querySelector('.js--minus');
var btnPlus = document.querySelector('.js--plus');
var valueQuantity = document.querySelector('.js--enterquantity');
var intQuantity = parseInt(valueQuantity.value);

btnMinus.addEventListener('click', function(){
    if(intQuantity==0){
        return;
    } else {
        intQuantity--;
        valueQuantity.value= intQuantity;
    }
})

btnPlus.addEventListener('click', function(){
    intQuantity++;
    valueQuantity.value= intQuantity;
})
