const nav = document.querySelector("header");
const scene = document.getElementById('scene');


scene.addEventListener("mouseover", () => {
    const parallaxInstance = new Parallax(scene);
})



window.onscroll = function () {
    scroll();
}

function scroll() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        ;
        nav.classList.add("header-on");
        
    } else {
        nav.classList.remove("header-on");
       
    }
}




$(document).ready(function () {

    $('.banner-slick').slick({
        dots: true,
        infinite: true,
        arrows:true,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 300,
    });
});