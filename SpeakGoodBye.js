

var byeSpeaker = {};

(function (window) {
var speakWord = "goodbye";


 byeSpeaker.speak = function(name) {
  console.log(speakWord + " " + name);
}
window.byeSpeaker = byeSpeaker;
})(window);

