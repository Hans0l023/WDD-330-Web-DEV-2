import{g as a,l as c}from"./utils-C2K4AiDf.js";async function l(){const i=document.querySelector("#typeDisplay"),s=await a();i.innerHTML=s.map(e=>`
   <div class="exercise">
       <div class="exercise-name">Name: ${e.name}</div>
       <div>Muscle: ${e.muscle}</div>
       <div>Difficulty: ${e.difficulty}</div><br>
   </div>
`).join("")}l();async function t(){await c(),console.log("here")}t();
