let $divLoader = document.getElementById("loader")



// Función para desaparecer div (loader)
const slideUp = () => {
  $divLoader.style.top = `${0}vh`;
  let numero = 0;
  const slideUpEffect = setInterval(() => {
    
    if($divLoader.style.top !== "-100vh"){
      numero -= 1;
      $divLoader.style.top = `${numero}vh`
    } else {
      clearInterval(slideUpEffect)
      $divLoader.style.display = 'none';
    }
    
  }, 5)
}



// Función para comprobar que ya se cargó la página completa
const Retardo = segundos => {
  return new Promise((resolve, reject) => {
    setInterval(() => {
      let estado = document.readyState
      if (estado == 'complete') {
        resolve();
      }
    }, segundos);
  })
}



// Función asíncrona para unir las promesas
const Ejecuta = async () => {
  try {
    await Retardo(1000)
    slideUp()
  } catch (error) {
    console.error('Error: ', error )
  }
}



if(document.readyState == 'loading'){
    Ejecuta()
}

