// CONSTANTE Y VARIABLES
const $themeBtn = document.getElementById("theme-button")


// FUNCIÓN
function darkTheme(btn, darkClass) {
  let ls = localStorage
  const $selectors = document.querySelectorAll("[data-dark]")

  // let moon = 'fas fa-moon icons icon-dark',
  //     sun = 'fas fa-sun icons icon-dark'

  const lightMode = () => {
    // $themeBtn.forEach(itemBtn => itemBtn.classList = moon)
    // btn.innerText = "Dark"
    btn.classList.remove("btn-light")
    btn.classList.add("btn-dark")
    btn.src = './img/moon-ico.svg'

    $selectors.forEach(item => item.classList.remove(darkClass))
    ls.setItem("theme", "ligth")

  }

  const darkMode = () => {
    // $themeBtn.forEach(itemBtn => itemBtn.classList = sun)
    // btn.innerText = "Light"
    btn.classList.remove("btn-dark")
    btn.classList.add("btn-light")
    btn.src = './img/sun-ico.svg'

    $selectors.forEach(item => item.classList.add(darkClass))
    ls.setItem("theme", "dark")
  }

  btn.onclick = (e) => {
    e.preventDefault
    // console.log(btn.innerText);
    // if (btn.innerText == "Light") {
    if (btn.classList.contains('btn-light')) {
      lightMode()
    } 
    // else if (btn.innerText == "Dark") {
    else if (btn.classList.contains('btn-dark')) {
      darkMode()
    }
  }

  
  if(ls.getItem("theme") === null) ls.setItem("theme", "light");
  if(ls.getItem("theme") === "light") lightMode();
  if(ls.getItem("theme") === "dark") darkMode();
}


// EJECUCIÓN
darkTheme($themeBtn, "dark-theme")