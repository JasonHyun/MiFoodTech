// Reference: https://www.w3schools.com/howto/howto_css_modals.asp
// Because there is no code snippet on how to implement popup banners from the resource handout, I referred to an online tutorial.
// The code written is my own work.
var modal = document.getElementById("founder");
var span = document.getElementsByClassName("close")[0];

$("#MiYanName").click(function() {
  modal.style.display = "block";
})

span.onclick = function() {
  modal.style.display = "none";
}
