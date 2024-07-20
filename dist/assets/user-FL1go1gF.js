import{l as s}from"./utils-C9AGqsMl.js";function i(){const a=document.querySelector("#favorites");let t=JSON.parse(localStorage.getItem("favorites"))||[];t.length>0?(a.innerHTML=t.map(e=>`
            <div class="exercise" id="excercisefav">
                <div><img src="/images/delete.png"  class="delImg" data-name="${e.name}" id="delete-icon"  alt="Delete Icon" /></div>
                <h2 class="exercise-name">Name:</h2> ${e.name}
                <h2>Type: </h2> ${e.type}
                <h2>Muscle:</h2> ${e.muscle}
                <h2>Difficulty:</h2> ${e.difficulty}
                <h2>Equipment:</h2> ${e.equipment}
                <h2>Instructions:</h2> ${e.instructions}
            </div>
        `).join(""),document.querySelectorAll(".delImg").forEach(e=>{e.addEventListener("click",o=>{const r=o.target.getAttribute("data-name");n(r)})})):a.innerHTML="No favorites added yet."}i();function n(a){let t=JSON.parse(localStorage.getItem("favorites"))||[];t=t.filter(e=>e.name!==a),localStorage.setItem("favorites",JSON.stringify(t)),i()}async function l(){await s(),console.log("here")}l();
