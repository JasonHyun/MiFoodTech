const SLIDES = $(".slides > .slide");
const DOTS =$(".dots>.dot");

/* See "show next slide snippet" to use */
function nextSlide() {
  let nextNum = SLIDES.index($(".slides > .slide:not(.hidden)")) + 1 + 1; /* +1 for 0-index array */
  if (nextNum > SLIDES.length) {
    nextNum = 1;
  }
  showSlide(nextNum);

}

/* See "show previous slide snippet" to use */
function prevSlide() {
  let prevNum = SLIDES.index($(".slides > .slide:not(.hidden)")) - 1 + 1; /* +1 for 0-index array */
  if (prevNum <= 0) {
    prevNum = SLIDES.length;
  }
  showSlide(prevNum);
}

/* See "show slide X snippet" to use */
function showSlide(num) {
  let index = num - 1;
  let currentSlide = SLIDES.eq(index);
  let currentDot = DOTS.eq(index);

  SLIDES.addClass("hidden");
  currentSlide.removeClass('hidden');
  DOTS.removeClass("active");
  currentDot.addClass("active");
}

setInterval(function() {
  nextSlide();
}, 5000);

$("#right").click(function() {
  nextSlide();
});

$("#left").click(function() {
  prevSlide();
});

$("#dot1").click(function(){
  showSlide(1);
});

$("#dot2").click(function(){
  showSlide(2);
});

$("#dot3").click(function(){
  showSlide(3);
});
