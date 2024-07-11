


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
    console.log('here')
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
  