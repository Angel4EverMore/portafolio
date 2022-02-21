const d = document,
      w = window,
      $btnScrollToTop = d.getElementById("scroll-to-top-btn")
      // $mainDiv = d.getElementById("acerca")
      // $mainHeader = d.querySelector(".main-header")


export default function navMenu() {
  const $menu = d.querySelector(".menu-container"),
        $toggleBtn = d.getElementById("toggle-button"),
        $enlacesPrueba = d.querySelectorAll(".enlace")

  // Función para mostrar elementos
  const mostrarElemento = (elemento, clase) => {
    if (!elemento.classList.contains(clase)) {
      elemento.classList.add(clase)
    }
  }

  // Función para ocultar elementos
  const ocultarElemento = (elemento, clase) => {
    if (elemento.classList.contains(clase)) {
      elemento.classList.remove(clase)
    }
  }

  // Función que dispara el ocultar o mostrar menú
  const controlaToggle = () => {
    if ($toggleBtn.checked === true) {
      mostrarElemento($menu, "show-menu");
    } else {
      ocultarElemento($menu, "show-menu")
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


  const ocultarBtn = () => {
    setTimeout(() => {
      $btnScrollToTop.style.opacity = 0
      $btnScrollToTop.style.display = "none" 
    }, 5000)
  }

  w.onscroll = () => {
    // console.log(w.scrollY);
    // const maxScrollable = d.documentElement.scrollHeight - w.innerHeight    // Máximo scrolleable de la página
    if (w.scrollY >= 500) {
      // mostrarElemento($btnScrollToTop, "visible")
      // ocultarElemento($btnScrollToTop, "non-visible")
      $btnScrollToTop.style.opacity = 1
      $btnScrollToTop.style.display = "initial"

      // ocultarBtn()
      clearTimeout(ocultarBtn)
    } 
    else {
      // ocultarElemento($btnScrollToTop, "visible")
      // mostrarElemento($btnScrollToTop, "non-visible")
      $btnScrollToTop.style.opacity = 0
      $btnScrollToTop.style.display = "none" 
      // ocultarBtn()

    }

    ocultarBtn()
  }


  // $btnScrollToTop.addEventListener("hover", () => {
  //   console.log('hice hover');
  // })
  $btnScrollToTop.onmouseenter = () => {
    // alert('entre al botón')
    clearTimeout(ocultarBtn)
  }

  $btnScrollToTop.onmouseleave = () => {
    // alert('salí del botón')
    ocultarBtn()
  }

}