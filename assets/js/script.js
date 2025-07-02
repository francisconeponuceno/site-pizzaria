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

window.onscroll = () => {
    login.classList.remove('active');
    carrinho.classList.remove('active')
}




var swiper = new Swiper('.home-slider', {
    autoplay:{
        delay: 5000,
        disableOnInteraction: false,
    },
    grapCursor: true,
    loop:true,
    centeredSlides:true,
    navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
     },
})

