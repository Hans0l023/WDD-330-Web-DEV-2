import"./style-C0cvdqvT.js";import{g as s,a,l as c}from"./utils-C3vA2Xv5.js";async function n(){const i=document.querySelector("#typeDisplay"),e=await s();i.innerHTML=e.map(t=>`
   <div class="exercise">
       <div class="exercise-name">Name: ${t.name}</div>
       <div>Difficulty: ${t.difficulty}</div>
       <div>Muscle: ${t.muscle}</div>
   </div>
`).join("")}n();async function o(i){const e=document.querySelector("#exercise-type");e.textContent=a()}o();async function l(){await c(),console.log("here")}l();
