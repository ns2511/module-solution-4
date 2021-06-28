(function () {

    var names = ["Yaakov", "john", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
    for (var i = 0; i < names.length; i++) {
       // console.log(names[i])

        var firstLetter = names[i].charAt(0).toLowerCase();
        if (firstLetter === 'j') {
            console.log(byeSpeaker.speakWord + " " +names[i] )
          } else {
            console.log(helloSpeaker.speakWord + " " + names[i]);
          }
        }
})();    
