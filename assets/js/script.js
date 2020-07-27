window.onload = function() {
	lax.setup() // init

	const updateLax = () => {
		lax.update(window.scrollY)
		window.requestAnimationFrame(updateLax)
	}

	window.requestAnimationFrame(updateLax)


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

}
