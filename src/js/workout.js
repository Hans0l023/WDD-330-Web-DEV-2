import { loadHeaderFooter } from "./utils.mjs";





export function getName(){
    const params = new URLSearchParams(window.location.search);
    const name = params.get('name') || 'default';
  
    console.log('name from URL:', name);
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
     <div class="exercise">
         <div class="exercise-name">Name: ${item.name}</div>
         <div class="exercise-name">Name: ${item.type}</div>

         <div>Difficulty: ${item.difficulty}</div>
         <div>Muscle: ${item.muscle}</div>
         <div>Instructions: ${item.instructions}</div>

     </div>
  `).join('');
   }
   loadResult();




async function init(){
    await loadHeaderFooter()
    console.log('here')
}
init();