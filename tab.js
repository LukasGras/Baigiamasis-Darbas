"use strict"
var tabs = document.getElementsByClassName("tab")
var tabButtons = document.getElementsByClassName("tabButton")



function changeTab(event, name){
    
    // var buttons = document.getElementById("btn")
    if(event.currentTarget.classList.contains("tab-selected")) return
   
    for(var tab of tabs){
        tab.classList.remove("block")
        tab.classList.remove("animate")
        
    }

    // Prideda tabui pagal id block klasę
    document.getElementById(name).classList.add("block")

    setTimeout(function(){
        document.getElementById(name).classList.add("animate")
    }, 100)
    // Mygtukų stilius
    for(var button of tabButtons){
        button.classList.remove("tab-selected")
    }

    event.currentTarget.classList.add("tab-selected")
}