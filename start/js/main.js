$(function(){
$('.header-slider').slick({
    arrows: false,
    vertical: true,
    dots: true,
    dotsClass: 'header-dots',
    autoplay: 2000,
});

$('.menu__btn').on('click', function(){
$('.menu__list').slideToggle();
});
});
let priceBtn = document.querySelectorAll('.price-content__top-item');
let priceBtnBox = document.querySelector('.price-content__top');
let priceBtnBoxArroy = document.querySelector('.price-content__top::after');


document.querySelector(`.price-content__main1`).style.display = 'flex';
for(let i = 0; i < priceBtn.length;i++){
    priceBtn[i].addEventListener('click', changeColor);
}
function changeColor(){
    for(let i = 0; i < priceBtn.length;i++){
if(this.contains(priceBtn[i])){
    for(let i = 0; i < priceBtn.length;i++){
        priceBtn[i].style.backgroundColor = "white"; 
    }
    priceBtn[i].style.backgroundColor = "#AEB6BB";
    for(let i = 0; i < priceBtn.length;i++){
        document.querySelector(`.price-content__main${i + 1}`).style.display = 'none';
    }
    document.querySelector(`.price-content__main${i + 1}`).style.display = 'flex';
}

}
}

priceBtnBox.addEventListener('click', openMenu);
function openMenu(){
    console.log('Hi');
    for(let i = 0; i < priceBtn.length;i++){
        document.querySelector(`.price-content__main${i + 1}`).style.display = 'flex';
    }
}
console.log(priceBtn[5]);