/* Detecta el scroll para cambiar estilos */

$(window).scroll(function () {
  var scroll = $(window).scrollTop();

  if (scroll > 10) {
    $(".menu-principal").addClass("scroll");
   } else {
    $(".menu-principal").removeClass("scroll");
   }
});

/* Funciones del boton mobile del menu responsive */

$("#boton-responsive").click(function () { 
  $(".botones-menu").toggleClass("show");
});