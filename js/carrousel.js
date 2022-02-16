//  CONSTANTES Y VARIABLES
const carrouselContainer = document.getElementById("carrousel-portafolio");
// let posicionActual = 0;



// FUNCIONES
// function animarCarrousel(carrousel) {
//   let carrouselCards = carrousel.querySelectorAll(".carrousel-item"),
//       cantCards = carrouselCards.length,
//       cardWidth = carrousel.querySelector(".carrousel-item").offsetWidth


//   // console.log(cantCards);
//   // console.log(cardWidth);
//   carrouselCards.forEach(element => {
//     let coords = element.getBoundingClientRect(),
//         marginLeft = coords.left
//     // console.log(coords.left);
//     for (let i = 1; i <= cantCards; i++) {
//       let nextMarginLeft = (i == 5) ? marginLeft : marginLeft * i;
//       setTimeout(() => {
//         // console.log(nextMarginLeft);
//       }, 5000);
      
//     }
//   });
  
// }


function avanzarFoto() {
  if (posicionActual > cantCards) {
    posicionActual = 0
  } else {
    posicionActual++
  }
  // return posicionActual
  // console.log(posicionActual);
  carrouselCards.forEach(element => {
    let coords = element.getBoundingClientRect(),
        marginLeft = coords.left,
        nextMarginLeft = marginLeft - (posicionActual * cardWidth)

    console.log(nextMarginLeft);
  });
}

function retrocederFoto() {
  if (posicionActual <= 0) {
    posicionActual = cantCards
  } else {
    posicionActual--
  }
}

function playCarrousel(tiempo) {
  intervalo = setInterval(avanzarFoto, tiempo)
  // console.log(posicionActual);
}


function Ejecutar(carrousel, milisegundos = 2000) {
  let $carrouselCards = carrousel.querySelectorAll(".carrousel-item"),
      cantCards = $carrouselCards.length,
      $uniqueCard = carrousel.querySelector(".carrousel-item"),
      $carrouselContainer = $uniqueCard.parentElement;
      cardWidth = $uniqueCard.offsetWidth,
      $btnAtras = carrousel.previousElementSibling,
      $btnAdelante = carrousel.nextElementSibling,
      posicionActual = 0,
      MILISEGUNDOS = milisegundos,
      intervalo = '';

  let cardStyle = $uniqueCard.currentStyle || window.getComputedStyle($uniqueCard),
      strCardLeftMargin = cardStyle.marginLeft.slice(0, -2),
      intCardLeftMargin = parseInt(strCardLeftMargin);

  
  function avanzarItem() {
    if (posicionActual == cantCards -1) {
      posicionActual = 0
    } else {
      posicionActual++
    }

    if (posicionActual == 0) {
      nextMarginLeft = posicionActual * cardWidth
    } else {
      nextMarginLeft = (posicionActual * cardWidth) + (intCardLeftMargin * 2)
    }

    $carrouselCards.forEach(element => {
      element.style.transform = `translate(-${nextMarginLeft}px)`
    })
  }
  
  function retrocederItem() {
    if (posicionActual == 0) {
      posicionActual = cantCards - 1
    } else {
      posicionActual--
    }

    if (posicionActual < cantCards -1 ) {
      nextMarginLeft = posicionActual * cardWidth * -1
    } else {
      nextMarginLeft = ((posicionActual * cardWidth) + (intCardLeftMargin * 2)) * -1
    }

    $carrouselCards.forEach(element => {
      element.style.transform = `translate(${nextMarginLeft}px)`
    })
  }
  
  function playCarrousel() {
    intervalo = setInterval(avanzarItem, MILISEGUNDOS)
    // console.log(posicionActual);
  }

  function stopCarrousel(){
    clearInterval(intervalo);
    // intervalo = clearInterval()
  }

  playCarrousel()
  // $btnAdelante.onclick = avanzarItem()
  $carrouselContainer.addEventListener("mouseover", stopCarrousel)
  $carrouselContainer.addEventListener("mouseleave", playCarrousel)
  $btnAdelante.addEventListener("click", avanzarItem)
  $btnAtras.addEventListener("click", retrocederItem)
}



// EJECUCIÓN
Ejecutar(carrouselContainer, 4000)



