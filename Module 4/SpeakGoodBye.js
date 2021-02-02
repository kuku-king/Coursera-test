(function (window) {
	var ByeSpeaker = {};
	var speakWord = "Good Bye";
	ByeSpeaker.speak = function (name) {
		console.log(speakWord + " " + name);
	}	
	window.ByeSpeaker = ByeSpeaker;
})(window);