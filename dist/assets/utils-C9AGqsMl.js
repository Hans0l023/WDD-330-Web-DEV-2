(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function n(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(t){if(t.ep)return;t.ep=!0;const r=n(t);fetch(t.href,r)}})();function a(o,e,n,s){e.insertAdjacentHTML("afterbegin",o)}async function u(){const o=await i("/partials/header.html"),e=await i("/partials/footer.html"),n=document.querySelector("#main-header"),s=document.querySelector("#footer");a(o,n),a(e,s)}async function i(o){return await(await fetch(o)).text()}function l(){const e=new URLSearchParams(window.location.search).get("type")||"default";return console.log("Type from URL:",e),e}async function f(){const o=l();return console.log(o),fetch("https://api.api-ninjas.com/v1/exercises?type="+o,{headers:{"x-api-key":"lNg6xyaBCCsOKsRgvrU3Fw==oGrQMVukYf4LkcSW"}},function(e,n,s){if(e)return console.error("Request failed:",e);if(n.statusCode!=200)return console.error("Error:",n.statusCode,s.toString("utf8"));console.log(s)}).then(e=>e.json()).catch(e=>console.log("Error while fetching:",e))}export{l as a,f as g,u as l};
