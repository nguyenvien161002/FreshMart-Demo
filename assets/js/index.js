//------------------- Js for register and login -------------------//

// variable button
const btnLogin = document.querySelector('.js-btn-login');
const btnRegister = document.querySelector('.js-btn-register');
const btnsCancel = document.querySelectorAll('.js-btn-cancel');
const btnCart = document.querySelector('.js-btn-cartshopping');
const btnSiderBar = document.querySelector('.js-btn-sidebar');
const btnClose = document.querySelector('.js-btn-close');
const btnLoginRps = document.querySelector('.js-btn-loginRps');
// variable div
const modal = document.querySelector('.js-modal');
const modalRegister = document.querySelector('.js-modal__register');
const modalLogin = document.querySelector('.js-modal__login');
const modalCartshopping = document.querySelector('.js-modal__cartshopping');
const modalRegisterLogin = document.querySelector('.js-modal__registerlogin');
const modalSiderBar = document.querySelector('.js-modal__sidebar');

function showModalLogin() {
    modal.classList.add('open');
    modalRegister.classList.add('hidden');
    modalCartshopping.classList.add('hidden');
    modalSiderBar.classList.add('hidden');
}

function showModalRegister() {
    modal.classList.add('open')
    modalLogin.classList.add('hidden');
    modalCartshopping.classList.add('hidden');
    modalSiderBar.classList.add('hidden');
}

function showSidebar() {
    modal.classList.add('open')
    modalRegisterLogin.classList.add('hidden');
    modalCartshopping.classList.add('hidden');
}

function hiddenModal() {
    modal.classList.remove('open')
    modalRegister.classList.remove('hidden');
    modalLogin.classList.remove('hidden');
    modalCartshopping.classList.remove('open');
    modalCartshopping.classList.remove('hidden');
    modalRegisterLogin.classList.remove('hidden');
    modalSiderBar.classList.remove('hidden');
}

function showModalCart() {
    modal.classList.add('open');
    modalCartshopping.classList.add('open');
    modalRegisterLogin.classList.add('hidden');
    modalSiderBar.classList.add('hidden');
}


btnLogin.addEventListener('click', showModalLogin);
btnRegister.addEventListener('click', showModalRegister);
btnLoginRps.addEventListener('click', function(){
    modalRegisterLogin.classList.remove('hidden');
    showModalLogin();
});

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

modalSiderBar.addEventListener('click', function(event){
    event.stopPropagation();
})

btnCart.addEventListener('click', showModalCart);
btnClose.addEventListener('click', hiddenModal);
btnSiderBar.addEventListener('click', showSidebar);

// LOGIN WITH GG 
function onSignIn(googleUser) {
    var profile = googleUser.getBasicProfile();
    console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
    console.log('Name: ' + profile.getName());
    console.log('Image URL: ' + profile.getImageUrl());
    console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
}

function signOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
      console.log('User signed out.');
    });
}



