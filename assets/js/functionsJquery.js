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

// Back to top
  if ($('#back-to-top').length) {
      var scrollTrigger = 2000, // px
          backToTop = function () {
              var scrollTop = $(window).scrollTop();
              if (scrollTop > scrollTrigger) {
                  $('#back-to-top').addClass('show');
              } else {
                  $('#back-to-top').removeClass('show');
              }
          };
      backToTop();
      $(window).on('scroll', function () {
          backToTop();
      });
      $('#back-to-top').on('click', function (e) {
          e.preventDefault();
          $('html,body').stop().animate({
              scrollTop: 0
          }, 700);
      });
  }

// Internal page
// Add class scroll element
  $(window).scroll(function() {
      var scrolle = $(window).scrollTop();
      if (scrolle >= 550) {
          $(".btn-back").addClass("btn-backScroll");
          $(".miniheader-scroll").addClass("miniheader-scrollActive");
      }
      else {
        $(".btn-back").removeClass("btn-backScroll");
        $(".miniheader-scroll").removeClass("miniheader-scrollActive");
      }
  });
