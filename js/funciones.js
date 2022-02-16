$(document).ready(function(){

  // Ajustar posición de segundo div  
  //var winHeight = $("#inicio").height() + $(".main-header").height();
  var winHeight = $("#inicio").height();
  var height = $(window).height();

  //ustesIniciales();

  function ajustesIniciales(){
    $("#portfolio").css({"margin-top": winHeight});
  }


  $(window).resize(function() {
  //alert('Has cambiado el tamaño de la ventana');
    $("#portfolio").css({"margin-top": winHeight});
  });
  


  // Efecto blur en la primera imagen
  $(document).scroll(function(){
    var s = $(window).scrollTop();
    var pixels = s / 100;

    if (s < height){
      $("#inicio").css({
          "filter": "blur(" + pixels + "px)",
          "-webkit-filter": "blur(" + pixels + "px)",
          "-ms-filter": "blur(" + pixels + "px)",
          "-moz-filter": "blur(" + pixels + "px)",
          "-o-filter": "blur(" + pixels + "px)",
          
          "background-position": "center -" + pixels * 10 + "px"
      });
      
    }

  });

  //Parallax
  $(window).on('scroll',parallax);
  function parallax(el, t){
    //alert('haciendo scroll');
    // obtener el nivel de scroll
    let windowScrollTop = $(window).scrollTop();
    //efecto paralax para los fondos
    // function parallaxBg(el,t){
      $(el).css({
        'background-atachment': 'fixed',
        'background-position': 'center -' + (windowScrollTop*t) + 'px'
      });
    // }
  }

  function parallaxFront(el,t){
    let windowScrollTop = $(window).scrollTop();
    $(el).css({
      'position': 'relative',
      'top': (windowScrollTop*t) + 'px'
    });
  }

  // parallax('.bg-parallax', 10);
  // parallaxFront('.subtitle-banner', 20);

});


