// <!-- js for modal  -->
const modalMain = document.querySelector('.modal');
const modalBody = document.querySelector('.modal__body');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');

const registerClose = document.querySelector('.register-close');
const loginClose = document.querySelector('.login-close');

const btnPopup = document.querySelector('.btnLogin-popup');
const btnMobilePopup = document.querySelector('.btnMobileLogin-popup');
const btnAccountPopup = document.querySelector('.btnAccountLogin-popup');
const ProductbtnPopup = document.querySelector('.product__btnLogin-popup');

registerLink.addEventListener('click', () => {
    modalBody.classList.add('active');
});

loginLink.addEventListener('click', () => {
    modalBody.classList.remove('active');
});

btnPopup.addEventListener('click', () => {
    modalMain.classList.add('active-popup');
});

btnMobilePopup.addEventListener('click', () => {
    modalMain.classList.add('active-popup');
});

btnAccountPopup.addEventListener('click', () => {
    modalMain.classList.add('active-popup');
});

registerClose.addEventListener('click', () => {
    modalMain.classList.remove('active-popup');
});

loginClose.addEventListener('click', () => {
    modalMain.classList.remove('active-popup');
});

ProductbtnPopup.addEventListener('click', () => {
    modalMain.classList.add('active-popup');
});