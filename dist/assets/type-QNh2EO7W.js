import{l as c,g as l,a as o}from"./utils-C9AGqsMl.js";async function a(t=null){const e=document.querySelector("#typeDisplay");let i=await l();t&&(i=r(i,t)),e.innerHTML=i.map(n=>`
    <div class="exercise" id="exerciseType">
      <a href="/workout/index.html?name=${n.name}">
        <div class="exercise-name"><h2>Name:</h2> ${n.name}</div>
        <div><h2>Difficulty:</h2> ${n.difficulty}</div>
        <div><h2>Muscle:</h2> ${n.muscle}</div>
      </a>
    </div>
  `).join("")}function r(t,e){return e==="all"?t:t.filter(i=>i.difficulty.toLowerCase()===e.toLowerCase())}function s(){document.querySelector("#sortByDifficulty").addEventListener("change",e=>{a(e.target.value)})}async function u(t){const e=document.querySelector("#exercise-type");e.textContent=o()}async function y(){await c(),a(),u(),s()}y();
