 import { loadHeaderFooter, getResult, getType } from './utils.mjs';
 



 async function loadResult(){
  const typeDisplayDiv = document.querySelector('#typeDisplay');
  

  const result = await getResult();
  typeDisplayDiv.innerHTML = result.map(item => `
   <div class="exercise">
   <a href="/workout/index.html?name=${item.name}">
         <div class="exercise-name"><h2>Name:</h2> ${item.name}</div>

         <div><h2>Difficulty:</h2> ${item.difficulty}</div>
         <div><h2>Muscle:</h2> ${item.muscle}</div>

     </div>
       </a>
   </div>
`).join('');
 }
 loadResult();

 async function loadTypeDisplay(type){
   const TD = document.querySelector("#exercise-type")
   TD.textContent = getType(type)
 }
loadTypeDisplay()












    async function init(){
       await loadHeaderFooter()
       console.log('here')
   }
   init();