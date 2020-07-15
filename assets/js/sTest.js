$(document).ready(function() {
  $(window).scroll(function() {
    if ($(document).scrollTop() > 50) {
      $(".co").addClass("testco");
    } else {
      $(".co").removeClass("testco");
    }
  });
});
