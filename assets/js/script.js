let carrinho = document.querySelector('.carrinho');

document.querySelector('#cart').onclick = () => {
    carrinho.classList.toggle('active');
    login.classList.remove('active');
}

let login = document.querySelector('.login-form');

document.querySelector('#login').onclick = () => {
    login.classList.toggle('active');
    carrinho.classList.remove('active')
}
