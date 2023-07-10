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
        burger.classList.remove("burgerchange")
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


let button = document.getElementById("upperButton")
let input1 = document.getElementById("inputUpper1")
let input2 = document.getElementById("inputUpper2")
let input3 = document.getElementById("inputUpper3")
button.addEventListener("click", function() {
    if(input1 && input1.value) {
        if(input2 && input2.value) {
            if(input3 && input3.value){
                alert ("Your Subscribtion Details Will Be Send To You're Phone ")
            }else {
                alert ("Phone Number Was Not Filled")
            }
        }else {
            alert("Last Name Was Not Filled")
        }

    }else {
        alert("First Name Was Not Filled")
    }
});