var hamburguer = document.querySelector(".hamburguer");

hamburguer.addEventListener("click", function(){
    document.querySelector(".container").classList.toggle("show");
});

const slides = document.querySelectorAll(".slide");
const carrosel = document.getElementsById("carrosel");
const left = document.getElementById("left");
const rigth = document.getElementById("right");