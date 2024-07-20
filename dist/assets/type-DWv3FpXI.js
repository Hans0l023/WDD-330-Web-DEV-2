import{g as i,a as n,l as s}from"./utils-xU2iELlT.js";async function o(){const a=document.querySelector("#typeDisplay"),t=await i();a.innerHTML=t.map(e=>`
   <div class="exercise">
   <a href="/workout/index.html?name=${e.name}">
         <div class="exercise-name"><h2>Name:</h2> ${e.name}</div>

         <div><h2>Difficulty:</h2> ${e.difficulty}</div>
         <div><h2>Muscle:</h2> ${e.muscle}</div>

     </div>
       </a>
   </div>
`).join("")}o();async function c(a){const t=document.querySelector("#exercise-type");t.textContent=n()}c();async function l(){await s(),console.log("here")}l();
