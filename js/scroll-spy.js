// Detectar cuando cada seccion entre al foco
//Agregar clase active al li correspondiente del menú

function scrollSpy() {
  const sections = document.querySelectorAll("section[data-scroll-spy")
  const cb = (entries) => {
    // console.log("Entradas: ", entries);

    entries.forEach(entry => {
      // console.log(entry);
      const idSeccion = entry.target.getAttribute("id")
      
      if (entry.isIntersecting) {
        document.querySelector(`a[data-scroll-spy][href="#${idSeccion}"]`).classList.add("active-link")
      } else {
        document.querySelector(`a[data-scroll-spy][href="#${idSeccion}"]`).classList.remove("active-link")
      }
    })
    
  }

  // Crear observador con ap IntersectionObserver
  // Recibe 2 parámetros: callback y parámetros
  const observer = new IntersectionObserver(cb, {
    // root:     // Elemento desde el cual se medirá el scroll. Por defecto es el body
    // rootMargin: "200px 0px 150px 0px",   // Reduce el margen de observación en cada seccion. Los valores se establecen en el sentido del reloj (CSS) y en px
    // treshold: [0.5, 0.75],   // Cuando el elemento tenga una visibilidad entre el rango establecido 50% y 70%
    // rootMargin: "250px 0px 100px 0px"
    threshold: .4
  })
  // Mostrar opciones del observador
  // console.log("Observador: ", observer);

  sections.forEach(el => observer.observe(el))

}