"use strict"

const anchors = document.getElementsByTagName("a")
const burger = document.getElementById("burger")
const links = document.getElementById("links")
const sections = document.getElementsByClassName("section")

burger.addEventListener("click", function(){
    links.classList.toggle("translate")
    burger.classList.toggle("burgerchange")
})

for(let anchor of anchors){
    anchor.addEventListener("click", function(){
        links.classList.remove("translate")
        burger.classList.remove("rotate")
    })
}


// Meniu link stiliai
window.addEventListener("scroll", function(){

    let current

    for(let section of sections){
        if(window.scrollY >= section.offsetTop - 50) {
            current = section.getAttribute("id")
        }
    }
  
    for(let anchor of anchors){
          // Nuiima stilių
        anchor.classList.remove("active")

        // Prideda stilių pagal section id
        if(anchor.getAttribute("href") === "#" + current) {
            anchor.classList.add("active")
        }
    }
    console.log("section")
})