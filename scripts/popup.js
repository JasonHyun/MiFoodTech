// Reference: https://www.w3schools.com/howto/howto_css_modals.asp
// Because there is no code snippet on how to implement popup banners from the resource handout, I referred to an online tutorial.
// The code written is my own work.
var modal1 = document.getElementById("founder");
var span1 = document.getElementsByClassName("close1")[0];

$("#MiYanName").click(function() {
  modal1.style.display = "block";
})

span1.onclick = function() {
  modal1.style.display = "none";
}

var modal2 = document.getElementById("eng1")
var span2 = document.getElementsByClassName("close2")[0];


$("#JimmyName").click(function() {
  modal2.style.display = "block";
})

span2.onclick = function() {
  modal2.style.display = "none";
}

var modal3 = document.getElementById("eng2")
var span3 = document.getElementsByClassName("close3")[0];


$("#MohktarName").click(function() {
  modal3.style.display = "block";
})

span3.onclick = function() {
  modal3.style.display = "none";
}

var modal4 = document.getElementById("eng3")
var span4 = document.getElementsByClassName("close4")[0];


$("#EliName").click(function() {
  modal4.style.display = "block";
})

span4.onclick = function() {
  modal4.style.display = "none";
}

var modal5 = document.getElementById("mng1")
var span5 = document.getElementsByClassName("close5")[0];


$("#JackName").click(function() {
  modal5.style.display = "block";
})

span5.onclick = function() {
  modal5.style.display = "none";
}

var modal6 = document.getElementById("mng2")
var span6 = document.getElementsByClassName("close6")[0];


$("#ZilianName").click(function() {
  modal6.style.display = "block";
})

span6.onclick = function() {
  modal6.style.display = "none";
}

var modal7 = document.getElementById("mng3")
var span7 = document.getElementsByClassName("close7")[0];


$("#YingtongName").click(function() {
  modal7.style.display = "block";
})

span7.onclick = function() {
  modal7.style.display = "none";
}

var modal8 = document.getElementById("mng4")
var span8 = document.getElementsByClassName("close8")[0];


$("#RaulName").click(function() {
  modal8.style.display = "block";
})

span8.onclick = function() {
  modal8.style.display = "none";
}
