/* ---------------------- MENU HAMBURGER ---------------------- */
const menuHamburger = document.querySelector(".menu_hamburger")
const navLinks = document.querySelector(".nav_links")

menuHamburger.addEventListener('click',()=>{
    navLinks.classList.toggle('mobile-menu')
})


/* ---------------------- INDEX ---------------------- */

import createCard from "./createCard.js"
import listRestaurants from "./listRestaurants.js"
