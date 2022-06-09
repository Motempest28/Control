
//****************Testing***************************
//sound import and useage reference
//importing - https://www.youtube.com/watch?v=hn7MhPt24L4
//usage - https://github.com/goldfire/howler.js/blob/master/README.md#quick-start
// var sound = new Howl({
//     src: ['/you.mp3']
//   });




function getVolume(){
    var x = document.getElementById("soundVolume").value;
    document.getElementById("demo2").innerHTML = x;
    x = x / 100;
    alert(x);
    sound2.volume(x);
}


var sound2 = new Howl({
    src: ["sounds/you.mp3", "sounds/you.ogg"],
    html5: true,
    volume: 0.5,
  });


function playMe(){
      sound2.play();
      document.getElementById("demo").innerHTML = "YOU CLICKED ME!";
      
  }

// document.getElementById("demo2").onclick = function(){alert("Hello World!")};
document.getElementById("demo").onclick = function() {playMe()};
document.getElementById("soundcheck").onclick = function() {getVolume()};


//input field testing
document.getElementById("myButton").onclick = function(){
    var userText = document.getElementById("myText").value;
    console.log(userText);
    userText = document.getElementById("myText").value = "";
    console.log(userText);
}

//*******************************Real Code************************************* */

//Create variables to track items

//let volume = 