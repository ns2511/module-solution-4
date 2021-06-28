(function( window){
    var helloSpeaker = {}

    helloSpeaker.speakWord = "Hello";
    helloSpeaker.speak = function(name) {
    console.log(helloSpeaker.speakWord + " " + helloSpeaker.name);
    } 

    window.helloSpeaker = helloSpeaker
})(window);
