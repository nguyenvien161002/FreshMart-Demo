//------------------- Js for register and login -------------------//

// variable button
const btnLogin = document.querySelector('.js-btn-login');
const btnRegister = document.querySelector('.js-btn-register');
const btnsCancel = document.querySelectorAll('.js-btn-cancel');
const btnCart = document.querySelector('.js-btn-cartshopping');
const btnClose = document.querySelector('.js-btn-close');
// variable div
const modal = document.querySelector('.js-modal');
const modalRegister = document.querySelector('.js-modal__register');
const modalLogin = document.querySelector('.js-modal__login');
const modalCartshopping = document.querySelector('.js-modal__cartshopping');
const modalRegisterLogin = document.querySelector('.js-modal__registerlogin');

function showModalLogin() {
    modal.classList.add('open');
    modalRegister.classList.add('hidden');
    modalCartshopping.classList.add('hidden');
}

function showModalRegister() {
    modal.classList.add('open')
    modalLogin.classList.add('hidden');
    modalCartshopping.classList.add('hidden');
}

function hiddenModal() {
    modal.classList.remove('open')
    modalRegister.classList.remove('hidden');
    modalLogin.classList.remove('hidden');
    modalCartshopping.classList.remove('open');
    modalCartshopping.classList.remove('hidden');
    modalRegisterLogin.classList.remove('hidden');
}

function showModalCart() {
    modal.classList.add('open');
    modalCartshopping.classList.add('open');
    modalRegisterLogin.classList.add('hidden');
}


btnLogin.addEventListener('click', showModalLogin);
btnRegister.addEventListener('click', showModalRegister);

for (const btnCancel of btnsCancel) {
    btnCancel.addEventListener('click', hiddenModal);
}

modal.addEventListener('click', hiddenModal);

modalLogin.addEventListener('click', function(event){
    event.stopPropagation();
})

modalRegister.addEventListener('click', function(event){
    event.stopPropagation();
})

modalCartshopping.addEventListener('click', function(event){
    event.stopPropagation();
})

btnCart.addEventListener('click', showModalCart);
btnClose.addEventListener('click', hiddenModal);

