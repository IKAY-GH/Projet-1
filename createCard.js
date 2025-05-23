function createCard(restaurant) {
	// Création des éléments de la carte

	const newCardRestaurant = document.createElement("div");
	const newCardHeader = document.createElement("div");
	const newCardImg = document.createElement("img");

	const newCardBody = document.createElement("div");
	const newCardTitle = document.createElement("h3");
	const newCardDescription = document.createElement("p");
	const newCardFeatures = document.createElement("div");

	const newCardDistance = document.createElement("span");
	const newCardTitleDistance = document.createElement("h4");
	const newCardTextDistance = document.createElement("p");

	const newCardPrice = document.createElement("span");
	const newCardTitlePrice = document.createElement("h4");
	const newCardTextPrice = document.createElement("p");

	const newCardCategory = document.createElement("span");
	const newCardTitleCategory = document.createElement("h4");
	const newCardTextCategory = document.createElement("p");

	const newCardButton = document.createElement("button");
	const newCardLink = document.createElement("a");

	// Ajout des classes des éléments respectifs
	newCardRestaurant.classList.add("Restaurant");
	newCardHeader.classList.add("card-header");
	newCardImg.classList.add("card-img");

	newCardBody.classList.add("card-body");
	newCardTitle.classList.add("card-title");
	newCardDescription.classList.add("card-description");
	newCardFeatures.classList.add("card-features");
	newCardButton.classList.add("card-button");

	newCardDistance.classList.add("card-distance");
	newCardTitleDistance.classList.add("card-title-item");
	newCardTextDistance.classList.add("card-title-text");

	newCardPrice.classList.add("card-price");
	newCardTitlePrice.classList.add("card-title-item");
	newCardTextPrice.classList.add("card-title-text");

	newCardCategory.classList.add("card-category");
	newCardTitleCategory.classList.add("card-title-item");
	newCardTextCategory.classList.add("card-title-text");

	// Gestion du contenu des éléments à partir de l'objet Restaurant
	newCardImg.src = restaurant.img;
	newCardImg.alt = "Image du restaurant";
	newCardTitle.textContent = restaurant.name;
	newCardTitle.alt = " Titre du restaurant";
	newCardDescription.textContent = restaurant.description;
	newCardDescription.alt = "Description du restaurant";

	newCardTitleDistance.textContent = "Distance";
	newCardTextDistance.textContent = restaurant.distance;

	newCardTitlePrice.textContent = "Prix";
	newCardTextPrice.textContent = restaurant.price;

	newCardTitleCategory.textContent = "Catégorie";
	newCardTextCategory.textContent = restaurant.category;

	newCardLink.textContent = "Visiter la page Google";
	newCardLink.href = restaurant.googlelink;
	newCardLink.target = "_blank";

	// Placements des éléments avec leur parent respectif
	newCardRestaurant.appendChild(newCardHeader);
	newCardRestaurant.appendChild(newCardBody);

	newCardHeader.appendChild(newCardImg);

	newCardBody.appendChild(newCardTitle);
	newCardBody.appendChild(newCardDescription);
	newCardBody.appendChild(newCardFeatures);
	newCardBody.appendChild(newCardButton);

	newCardFeatures.appendChild(newCardDistance);
	newCardFeatures.appendChild(newCardPrice);
	newCardFeatures.appendChild(newCardCategory);

	newCardDistance.appendChild(newCardTitleDistance);
	newCardDistance.appendChild(newCardTextDistance);

	newCardPrice.appendChild(newCardTitlePrice);
	newCardPrice.appendChild(newCardTextPrice);

	newCardCategory.appendChild(newCardTitleCategory);
	newCardCategory.appendChild(newCardTextCategory);

	newCardButton.appendChild(newCardLink);

	// On retourne la carte unique correspondant à l'objet passé en paramètre
	return newCardRestaurant;
}

export default createCard;
