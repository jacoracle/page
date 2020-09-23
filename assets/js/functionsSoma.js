// Internal page
// Add class scroll element
  $(window).scroll(function() {
      var scrolle = $(window).scrollTop();
      if (scrolle >= 550) {
          $(".btn-back").addClass("btn-backScroll");
          $(".miniheader-scroll-soma").addClass("miniheader-scrollActive");
      }
      else {
        $(".btn-back").removeClass("btn-backScroll");
        $(".miniheader-scroll-soma").removeClass("miniheader-scrollActive");
      }
  });

  $('.tsh-item').click(function () {
    if ($(this).hasClass('tsh-2')) {
        $('.tsh-item').removeClass('tshi-active');
        $(this).addClass('tshi-active');
        $('.ts-text1').fadeOut(200);
        $('.ts-text2').fadeIn(200).delay(200);
    } else {
        $('.tsh-item').removeClass('tshi-active');
        $(this).addClass('tshi-active');
        $('.ts-text2').fadeOut(200);
        $('.ts-text1').fadeIn(200).delay(200);
    }
});
