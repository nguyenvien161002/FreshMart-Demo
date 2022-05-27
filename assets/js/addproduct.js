// ADD PRODUCT
const btnAdd = document.querySelector('.js--btnaddproduct');
var imgProduct = document.querySelector('.imgproduct').src;
var nameProduct = document.querySelector('.js-nameproduct').innerText;
var priceProduct = document.querySelector('.js--price').innerText;
var weightProduct = document.querySelector('.js--btnweight1').innerText;
var containproducts = document.querySelector('.js--modal__cartshpping');
var nocontainproduct = document.querySelector('.js--noproduct');
var paymentMoney = document.querySelector('.js--summoney');
var intoMoney = document.querySelector('.js--intomoney');
var notification = document.querySelector('.js--notification');
var arrayContainPro = [];
var count = 0;
var infoproductOj = {
    name: nameProduct,
    price: priceProduct,
    weight: weightProduct
}
function addProduct(){
    nocontainproduct.classList.add('hidden');
    var addModalcontent = document.createElement('div');
    count++;
    addModalcontent.innerHTML = 
        '<div class="modal__cartshopping--content">'
            +'<div class="imgproduct">'
                    +'<img src="'+imgProduct+'" alt="" class="imgproduct--img">'
            +'</div>'
            +'<div class="infoproduct">'
                +'<div class="infoproduct_boxweight">'
                    +'<span class="infoproduct--name">'+nameProduct+'</span>'
                    +'<span class="infoproduct--separate">-</span>'
                    +'<p class="infoproduct_boxweight--weight">'+weightProduct+'</p>'
                +'</div>'
                +'<div class="infoproduct__button">'
                    +'<label for="">Số lượng: </label>'
                    +'<button class="infoproduct__button--increase">-</button>'
                    +'<input class="quantity" value="'+intQuantity+'"></input>'
                    +'<button class="infoproduct__button--decrease">+</button>'
                +'</div>'
                +'<div class="infoproduct__priceproduct">'
                    +'<p class="priceproduct--labelprice">Giá: </p>' 
                    +'<span class="priceproduct--price">'+priceProduct+'</span>'
                +'</div>'
                +'<button class="infoproduct__btnromove">Bỏ sản phẩm</button>'
            +'</div>'
        +'</div>';
    containproducts.append(addModalcontent);
    paymentMoney.classList.add('show');
    arrayContainPro.push(infoproductOj);
    var sum = 0;
    function totalpro(){
        for(var key of arrayContainPro){
            sum = parseInt(sum) + parseInt(key.price)*intQuantity;
        }
        return sum;
    }
    var sumP = String(totalpro());
    intoMoney.innerText = sumP;
    notification.innerText = count;
    notification.classList.add('opacity');

    var btnRomove = addModalcontent.querySelector('.infoproduct__btnromove');
    btnRomove.addEventListener('click', function(){
        count--;
        addModalcontent.remove();
        notification.innerText = count;
        arrayContainPro.pop();
        sum = 0;
        intoMoney.innerText = String(totalpro());
        if(notification.innerText==0){
            paymentMoney.classList.remove('show');
            nocontainproduct.classList.remove('hidden');
            notification.classList.remove('opacity');
        }
    })
}

// Increase or decrease the amount
var btnMinus = document.querySelector('.js--minus');
var btnPlus = document.querySelector('.js--plus');
var valueQuantity = document.querySelector('.js--enterquantity');
var intQuantity = parseInt(valueQuantity.value);

btnMinus.addEventListener('click', function(){
    if(intQuantity==0){
        return
    } else {
        intQuantity--;
        valueQuantity.value= intQuantity;
    }
})

btnPlus.addEventListener('click', function(){
    intQuantity++;
    valueQuantity.value= intQuantity;
})

btnAdd.addEventListener('click', addProduct);

// Images Gallery
var images = document.querySelectorAll('.js--imagegallery');
var imgproduct = document.querySelector('.js--imgproduct img');
var imagesz = document.getElementsByClassName('js--imagegallery');

var currentIndex = 0;

images[currentIndex].classList.add('opacity');

images.forEach(function(item, index){
    item.addEventListener('click', function(){
        currentIndex = index;
        images.forEach(function(item, index){
            item.classList.remove('opacity');
        })
        imgproduct.src = images[currentIndex].src;
        images[currentIndex].classList.add('opacity');
    })
});


