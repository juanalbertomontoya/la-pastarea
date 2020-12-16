$(".icono-plato.uno").click(function () {
  $(".plato").removeClass("show"); 
  $(".plato.uno").addClass("show");
});

$(".icono-plato.dos").click(function () {
  $(".plato").removeClass("show"); 
  $(".plato.dos").addClass("show");
});

$(".icono-plato.tres").click(function () {
  $(".plato").removeClass("show"); 
  $(".plato.tres").addClass("show");
});

$(".icono-plato.cuatro").click(function () {
  $(".plato").removeClass("show"); 
  $(".plato.cuatro").addClass("show");
});

$(".icono-plato.cinco").click(function () {
  $(".plato").removeClass("show"); 
  $(".plato.cinco").addClass("show");
});

$(".icono-plato.seis").click(function () {
  $(".plato").removeClass("show"); 
  $(".plato.seis").addClass("show");
});

$(".icono-plato.siete").click(function () {
  $(".plato").removeClass("show"); 
  $(".plato.siete").addClass("show");
});

$(".icono-plato.ocho").click(function () {
  $(".plato").removeClass("show"); 
  $(".plato.ocho").addClass("show");
});

$(".icono-plato.nueve").click(function () {
  $(".plato").removeClass("show"); 
  $(".plato.nueve").addClass("show");
});


/* Funcion del slider de entradas y acompañantes */

$("#boton-entradas").click(function () { 
  $(".entradas-acompanantes > .contenedor").css("margin-left", "-" + 0 + "%");
});

$("#boton-acompanantes").click(function () { 
  $(".entradas-acompanantes > .contenedor").css("margin-left", "-" + 100 + "%");
});
