import createCard from "./createCard.js";
import listRestaurants from "./listRestaurants.js";
import { removeChildren } from "./utils.js";

const menuHamburger = document.querySelector(".menu_hamburger");
const navLinks = document.querySelector(".nav_links");
const lesrestaurants = document.querySelector(".Les_restaurants");
const RestaurantsCards = document.querySelector(".RestaurantsCards");
const randomContainer = document.querySelector(".random-container");
const button = document.querySelector(".btn");

menuHamburger.addEventListener("click", () => {
	navLinks.classList.toggle("mobile-menu");
});

button.addEventListener("click", () => {
	const randomNumber = Math.ceil(Math.random() * listRestaurants.length);
	const filteredRestaurant = listRestaurants.find(
		(resto) => resto.id === randomNumber,
	);
	removeChildren(randomContainer);
	randomContainer.appendChild(createCard(filteredRestaurant));
});

const createAllRestaurants = (array) => {
	removeChildren(RestaurantsCards);
	for (const resto of array) {
		RestaurantsCards.appendChild(createCard(resto));
	}
};

createAllRestaurants(listRestaurants);

const selectCategory = document.querySelector("#Catégorie");

// Attrape la zone des cartes restaurants

selectCategory.addEventListener("change", (event) => {
	const foodCategory =
		event.target.value === "Select Catégorie"
			? listRestaurants
			: listRestaurants.filter(
					(listRestaurants) => listRestaurants.category === event.target.value,
				);
	console.log(foodCategory);

	createAllRestaurants(foodCategory);
});
