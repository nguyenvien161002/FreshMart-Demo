var products = [
    {
        id: 1,
        name: 'Ổi lê ruột đỏ',
        price: 20,
        quantity: 1,
        weight: 1,
        imgSRC: '/assets/images/sp1.webp'
    },
    {
        id: 2,
        name: 'Đào đỏ Mỹ',
        price: 40,
        quantity: 1,
        weight: 1,
        imgSRC: '/assets/images/sp2.webp'
    },
    {
        id: 3,
        name: 'Dâu tây',
        price: 138,
        quantity: 1,
        weight: 1,
        imgSRC: '/assets/images/sp3.webp'
    },
    {
        id: 4,
        name: 'Chanh tươi vỏ xanh',
        price: 30,
        quantity: 1,
        weight: 1,
        imgSRC: '/assets/images/sp4.webp'
    },
    {
        id: 5,
        name: 'Trái cam mật',
        price: 138,
        quantity: 1,
        weight: 1,
        imgSRC: '/assets/images/sp5.webp'
    },
];

const btnAdd = document.querySelector('.js--btnaddproduct');
const nameProduct = document.querySelector('.js-nameproduct');
const productID = parseInt(nameProduct.id);
const containerCartItem = document.querySelector('.js--container__cartitem');
const noCartItem = document.querySelector('.js--noproduct');
const payment = document.querySelector('.js--summoney');
const notiCart = document.querySelector('.js--cartnotification');
const intoMoney = document.querySelector('.js__intomoney');

let cart = JSON.parse(localStorage.getItem('CART')) || [];
updateCart();

btnAdd && btnAdd.addEventListener('click', function(){
    addToCart(productID);
});

function addToCart(id) {
    if(cart.some(function(item){return item.id === id})){
        alert('Exsits product!');
    } else {
        const item = products.find(function(product){
            return product.id === id;
        });
        cart.push(item)
    }
    updateCart();
}

function updateCart() {
    renderCartItem();
    localStorage.setItem('CART', JSON.stringify(cart));
    notiCart.innerText = cart.length; 
    if(cart.length==0){
        noCartItem.classList.remove('hidden');
        payment.classList.remove('show');
    }
    totalMoneyToCart();
}

function totalMoneyToCart() {
    var sum = 0;
    cart.forEach(function(item){
        sum = sum + parseInt(item.price)*item.quantity;
        intoMoney.innerText = sum;
    })
};

function renderCartItem(){
    containerCartItem.innerHTML = "";
    noCartItem.classList.add('hidden');
    cart.forEach(function(item, index){
        containerCartItem.innerHTML += `
            <div class="modal__cartshopping--content">
                <div class="imgproduct">
                        <img src="${item.imgSRC}" alt="" class="imgproduct--img">
                </div>
                <div class="infoproduct">
                    <div class="infoproduct_boxweight">
                        <span class="infoproduct--name">${item.name}</span>
                        <span class="infoproduct--separate">-</span>
                        <p class="infoproduct_boxweight--weight">${item.weight}Kg</p>
                    </div>
                    <div class="infoproduct__button">
                        <label for="">Số lượng: </label>
                        <button class="infoproduct__button--decrease" onclick="changeNumberOfUnits('minus', ${item.id})">-</button>
                        <input class="quantity js__quantity" value="${item.quantity}"></input>
                        <button class="infoproduct__button--increase" onclick="changeNumberOfUnits('plus', ${item.id})">+</button>
                    </div>
                    <div class="infoproduct__priceproduct">
                        <p class="priceproduct--labelprice">Giá: </p> 
                        <span class="priceproduct--price">${item.price}.000đ</span>
                    </div>
                    <button class="infoproduct__btnromove btn__removeItemCart" data-id="${index}">Bỏ sản phẩm</button>
                </div>
            </div>
        `
    })
    payment.classList.add('show'); 
    var btnsRemoveItemCart = document.querySelectorAll('.btn__removeItemCart');
    btnsRemoveItemCart.forEach((itemBtnRemove,index) => {
        itemBtnRemove.addEventListener('click', function(){
            cart.splice(index, 1);
            console.log(itemBtnRemove.getAttribute('data-id'));
            updateCart();
        })
    })
};

// Không thể để Logic xóa 1 sản phẩm của cart bên ngoài hàm renderCartItem(), 
// bời vì mỗi lần render lại cart item thì các btnRomove sẽ được tạo mới trong cây DOM 
// tại thời điểm này file js này đã được thực thi nên các btnRomove lúc này sẽ ko có clickEvent
// =>> không xóa đc sản phẩm trong cart nx.

// var btnsRemoveItemCart = document.querySelectorAll('.btn__removeItemCart');  
// btnsRemoveItemCart.forEach((itemBtn,index) => {
//     itemBtn.addEventListener('click', function(){
//         cart.splice(index, 1);
//         console.log(itemBtn.getAttribute('data-id'));
//         updateCart();
//     })
// })





