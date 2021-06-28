(function () {

    var names = ["Naresh", "Jolly", "Justin", "Jason", "walker", "Frank", "Laura", "Parkar", "Loki", "Jim"];
    
    for (var i = 0; i < names.length; i++) {
      var firstLetter = names[i].charAt(0).toLowerCase();
    
      if (firstLetter === 'j') {
        goodbye(names[i]);
      }
      else {
        hello(names[i]);
      }
    }
    
    })();