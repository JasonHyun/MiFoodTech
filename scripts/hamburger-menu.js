$("#hamburger").click(function() {
  $("#menu").removeClass("hidden-m");
  $("#close").removeClass("hidden-m");
  $('#hamburger').addClass("hidden-m");
});

$("#close").click(function() {
  $("#menu").addClass("hidden-m");
  $("#close").addClass("hidden-m");
  $('#hamburger').removeClass("hidden-m");
});
