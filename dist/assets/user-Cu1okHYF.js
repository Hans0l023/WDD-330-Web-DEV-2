import{l as a}from"./utils-xU2iELlT.js";function s(){const i=document.querySelector("#favorites");let o=JSON.parse(localStorage.getItem("favorites"))||[];o.length>0?i.innerHTML=o.map(e=>`
            <div class="exercise" id="excerciseWorkout">
                <h2 class="exercise-name">Name: ${e.name}</h2>
                <h2>Muscle: ${e.muscle}</h2>
                <h2>Difficulty: ${e.difficulty}</h2>
            </div>
        `).join(""):i.innerHTML="No favorites added yet."}s();async function t(){await a(),console.log("here")}t();
