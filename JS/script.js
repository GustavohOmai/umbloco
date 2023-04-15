const nav = document.querySelector("header");
const imageHeader = document.querySelector("#image-header");





window.onscroll = function () {
    scroll();
}

function scroll() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        imageHeader.src = "images/logo-branco.png";
        imageHeader.style.transform = "fade-in 2s"
        nav.classList.add("header-on");
        
    } else {
        imageHeader.src = "images/umbloco_1_horizontal_transparente (1) 1.png"
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


    var scene = document.getElementById('scene');
const parallaxInstance = new Parallax(scene);
parallaxInstance.invert(false, false)
parallaxInstance.scalar(6, 6)
});

let checkbox = document.getElementById('checkbox-menu')
let menu = document.getElementById('nav-mob')

function hamburguer() {
  if (checkbox.checked) {
    menu.classList.remove('display-none')
  } else {
    menu.classList.add('display-none')
  }
}