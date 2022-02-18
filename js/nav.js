// CONSTANTES Y VARIABLES
const $toggleButton = document.getElementById("toggle-button"),
      $enlaces = document.querySelectorAll(".enlace"),
      $menuContainer = document.querySelector(".menu-container")



// FUNCIONES
function activeLink() {

  $toggleButton.onclick = () => {
    if ($toggleButton.checked == true){
      $menuContainer.style.left = "0%" 
    } else {
      $menuContainer.style.left = "-50%" 
    } 
  }

  $enlaces.forEach(enlace => {
    enlace.onclick = (e) => {

      // console.log(e.target);
      $enlaces.forEach(el => el.classList.remove("active-link"))

      e.target.classList.add("active-link")

      // Establecer botón toggle (móvil) a su estado inicial
      // Oculta navegador lateral
      if ($toggleButton.checked == true) {
        $toggleButton.checked = false;
      }
      
    }
  })
}


// EJECUCIÓN




