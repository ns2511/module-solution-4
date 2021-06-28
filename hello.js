(function(window) {
	var speakWord = "Hello";
	var hello = function (name) {
		console.log(speakWord + " " + name);
	}

	window.hello = hello;

})(window);