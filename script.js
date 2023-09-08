var hamB = document.querySelector(".hamburger-menu");
var firstSpan = document.querySelector(".first-span");
var secSpan = document.querySelector(".sec-span");
var navTwo = document.querySelector(".nav2");

hamB.addEventListener("click", () => {
    hamB.classList.toggle("active")
    navTwo.classList.toggle("show")
})


var mode = document.querySelector(".fa-sun")
var switchM = document.querySelector(".nav-switch")
var indicator = document.querySelector(".indicator")
var modeMod = document.querySelector(".mode")
var body = document.body
switchM.addEventListener("click", () => {
    body.classList.toggle("dark")
    if(body.classList.contains("dark")){
        mode.className = "fa-solid fa-moon"
        indicator.textContent = "Dark"
    }
    else{
        mode.className = "fa-solid fa-sun"
        indicator.textContent = "Light"
    }
})





var indicaTwo = document.querySelector("indicator2")
modeMod.addEventListener("click", () => {
    body.classList.toggle("dark")
    if (body.classList.contains("dark")) {
        // modeMod.className = "fa-solid fa-moon"
        // indicaTwo.textContent = "Dark"
    }
    // else{
    //     modeMod.className = "fa-solid fa-sun"
    //     indicaTwo.textContent = "Light"
    // }
})