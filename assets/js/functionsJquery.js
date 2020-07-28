  $(document).ready(function() {
    // Scroll
    $('body').smoothScroll({
      delegateSelector: '.aScroll'
    });

    $('p.subnav a').click(function(event) {
      event.preventDefault();
      var link = this;
      $.smoothScroll({
        scrollTarget: link.hash
      });
    });

    // Autotype
    setTimeout(function() {
        $('#typed').typed({
          strings: [
            "Ayudamos a dar vida a tus grandes ideas de negocio mediante software inteligente, apis flexibles y análisis de datos que te ayuden a tomar mejores decisiones."
          ],
          typeSpeed: 5,
          startDelay: 1000,
          backDelay: 3000,
          showCursor: false,
          loop: true,
          loopCount: false,
          waitUntilVisible: true,
          contentType: 'html'
        });
      }, 500);

  });
