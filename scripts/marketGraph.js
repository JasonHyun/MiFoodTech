//I wanted to make it so that clicking on the button would take the user to where the textbox is. I found the scrollIntoView function online and wanted to read about how to use it. I read the documentation on the Mozilla API linked here: https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView
//After reading this page, I realized that I would need a way to get the Element so I looked up "get element javascript" I wanted to avoid using W3 schools so I used the Mozilla API again: https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById
//All of the code below is my own work that I understood through reading documentation. - Claire Jiang


var tamBox = document.getElementById("TAMbox");
var samBox = document.getElementById("SAMbox");
var somBox = document.getElementById("SOMbox");
var diagramTop = document.getElementById("Diagram");


$("#TAM").click(function() {
  $("#TAMtext").removeClass("hidden-text");
  $("#TAMclose").removeClass("hidden-text");
  tamBox.scrollIntoView(false);s
});

$("#TAMclose").click(function() {
  $("#TAMtext").addClass("hidden-text");
  $("#TAMclose").addClass("hidden-text");
  diagramTop.scrollIntoView();
});

$("#SAM").click(function() {
  $("#SAMtext").removeClass("hidden-text");
  $("#SAMclose").removeClass("hidden-text");
  samBox.scrollIntoView(false);
});

$("#SAMclose").click(function() {
  $("#SAMtext").addClass("hidden-text");
  $("#SAMclose").addClass("hidden-text");
  diagramTop.scrollIntoView();
});

$("#SOM").click(function() {
  $("#SOMtext").removeClass("hidden-text");
  $("#SOMclose").removeClass("hidden-text");
  somBox.scrollIntoView(false);
});

$("#SOMclose").click(function() {
  $("#SOMtext").addClass("hidden-text");
  $("#SOMclose").addClass("hidden-text");
  diagramTop.scrollIntoView();
});
