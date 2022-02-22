const d = document,
      w = window,
      $btnScrollToTop = d.getElementById("scroll-to-top-btn")


export default function navMenu() {
  const $menu = d.querySelector(".menu-container"),
        $toggleBtn = d.getElementById("toggle-button"),
        $enlacesPrueba = d.querySelectorAll(".enlace")

  // Función para agregar clase
  const agregaClase = (elemento, clase) => {
    if (!elemento.classList.contains(clase)) {
      elemento.classList.add(clase)
    }
  }

  // Función para quitar clase
  const quitaClase = (elemento, clase) => {
    if (elemento.classList.contains(clase)) {
      elemento.classList.remove(clase)
    }
  }

  // Función que dispara el ocultar o mostrar menú
  const controlaToggle = () => {
    if ($toggleBtn.checked === true) {
      agregaClase($menu, "show-menu");
    } else {
      quitaClase($menu, "show-menu")
    }
  }


  // EJECUCIÓN
  // Botón para ocultar menú
  $toggleBtn.onclick = () => {
    controlaToggle()
    // console.log($menu);
  }

  // Click en cualquier opción del menú
  $enlacesPrueba.forEach(enlace => {
    enlace.addEventListener('click', () => {
      $toggleBtn.checked = false
      controlaToggle();
    })
  })



  // COMPORTAMIENTO BOTÓN SCROLL TO TOP
  // =========================================================================
  const ocultarBtn = () => {
    agregaClase($btnScrollToTop, "non-visible")
  }

  const mostrarBtn = () => {
    quitaClase($btnScrollToTop, "non-visible")
  }

  
  // Al hacer scroll
  w.onscroll = () => {
    let scrollTop = w.pageYOffset || d.documentElement.scrollTop

    if (scrollTop > 500) {
      mostrarBtn()
    } else {
      ocultarBtn()
    }

  }
  
  let intervalo = setInterval(ocultarBtn, 5000)
  
  const play = () => { intervalo = setInterval(ocultarBtn, 3000) },
        stop = () => { clearInterval(intervalo) }

  $btnScrollToTop.onclick = () => {
    w.scrollTo({
      behavior: "smooth",
      top: 0
    })
  }

  $btnScrollToTop.addEventListener("mouseover", stop)
  $btnScrollToTop.addEventListener("mouseleave", play)


}