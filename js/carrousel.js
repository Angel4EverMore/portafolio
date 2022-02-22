const d = document


export default function animaCarrousel(contenedor) {
  const $contenedor = d.getElementById(contenedor),
        $prevBtn = $contenedor.parentElement.previousElementSibling,
        $nextBtn = $contenedor.parentElement.nextElementSibling

  
  // Obtener distancia a trasladar
  const obtenerDesplazamiento = item => {
    let itemWidth = item.offsetWidth,
        itemStyle = item.currentStyle || window.getComputedStyle(item),
        leftMargin = itemStyle.marginLeft.slice(0, -2),    // Es un string
        leftMarginInt = parseInt(leftMargin),
        distancia = itemWidth + (leftMarginInt * 2)

    return(distancia)
  }


  // Avanzar slider
  const nextItem = () => {
    let $firstItem = $contenedor.firstElementChild,
        mover = obtenerDesplazamiento($firstItem)

    $contenedor.style.marginLeft = `-${mover}px`
    $contenedor.style.transition = "margin .5s ease"

    setTimeout(() => {
      $contenedor.style.transition = "none"
      $contenedor.insertAdjacentElement("beforeend", $firstItem)
      $contenedor.style.marginLeft = 0
    }, 500);

  }


  // Retroceder slider
  const prevItem = () => {
    let $lastItem = $contenedor.lastElementChild,
        mover = obtenerDesplazamiento($lastItem)

        $contenedor.insertAdjacentElement("afterbegin", $lastItem)
        $contenedor.style.marginLeft = `-${mover}px`
        $contenedor.style.transition = "none"
        
        setTimeout(() => {
          $contenedor.style.transition = "margin .5s ease"
      $contenedor.style.marginLeft = 0
    }, 10);

  }


  let intervalo = setInterval(nextItem, 3000)

  const stop = () => { clearInterval(intervalo) },
        play = () => { intervalo = setInterval(nextItem, 3000) }
  

  if ($prevBtn !== null) {
    $prevBtn.addEventListener('click', prevItem)
    $nextBtn.addEventListener('click', nextItem)
  }


  function newFunction() {
    $contenedor.addEventListener("mouseover", stop)
    $contenedor.addEventListener("mouseleave", play)
  }
}

