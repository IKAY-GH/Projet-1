import createCard from "./createCard.js" 
import listRestaurants from "./listRestaurants.js"
const button = document.querySelector(".btn")
const randomSection = document.querySelector("#random")

button.addEventListener("click", () => {
const number =Math.ceil(Math.random()*listRestaurants.length)
const randomResto = listRestaurants.find((resto) => resto.id === number )
randomSection.appendChild(createCard(randomResto))
  }) 
