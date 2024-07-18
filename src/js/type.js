 import { loadHeaderFooter, getResult } from './utils.mjs';
 



 async function loadResult(){
  const cardioDiv = document.querySelector('.cardio');

  const result = await getResult();
  cardioDiv.innerHTML = JSON.stringify(result, null, 2); // Format JSON data for readability
 }
 loadResult();
















    async function init(){
       await loadHeaderFooter()
       console.log('here')
   }
   init();