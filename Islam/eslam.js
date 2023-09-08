const hero = document.querySelector(".hero");
const slider = document.querySelector(".slider");
const logo = document.querySelector("#logo");
const headline = document.querySelector(".headline");
// const hero = document.querySelector(".hero");

const tl = new TimelineMax();
tl.fromTo(hero,1,{height :"0%"} ,{height : "80%" , ease:Power2.easeInOut})
.fromTo(hero,1.2,{width: '100%' } , {width: '87%' , ease:Power2.easeInOut})
.fromTo (slider , 1.2 , {x: "-100%"} , {x: "0%" , ease:Power2.easeInOut} ,"-=1.3");

$(document).ready(function() {
    $(".menu_btn").click(function(){
        $('.nav .menu').toggleClass("active");
        $('.menu_btn i').toggleClass("active");
    });
});
function my() {
    var foo = document.getElementById("spann").innerHTML;
    foo++;
    document.getElementById("spann").innerHTML = foo7;
}