var images = ['image/001-origami.png',
             'image/002-fox.png',
             'image/003-pinwheel.png',
             'image/004-origami-1.png'];
var x = -1;

function nextImage() {
  x = (x === images.length - 1) ? 0 : x + 1;
  document.getElementById('ori').src = images[x];
}

function startTimer() {
  setInterval(nextImage, 3300);
  slide();
  parallax();
}

function slide() {
  document.getElementById('top1').style.color = "white";
}

function parallax() {
	var s = document.getElementById("floater");
  var yPos = 0 - window.pageYOffset/4;
  s.style.top = 50 + yPos + "%";
}

window.addEventListener("scroll", function(){
	parallax();
});
