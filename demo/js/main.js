var vidShowAndTell = document.querySelector('video');
// Start playing the video as soon as the user scrolls
var scrollAction = function() {
  window.removeEventListener('scroll', scrollAction);
  vidShowAndTell.play();
};
window.addEventListener('scroll', scrollAction);

// Hide old addAll code sample when clicked
var elCodeAddAll = document.getElementById("code-basic-addall");
elCodeAddAll.addEventListener("click", function(e) {
  elCodeAddAll.parentNode.removeChild(elCodeAddAll);
}, false);


// ugh... mobile hack... forgive me.
if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
  vidShowAndTell.poster = "img/cache.adderall_demo_play.png"
}
