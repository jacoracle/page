
const controller = new ScrollMagic.Controller();
const revealElements = document.getElementsByClassName("scroll-fade-in-up");
for (let i=0; i<revealElements.length; i++) {
  new ScrollMagic.Scene({
    triggerElement: revealElements[i],
    offset: 20,
    triggerHook: 0.9,
  })
    .setClassToggle(revealElements[i], "visible")
    .addTo(controller);
}

// Agregar escenas para indicar punto de acción
var scene = new ScrollMagic.Scene({triggerElement: "#trigger1"})
  .setClassToggle("#plane", "movePlane")
  .addIndicators({name: "1 - add a class"})
  .addTo(controller);

var scene2 = new ScrollMagic.Scene({triggerElement: "#trigger2"})
  .setClassToggle("#plane", "movePlane")
  .addIndicators({name: "2 - remove a class"})
  .addTo(controller);
