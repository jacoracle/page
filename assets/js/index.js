// $(document).ready(function(){
//   });
  // Var
  var $switch = document.querySelector(".switch-mode");
  var $navbar = document.querySelector(".navbar");
  var $body = document.querySelector("#body");
  var $footer = document.querySelector(".footer");
  var $iconlight = document.querySelector("#icon-light");
  var $icondark = document.querySelector("#icon-dark");
  var $logotype = document.querySelector("#test-nav");
  var $burguer = document.querySelector(".burguer-navbar");
  var $bgmenu = document.querySelector(".background-menu");
  var $smallmenu = document.querySelector(".small-menu");
  var $smenuli = document.querySelector(".small-menu-ul");
  var $l1 = document.querySelector(".l1");
  var $l2 = document.querySelector(".l2");
  var $l3 = document.querySelector(".l3");
  var $l4 = document.querySelector(".l4");
  var $l5 = document.querySelector(".l5");
  var $l6 = document.querySelector(".l6");

// Dark mode
$switch.addEventListener('click', function () {
    if
    ($switch.classList.contains("light-mode")){

	    $switch.classList.remove("light-mode");
      $switch.classList.add("dark-mode");
      $navbar.classList.remove("navbar-light");
      $navbar.classList.add("navbar-dark");
      $body.classList.remove("body-light");
      $body.classList.add("body-dark");
      $footer.classList.remove("footer-light");
      $footer.classList.add("footer-dark");
      $iconlight.classList.remove("sun-in");
      $iconlight.classList.add("sun-out");
      $icondark.classList.remove("moon-out");
      $icondark.classList.add("moon-in");
      $smallmenu.classList.add("small-menu-dark");

	} else {

    $switch.classList.remove("dark-mode");
    $switch.classList.add("light-mode");
    $navbar.classList.remove("navbar-dark");
    $navbar.classList.add("navbar-light");
    $body.classList.remove("body-dark");
    $body.classList.add("body-light");
    $footer.classList.remove("footer-dark");
    $footer.classList.add("footer-light");
    $iconlight.classList.remove("sun-out");
    $iconlight.classList.add("sun-in");
    $icondark.classList.remove("moon-in");
    $icondark.classList.add("moon-out");
    $smallmenu.classList.remove("small-menu-dark");

	}
});

// Samall Menu
$burguer.addEventListener('click', function () {
  $bgmenu.classList.add("background-menu-show");
  $body.classList.add("body-overflow");
  $smallmenu.classList.remove("small-menu-hide");
  $smallmenu.classList.add("small-menu-show");

});

$bgmenu.addEventListener('click', function () {
  $bgmenu.classList.remove("background-menu-show");
  $body.classList.remove("body-overflow");
  $smallmenu.classList.add("small-menu-hide");
  $smallmenu.classList.remove("small-menu-show");
});
// Links
$l1.addEventListener('click', function () {
  $bgmenu.classList.remove("background-menu-show");
  $body.classList.remove("body-overflow");
  $smallmenu.classList.add("small-menu-hide");
  $smallmenu.classList.remove("small-menu-show");
});
$l2.addEventListener('click', function () {
  $bgmenu.classList.remove("background-menu-show");
  $body.classList.remove("body-overflow");
  $smallmenu.classList.add("small-menu-hide");
  $smallmenu.classList.remove("small-menu-show");
});
$l3.addEventListener('click', function () {
  $bgmenu.classList.remove("background-menu-show");
  $body.classList.remove("body-overflow");
  $smallmenu.classList.add("small-menu-hide");
  $smallmenu.classList.remove("small-menu-show");
});
$l4.addEventListener('click', function () {
  $bgmenu.classList.remove("background-menu-show");
  $body.classList.remove("body-overflow");
  $smallmenu.classList.add("small-menu-hide");
  $smallmenu.classList.remove("small-menu-show");
});
$l5.addEventListener('click', function () {
  $bgmenu.classList.remove("background-menu-show");
  $body.classList.remove("body-overflow");
  $smallmenu.classList.add("small-menu-hide");
  $smallmenu.classList.remove("small-menu-show");
});
$l6.addEventListener('click', function () {
  $bgmenu.classList.remove("background-menu-show");
  $body.classList.remove("body-overflow");
  $smallmenu.classList.add("small-menu-hide");
  $smallmenu.classList.remove("small-menu-show");
});

// Time Out Imagotype animated
setTimeout(function(){
  $logotype.classList.add("type-svg-animated");
}, 3000);
setTimeout(function(){
  $logotype.classList.remove("type-svg-animated");
}, 13000);
setTimeout(function(){
  $logotype.classList.add("type-svg-animated");
}, 40000);
setTimeout(function(){
  $logotype.classList.remove("type-svg-animated");
}, 50000);
