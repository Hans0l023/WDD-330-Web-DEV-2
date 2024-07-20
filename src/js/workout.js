import { loadHeaderFooter } from "./utils.mjs";





export function getName(){
    const params = new URLSearchParams(window.location.search);
    const name = params.get("name") || "default";
  
    console.log("name from URL:", name);
    return name
  }

 // API fetch

 // Function to get the result from the API
 export async function getResult() {
  const name = getName()
  console.log(name)
return fetch('https://api.api-ninjas.com/v1/exercises?name=' + name, {
    headers: {
      'x-api-key': 'lNg6xyaBCCsOKsRgvrU3Fw==oGrQMVukYf4LkcSW',
    },},
    function(error, response, body) {
      if(error) return console.error('Request failed:', error);
      else if(response.statusCode != 200) return console.error('Error:', response.statusCode, body.toString('utf8'));
      else console.log(body)
  })
  
  .then(response => response.json())
  .catch(error => console.log('Error while fetching:', error))
}



async function loadResult(){
    const typeDisplayDiv = document.querySelector('#workout');
    
  
    const result = await getResult();
    typeDisplayDiv.innerHTML = result.map(item => `
     <div class="exercise" id="excerciseWorkout">
     <div><img src="/images/favorite.png"  class="favImg" id="favorite-icon"  data-name="${item.name}" data-type="${item.type}" data-muscle="${item.muscle}" data-difficulty="${item.difficulty}" data-equipment="${item.equipment}" data-instructions="${item.instructions}" alt="Favorite Icon" /></div>
         <div class="exercise-name"><h2>Name:</h2> ${item.name}</div>

         <div><h2>Difficulty:</h2> ${item.difficulty}</div>
         <div><h2>Muscle:</h2> ${item.muscle}</div>
         <div><h2>Equipment:</h2> ${item.equipment}</div>
         <div><h2>Instructions:</h2> ${item.instructions}</div>

     </div>
  `).join('');
    // Add event listeners to the favorite icons

    document.querySelectorAll(".favImg").forEach(icon => {
      icon.addEventListener("click", (e) => {
        console.log("hit")
          const exercise = {
              name: e.target.getAttribute("data-name"),
              type: e.target.getAttribute("data-type"),
              muscle: e.target.getAttribute("data-muscle"),
              equipment: e.target.getAttribute("data-equipment"),
              difficulty: e.target.getAttribute("data-difficulty"),
              instructions: e.target.getAttribute("data-instructions")

          };
          
          addToFavorites(exercise);
      });
    
  });
  
   }
   loadResult();

   function addToFavorites(exercise) {
    let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    favorites.push(exercise);
    localStorage.setItem("favorites", JSON.stringify(favorites));
    addUserIconClickListener();
    //alert(`${exercise.name} added to favorites!`);
}

  // Add event listeners to the favorite icons

  document.querySelectorAll(".favImg").forEach(icon => {
    icon.addEventListener("click", (e) => {
      console.log("hit")
        const exercise = {
            name: e.target.getAttribute("data-name"),
            type: e.target.getAttribute("data-type"),
            muscle: e.target.getAttribute("data-muscle"),
            difficulty: e.target.getAttribute("data-difficulty"),
            instructions: e.target.getAttribute("data-instructions")
        };
        addToFavorites(exercise);
    });
});

// Add animation to user icon on click
function addUserIconClickListener() {
  const userIcon = document.getElementById('favorite-icon');
  
  userIcon.addEventListener('click', () => {
    userIcon.classList.add('animate-click');
    console.log('bang')
    
    // Remove the animation class after the animation ends
    userIcon.addEventListener('animationend', () => {
      userIcon.classList.remove('animate-click');
    }, { once: true });
  });
}


async function init(){
    await loadHeaderFooter()
    console.log("here")
}
init();