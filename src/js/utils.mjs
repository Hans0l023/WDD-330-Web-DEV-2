

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
  

  export function getType(){
    const params = new URLSearchParams(window.location.search);
    const type = params.get('type') || 'default';
  
    console.log('Type from URL:', type);
    return type
  }

 // API fetch

 // Function to get the result from the API
 export async function getResult() {
  const type = getType()
  console.log(type)
return fetch('https://api.api-ninjas.com/v1/exercises?type' + type, {
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