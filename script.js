const restaurants = [
  { id: 1, type: "kebab", rating: 4.5, reviews: 120 },
  { id: 2, type: "Asiatique", rating: 4.8, reviews: 95 },
  { id: 3, type: "Végé", rating: 4.2, reviews: 150 },
  { id: 4, type: "Marocaine", rating: 4.7, reviews: 80 },
  { id: 5, type: "Street Food", rating: 4.7, reviews: 80 },
  

];

const category = document.querySelector(".Catégorie")

document.addEventListener("DOMContentLoaded", function () {
  const container = document.getElementById("restaurants-container");
  
  restaurants.forEach((restaurant) => {
    const restaurantDiv = document.createElement("div");
    restaurantDiv.classList.add("restaurant-card");
    
    restaurantDiv.innerHTML = `
      <h3>${restaurant.name}</h3>
      <p>⭐ ${restaurant.rating} (${restaurant.reviews} avis)</p>
    `;
    
    container.appendChild(restaurantDiv);
  });
});

document.querySelectorAll(".select-btn").forEach(button => {
    button.addEventListener("click", function () {
      const chosenId = parseInt(this.getAttribute("data-id"));
      const chosenRestaurant = restaurants.find(el => el.id === chosenId);
      console.log("Restaurant sélectionné:", chosenRestaurant);
      alert(`Vous avez sélectionné : ${chosenRestaurant.name} - Note: ${chosenRestaurant.rating}`);
    });
  });


