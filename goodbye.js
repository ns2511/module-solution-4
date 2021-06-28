
(function(window) {
	var speakWord = "Good Bye";
	var goodbye = function (name) {
  		console.log(speakWord + " " + name);
	}
	
	window.goodbye = goodbye;

})(window);