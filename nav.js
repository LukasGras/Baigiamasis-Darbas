"use strict"


const burger = document.getElementById("burger")
const links = document.getElementById("links")

burger.addEventListener("click", function(){
    links.classList.toggle("translate")
    burger.classList.toggle("burgerchange")
})