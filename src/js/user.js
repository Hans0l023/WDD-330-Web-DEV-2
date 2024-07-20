import { loadHeaderFooter } from "./utils.mjs";




function displayFavorites() {
    const favoritesDiv = document.querySelector('#favorites');
    let favorites = JSON.parse(localStorage.getItem('favorites')) || [];

    if (favorites.length > 0) {
        favoritesDiv.innerHTML = favorites.map(item => `
            <div class="exercise" id="excercisefav">
                <div><img src="/images/delete.png"  class="delImg" data-name="${item.name}" id="delete-icon"  alt="Delete Icon" /></div>
                <h2 class="exercise-name">Name:</h2> ${item.name}
                <h2>Type: </h2> ${item.type}
                <h2>Muscle:</h2> ${item.muscle}
                <h2>Difficulty:</h2> ${item.difficulty}
                <h2>Equipment:</h2> ${item.equipment}
                <h2>Instructions:</h2> ${item.instructions}
            </div>
        `).join('');

        document.querySelectorAll(".delImg").forEach(icon => {
            icon.addEventListener("click", (e) => {
                const name = e.target.getAttribute("data-name");
                removeFromFavorites(name);
            });})
    } else {
        favoritesDiv.innerHTML = 'No favorites added yet.';
    }
}

displayFavorites();


function removeFromFavorites(name) {
    let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    favorites = favorites.filter(item => item.name !== name);
    localStorage.setItem("favorites", JSON.stringify(favorites));
    displayFavorites();
}

async function init(){
    await loadHeaderFooter()
    console.log('here')
}
init();