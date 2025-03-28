import createCard from "./createCard.js";
import listRestaurants from "./listRestaurants.js";
import { removeChildren } from "./utils.js";

const randomContainer = document.querySelector(".random-container")
const button = document.querySelector(".btn")
const menuHamburger = document.querySelector(".menu_hamburger");
const navLinks = document.querySelector(".nav_links");
const lesRestaurants = document.querySelector("#Les_restaurants");

button.addEventListener("click", () => {
  const randomNumber = Math.ceil(Math.random() * listRestaurants.length)
  const filteredRestaurant = listRestaurants.find((resto) => resto.id === randomNumber)
  removeChildren(randomContainer)
  randomContainer.appendChild(createCard(filteredRestaurant))
})

menuHamburger.addEventListener("click", () => {
	navLinks.classList.toggle("mobile-menu");
});

const selectCategory = document.querySelector("#Catégorie");

selectCategory.addEventListener("change", (event) => {
	const foodCategory =
		event.target.value === "Select Catégorie"
			? listRestaurants
			: listRestaurants.filter(
					(listRestaurants) => listRestaurants.category === event.target.value,
				);
	for (const element of foodCategory) {
		lesRestaurants.appendChild(createCard(element));
	}
});

// Attrape la zone des cartes restaurants

const RestaurantsCards = document.querySelector(".RestaurantsCards")

for (let i = 0; i<listRestaurants.length; i++) {
    const restaurant = listRestaurants[i];

    RestaurantsCards.appendChild(createCard(restaurant))
}
