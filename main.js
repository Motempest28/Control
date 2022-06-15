
//****************Testing***************************
//sound import and useage reference
//importing - https://www.youtube.com/watch?v=hn7MhPt24L4
//usage - https://github.com/goldfire/howler.js/blob/master/README.md#quick-start
// var sound = new Howl({
//     src: ['/you.mp3']
//   });




// function getVolume(){
//     var volumeValue = document.getElementById("soundVolume").value;
//     document.getElementById("demo2").innerHTML = volumeValue;
//     volumeValue = volumeValue / 100;
//     alert(volumeValue);
//     sound2.volume(volumeValue);
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

//+++++++++++++++++++++++++++++Sound section++++++++++++++++++++++++++++++++++++++

//Volume Controls
var volumeControl = document.getElementById("soundVolume");
volumeControl.onchange = function(){getVolume()};

function getVolume(){
    console.log("the function was ran")
    var x = document.getElementById("soundVolume").value;
    x = x / 100;
    backgroundNoise.volume(x);
}

var backgroundNoise = new Howl({
    src: ["sounds/background/cabin-background-sounds.mp3"],
    html5: true,
    volume: 0.5,
    loop: true
  });

  var staticSFX = new Howl({
    src: ["sounds/sfx/static.mp3"],
    html5: true,
    volume: 0.75,
  });

  var paperSFX = new Howl({
    src: ["sounds/sfx/paper.mp3"],
    html5: true,
    volume: 0.75,
  });


//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//Scene 1 variables - Cabin

//Boolean to check if the player has started the game to start audio <work around from google chrome not allowing auto play>
let gameStart = true;
//Track current location of the player
let currentLocation = "in_bedroom1";
let currentLocationDisplay;



//Player inventory
let playerInventory = {
    knife: false,
    hammer: false,
    nails: false,
    box: false,
    basementKey: false,
    note: true
}

//Bedroom items/Events
let bedroomItems = {
    //After player gets out of starting area and types help
    breakFree: false,
    drawer: false,
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


//testing upload


//Game Logic
$(document).ready(function() {
    //fade in the content
    //fade reference: https://www.w3schools.com/jquery/jquery_fade.asp
    //fade in error reference: https://stackoverflow.com/questions/3398882/jquery-fadein-not-working
    $("#content").hide().fadeIn(3000);

    //hide the quick time choices unhide later for certain fight or flight scenes
    $("#command_option_holder").hide();

    //audio not playing fix: https://github.com/goldfire/howler.js/issues/1110
    Howler.stop();
    Howler.unload();
    
    // alert("audio plays");
    $("form").submit(function() {
        
        

        //check to see if game has started if so then play audio 
        if(gameStart){
            backgroundNoise.play();
            //After user has submitted a command change the gameStart to false to prevent new instances
            gameStart = false;
        };
        
        //Get user's command
        var input = $("#command_line").val();

        //when user types help
        if(input.includes("help")){
            staticSFX.play();
            $("<p><br>Static hits you out of no where and you start to remember...<br></p>").hide().insertBefore("#placeholder").fadeIn(3000);
            $("<p>Type <b><i><u>Help</u></i></b> to remember your actions...<br></p>").hide().insertBefore("#placeholder").fadeIn(4000);
            $("<p>Type <b><i><u>Inventory</u></i></b> to check your belongings...<br></p>").hide().insertBefore("#placeholder").fadeIn(4500);
            $("<p>Type <b><i><u>Scan</u></i></b> to scan the room...<br></p>").hide().insertBefore("#placeholder").fadeIn(5000);
            $("<p>Type <b><i><u>Inspect 'Object'</u></i></b> to inspect something in the room or something in the inventory...<br></p>").hide().insertBefore("#placeholder").fadeIn(5500);           
            $("<p>Type <b><i><u>Enter 'location'</u></i></b> to move to the next location...<br></p>").hide().insertBefore("#placeholder").fadeIn(6000);
            $("<p><i>God this doesn't make any sense. What the hell am I thinking... Wait was I the one talking?</i><br></p>").hide().insertBefore("#placeholder").fadeIn(6500);         
        }

        //when user types inventory
        else if(input.includes("inventory")){

            //knife
            if(playerInventory.knife){
                pKnife = "-Knife <br>";
            }
            else{
                 pKnife = "";
            }

            //basement key
            if(playerInventory.basementKey){
                pBasementKey = "-Basement Key <br>";
            }
            else{
                pBasementKey = "";
            }

            //note
            if(playerInventory.note){
                pNote = "-Strange Note <br>";
            }
            else{
                pNote = "";
            }

            //if the user has nothing
            if(playerInventory.knife == false && playerInventory.basementKey == false && playerInventory.note == false){
                $("<p>There is nothing I'm holding...</p>").hide().insertBefore("#placeholder").fadeIn(3000);
            }
            //if the user has something
            else{
                $("<p>Here is my inventory... <br>"+ pKnife + pBasementKey + pNote +"</p>").hide().insertBefore("#placeholder").fadeIn(3000);
            }
        }

        //when user types scan
        else if(input.includes("scan")){

        }

        //when user types inspect
        else if(input.includes("inspect")){

            //inspect note
            if(input.includes("note") && playerInventory.note == true){
                $("<p>Note testing</p>").hide().insertBefore("#placeholder").fadeIn(3000);
                paperSFX.play();

                //paper was destoryed
                playerInventory.note = false;
            }

            //inspect was not paired with a existing item or object
            else{
                $("<p>What?... What was I inspecting again? ugh... I should check again to see what was I inspecting...</p>").hide().insertBefore("#placeholder").fadeIn(3000);
                $("<p>Something in my <u>Inventory</u> perhaps? or was it something in this room?... I should <u>scan<u> to check...</p>").hide().insertBefore("#placeholder").fadeIn(4000);
            }

        }

        else{
            $("<p>I... what was I doing? <i>sigh</i> I guess I need to ask for help again to remember what I can do...</p>").hide().insertBefore("#placeholder").fadeIn(3000);
        }
        //after a function has been run clear the textbox
        
        $("#command_line").val("");
        



    });
    
});








