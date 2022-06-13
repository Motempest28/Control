
//****************Testing***************************
//sound import and useage reference
//importing - https://www.youtube.com/watch?v=hn7MhPt24L4
//usage - https://github.com/goldfire/howler.js/blob/master/README.md#quick-start
// var sound = new Howl({
//     src: ['/you.mp3']
//   });




// function getVolume(){
//     var x = document.getElementById("soundVolume").value;
//     document.getElementById("demo2").innerHTML = x;
//     x = x / 100;
//     alert(x);
//     sound2.volume(x);
// }


// var sound2 = new Howl({
//     src: ["sounds/you.mp3", "sounds/you.ogg"],
//     html5: true,
//     volume: 0.5,
//   });


// function playMe(){
//       sound2.play();
//       document.getElementById("demo").innerHTML = "YOU CLICKED ME!";
      
//   }

// // document.getElementById("demo2").onclick = function(){alert("Hello World!")};
// document.getElementById("demo").onclick = function() {playMe()};
// document.getElementById("soundcheck").onclick = function() {getVolume()};


// //input field testing
// document.getElementById("myButton").onclick = function(){
//     var userText = document.getElementById("myText").value;
//     console.log(userText);
//     userText = document.getElementById("myText").value = "";
//     console.log(userText);
// }

//*******************************official Code************************************* */

//Create variables to track items

//Universal tools
//let volume = 


//Scene 1 variables - Cabin

//Track current location of the player
let currentLocation = "in_bedroom1";

//Player inventory
let playerInventory = {
    knife: false,
    hammer: false,
    nails: false,
    box: false,
    basementKey: false,

}

//Track all the rooms where the user has been and have a basic layout of the map of this scene

//first floor
let beenToBedroom = true;
let beenToLivingRoom = false;
let beenToLivingRoomCloset = false;
let beenToKitchen = false;

//Lower floor entrance and transition and basement
let beenToBasementEntrance = false;
let beenToBasementStarwell = false;
let beenToBasementFloor = false;

//Front door event trigger
let beenToEntranceHallway = false;

//Second floor
let beenToSecondFloorStairwell = false;
let beenToSecondFloorHallway = false;
let beenToUpperBedroom = false;


//Game Logic
$(document).ready(function() {
    //fade in the content
    //fade reference: https://www.w3schools.com/jquery/jquery_fade.asp
    //fade in error reference: https://stackoverflow.com/questions/3398882/jquery-fadein-not-working
    $("#content").hide().fadeIn(3000);

    $("form").submit(function() {

        
        var input = $("#command_line").val();

        if(input.includes("help")){
            $("#message_help").clone().insertBefore("#placeholder").fadeIn(1000);
        }

        $("#command_line").val("");



    });
});





