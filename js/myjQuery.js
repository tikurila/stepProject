$(document).ready(function () {
  $(".close").hide();
  $("#btnload").click(function () {
    $(".close").slideToggle("slow");
    $("#btnload").css("display", "none");
  });
});

$(".slider-for").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: ".slider-nav",
});
$(".slider-nav").slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  asNavFor: ".slider-for",
  dots: false,
  centerMode: false,
  focusOnSelect: true,
  variableWidth: true,
});
