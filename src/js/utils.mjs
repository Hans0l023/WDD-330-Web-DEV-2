import axios from 'axios';


// loading header and footer
export function renderWithTemplate(
    template,
    parentElement,
    data,
    callback)
  {
    parentElement.insertAdjacentHTML("afterbegin", template)
    if(callback) {
      callback(data);
    }
  }
  
  export async function loadHeaderFooter()
  {
    const header = await loadTemplate("./partials/header.html")
    const footer = await loadTemplate("/partials/footer.html")
  
    const headerElement = document.querySelector("#main-header")
    const footerElement = document.querySelector("#footer")
  
    renderWithTemplate(header, headerElement)
    renderWithTemplate(footer, footerElement)
  }
  
  export async function loadTemplate(path) {
    const res =  await fetch(path)
    const template =  await res.text()
    return template;
  }
  

 // API fetch
 export async function getResult(){
 const type = 'cardio';
  const apiKey = 'lNg6xyaBCCsOKsRgvrU3Fw==oGrQMVukYf4LkcSWY';
  const apiUrl = 'https://api.api-ninjas.com/v1/exercises?type=' + type;

  try {
      const response = await fetch(apiUrl, {
          headers: {
              'X-Api-Key': apiKey
          }
      });

      if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      return data;
  } catch (error) {
      console.error('Request failed:', error);
      return null;
  }
}
