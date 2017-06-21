$(function() {
  $(".button").click(function() {

    var $animation = $("#boom").data("animation");

    MotionUI.animateIn($("#boom"), $animation);

  });
});