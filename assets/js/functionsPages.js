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
