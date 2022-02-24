// IMPORTS
import animaCarrousel from "./carrousel.js";
import navMenu from "./menu.js";


// EJECUCIÓN
document.addEventListener("DOMContentLoaded", event => {
  navMenu()
  animaCarrousel("slider-portafolio")
  
})


if ('serviceWorker' in navigator) {
  // console.log('Sí había un service worker instalado antes');
  navigator.serviceWorker.register('./sw.js')
  .then(registro => console.log('Registro exitoso del SW', registro))
  .catch(error => console.warn('Ya hubo falla galán', error))
} else { console.log('No hay service Worker instalado aún')}