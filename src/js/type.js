 import { loadHeaderFooter, getResult, getType } from './utils.mjs';
 



 async function loadResult(){
  const typeDisplayDiv = document.querySelector('#typeDisplay');
  

  const result = await getResult();
  typeDisplayDiv.innerHTML = result.map(item => `
   <div class="exercise">
   <a href="/workout/index.html?name=${item.name}">
       <div class="exercise-name">Name: ${item.name}</div>
       <div>Difficulty: ${item.difficulty}</div>
       <div>Muscle: ${item.muscle}</div>
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