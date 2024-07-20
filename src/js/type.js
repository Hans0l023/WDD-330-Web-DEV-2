import { loadHeaderFooter, getResult, getType } from './utils.mjs';

async function loadResult(sortBy = null) {
  const typeDisplayDiv = document.querySelector('#typeDisplay');
  let result = await getResult();

  if (sortBy) {
    // If a sortBy value is provided, filter and then sort the results
    result = filterResultsByDifficulty(result, sortBy);
  }

  typeDisplayDiv.innerHTML = result.map(item => `
    <div class="exercise" id="exerciseType">
      <a href="/workout/index.html?name=${item.name}">
        <div class="exercise-name"><h2>Name:</h2> ${item.name}</div>
        <div><h2>Difficulty:</h2> ${item.difficulty}</div>
        <div><h2>Muscle:</h2> ${item.muscle}</div>
      </a>
    </div>
  `).join('');
}

// Function to filter results based on the selected difficulty
function filterResultsByDifficulty(results, difficulty) {
  if (difficulty === 'all') {
    // Return all results if 'all' is selected
    return results;
  }

  return results.filter(item => item.difficulty.toLowerCase() === difficulty.toLowerCase());
}

function addSortByDifficultyEventListener() {
  const sortBySelect = document.querySelector('#sortByDifficulty');
  sortBySelect.addEventListener('change', (event) => {
    loadResult(event.target.value);
  });
}

async function loadTypeDisplay(type) {
  const TD = document.querySelector("#exercise-type");
  TD.textContent = getType(type);
}

async function init() {
  await loadHeaderFooter();
  loadResult(); // Load results initially without sorting
  loadTypeDisplay();
  addSortByDifficultyEventListener();
}

init();