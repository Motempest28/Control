
//****************Sounds***************************
//sound import and useage reference
//importing - https://www.youtube.com/watch?v=hn7MhPt24L4
//usage - https://github.com/goldfire/howler.js/blob/master/README.md#quick-start
var sound = new Howl({
    src: ['/you.mp3']
  });

  var sound2 = new Howl({
    src: ['/sounds/you.mp3']
  });
  function playMe(){
      sound2.play();
  }

// document.getElementById("demo2").onclick = function(){alert("Hello World!")};
document.getElementById("demo").onclick = function() {playMe()};

function myFunction() {
  document.getElementById("demo").innerHTML = "YOU CLICKED ME!";
}