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