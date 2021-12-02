// when name of member is clicked:
//     remove hidden from banner of headshot member
// when close icon clicked:
//     add hidden to banner of headshot member


$("#MiYanName").click(function() {
  $("#founder").removeClass("hidden");
})
$("#JimmyName").click(function() {
  $("#eng1").removeClass("hidden");
})
$("#MohktarName").click(function() {
  $("#eng2").removeClass("hidden");
})
$("#EliName").click(function() {
  $("#eng3").removeClass("hidden");
})
$("#JackName").click(function() {
  $("#mng1").removeClass("hidden");
})
$("#ZilianName").click(function() {
  $("#mng2").removeClass("hidden");
})
$("#YingtongName").click(function() {
  $("#mng3").removeClass("hidden");
})
$("#RaulName").click(function() {
  $("#mng4").removeClass("hidden");
})
$(".close").click(function() {
  $("#founder").addClass("hidden");
  $("#eng1").addClass("hidden");
  $("#eng2").addClass("hidden");
  $("#eng3").addClass("hidden");
  $("#mng1").addClass("hidden");
  $("#mng2").addClass("hidden");
  $("#mng3").addClass("hidden");
  $("#mng4").addClass("hidden");


})
