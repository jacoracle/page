const controller = new ScrollMagic.Controller();
const revealElements = document.getElementsByClassName("scroll-fade-in-up");

for (let i=0; i<revealElements.length; i++) { // create a scene for each element
  new ScrollMagic.Scene({
    triggerElement: revealElements[i],
    offset: 20,
    triggerHook: 0.9,
  })
    .setClassToggle(revealElements[i], "visible") // add class toggle
    .addTo(controller);
}

// var controller = new ScrollMagic.Controller();

// Agregar escenas para indicar punto de acción
var scene = new ScrollMagic.Scene({triggerElement: "#trigger1"})
					// trigger animation by adding a css class
          // .setClassToggle("#animate1, #animate2", "zap") Add multiple elements
					.setClassToggle("#animate1", "zap")
					.addIndicators({name: "1 - add a class"})
					.addTo(controller);

// var scene = new ScrollMagic.Scene({triggerElement: "#trigger1"})
//           .setClassToggle("#plane", "movePlane")
//           .addTo(controller);


var scene2 = new ScrollMagic.Scene({triggerElement: "#trigger2"})
					.setClassToggle("#animate1", "zap2")
					.addIndicators({name: "2 - add a class"})
					.addTo(controller);
