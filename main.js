document.addEventListener("DOMContentLoaded", function(event) {

  var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  var counts = {};
  
  var statistics = document.getElementById('statistics-part');
  
  letters.map(function(letter){
    statistics.innerHTML = statistics.innerHTML + "<p id='letter-"+letter+"'>" + letter + ": </p>";
    counts[letter] = 0;
  });

  var input = document.getElementById('main-input');
  //input.bind("input propertychange", update);
  input.oninput = update;

  function update(){
    // reset counts
    letters.map(function(letter){
      counts[letter] = 0;
    });
    // count letters
    var text = input.value;
    for(var i = 0; i < text.length; i++){
      counts[text[i]] += 1;
    }
    // display
    letters.map(function(letter){
      var percentage = (counts[letter]/text.length)*100;
      var percString = percentage.toString().substring(0, 4) + " %";
      var nextLetter = document.getElementById('letter-'+letter);
      nextLetter.innerHTML = letter + ": " + percString;
    });
  }

});