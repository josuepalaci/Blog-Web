let btn = document.querySelector(".menu-btn");

btn.addEventListener('click',()=>{
    document.querySelector('.nav-menu').classList.toggle('show');
});

ScrollReveal().reveal('.showcase');
ScrollReveal().reveal('.news-card',{delay:500});
ScrollReveal().reveal('.card-banner-one',{delay:500});
ScrollReveal().reveal('.cards-baner-two',{delay:500});