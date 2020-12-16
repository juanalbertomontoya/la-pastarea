function moverFull() {
  //almacenar slider en una variable//
  var sliderFull = $(".slider-platos > .contenedor");
  //almacenar botones//
  var siguienteFull = $("#btn-next");
  var anteriorFull = $("#btn-prev");

  //mover ultima columna al primer lugar//

  $(".slider-platos > .contenedor > div:last").insertBefore(
    ".slider-platos > .contenedor > div:first"
  );

  sliderFull.css("margin-left", "-" + 180 + "px");

  // mover a la derecha

  function moverD() {
    // mueve el slider a la derecha


    sliderFull.animate({ "marginLeft": "-=180px" }, 600, function () {
      $(".slider-platos > .contenedor > div:first").insertAfter(
        ".slider-platos > .contenedor > div:last"
      );
      sliderFull.css("margin-left", "-" + 180 + "px");
    });
  }

  siguienteFull.on("click", function () {
    moverD();
  });

  // mover a la izquierda

  function moverI() {
    //mueve el slider a la izquierda

    sliderFull.animate({ "marginLeft": "+=180px" }, 600, function () {
      $(".slider-platos > .contenedor > div:last").insertBefore(
        ".slider-platos > .contenedor > div:first"
      );
      sliderFull.css("margin-left", "-" + 180 + "px");
    });
  }

  anteriorFull.on("click", function () {
    moverI();
  });

  setInterval(function () {
    moverD();
  }, 6000);

}


moverFull();