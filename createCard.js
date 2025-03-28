function createCard(restaurant) {
	// Création des éléments de la carte

	const newCard = document.createElement("div");
	const newCardHeader = document.createElement("div");
	const newCardImg = document.createElement("div");

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

	// Ajout des classes des éléments respectifs
	newCard.classList.add("Restaurant");
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
	newCardTitle.textContent = restaurant.name;
	newCardDescription.textContent = restaurant.description;
	newCardTitleDistance.textContent = "Distance";
	newCardTextDistance.textContent = restaurant.distance;
	newCardTitlePrice.textContent = "Prix";
	newCardTextPrice.textContent = restaurant.price;
	newCardTitleCategory.textContent = "Catégorie";
	newCardTextCategory.textContent = restaurant.category;
	newCardButton.textContent = "Visiter la page Google";

	// Placements des éléments avec leur parent respectif
	newCard.appendChild(newCardHeader);
	newCard.appendChild(newCardBody);

	newCardHeader.appendChild(newCardImg);

	newCardBody.appendChild(newCardTitle);
	newCardBody.appendChild(newCardDescription);
	newCardBody.appendChild(newCardFeatures);
	newCardBody.appendChild(newCardButton);

	newCardDistance.appendChild(newCardTitleDistance);
	newCardDistance.appendChild(newCardTextDistance);

	newCardPrice.appendChild(newCardTitlePrice);
	newCardPrice.appendChild(newCardTextPrice);

	newCardCategory.appendChild(newCardTitleCategory);
	newCardCategory.appendChild(newCardTextCategory);

	// On retourne la carte unique correspondant à l'objet passé en paramètre
	return newCard;
}


export default createCard;
