/* ---------------------- MENU HAMBURGER ---------------------- */
const menuHamburger = document.querySelector(".menu_hamburger")
const navLinks = document.querySelector(".nav_links")

menuHamburger.addEventListener('click',()=>{
    navLinks.classList.toggle('mobile-menu')
})


/* ---------------------- INDEX ---------------------- */

import createCard from "./createCard.js"
import listRestaurants from "./listRestaurants.js"

// Attrape la zone des cartes restaurants

const RestaurantsCards = document.querySelector(".RestaurantsCards")





for (let i = 0; i<listRestaurants.length; i++) {
    const restaurant = listRestaurants[i];

    RestaurantsCards.appendChild(createCard(restaurant))
}
