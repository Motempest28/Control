
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
    volume: 0.25,
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

  var igniteSFX = new Howl({
    src: ["sounds/sfx/ignite.mp3"],
    html5: true,
    volume: 1,
  });

  var knockingSFX = new Howl({
    src: ["sounds/sfx/knocking.mp3"],
    html5: true,
    volume: 1,
  });

  var dragingSFX = new Howl({
    src: ["sounds/sfx/dragging.mp3"],
    html5: true,
    volume: 1,
  });

  var doorOpeningSFX = new Howl({
    src: ["sounds/sfx/doorOpening.mp3"],
    html5: true,
    volume: 1,
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
    startingNote: true
}

//Bedroom items/Events
let bedroomItems = {
    bedframe: false,
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
            if(playerInventory.startingNote){
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
            if(currentLocation=="in_bedroom1"){
                $("<p>Quickly looking around the room I can see there is...</p>").hide().insertBefore("#placeholder").fadeIn(3000);
                $("<p>A pitch black <u><i><b>window</b></i></u>.</p>").hide().insertBefore("#placeholder").fadeIn(3000);
                $("<p>Old rustly <u><b><i>bedframe</b></i></u>... and behind it looks like a <i><b>door</i></b></p>").hide().insertBefore("#placeholder").fadeIn(3000);
            }
        }

        //when user types inspect
        else if(input.includes("inspect")){

            //inspect note
            if(input.includes("note") && playerInventory.startingNote == true){
                $("<p id='notes'>You are in danger! <br></p>").hide().insertBefore("#placeholder").fadeIn(3000);
                $("<p id='notes'>There is something about this place…  <br></p>").hide().insertBefore("#placeholder").fadeIn(3500);
                $("<p id='notes'>This cabin, it is not natural.  <br></p>").hide().insertBefore("#placeholder").fadeIn(4000);
                $("<p id='notes'>You must escape quickly.  <br></p>").hide().insertBefore("#placeholder").fadeIn(4500);
                $("<p id='notes'>I know you cannot trust me.  <br></p>").hide().insertBefore("#placeholder").fadeIn(5000);
                $("<p id='notes'>However, believe me whatever put you there has plans that are more nefarious then what I could think of… .  <br></p>").hide().insertBefore("#placeholder").fadeIn(5500);
                $("<p id='notes'>You’re probably thinking who is this guy?   <br></p>").hide().insertBefore("#placeholder").fadeIn(6000);
                $("<p id='notes'>Lets just say I’m your only ticket out of here bozo  <br></p>").hide().insertBefore("#placeholder").fadeIn(6500);
                $("<p id='notes'>I have limited control with how I can help you. BUT find other notes in this place and I can guide you out of here. Find other notes throughout the cabin. I see-  <br></p>").hide().insertBefore("#placeholder").fadeIn(6500);

                paperSFX.play();
                setTimeout(function(){
                    igniteSFX.play();
                    $("<p><i>Shit!</i> The note ignites in my hand as if something was trying to stop me from reading the rest of the note...<br></p>").hide().insertBefore("#placeholder").fadeIn(3000);
                }, 10000);
                

                //paper was destoryed
                playerInventory.startingNote = false;
            }

            else if(input.includes("window") && currentLocation=="in_bedroom1"){
                $("<p>Using all my might the window doesn't budge...</p>").hide().insertBefore("#placeholder").fadeIn(3000);
                setTimeout(function(){
                    knockingSFX.play();
                    $("<p><i>WHAT THE?!</i> The window starts knocking back at me following parts of the walls continue to knock like there are people all around me!</p>").hide().insertBefore("#placeholder").fadeIn(3000);
                    $("<p>Forget this place I get to get through that damn <i><b>door</i></b>!</p>").hide().insertBefore("#placeholder").fadeIn(3500);
                }, 3000)
            }

            else if(input.includes("bedframe") && currentLocation=="in_bedroom1"){
                $("<p>Slowly but surely. the bedframe is moved off of the <i><b>door</i></b> ...</p>").hide().insertBefore("#placeholder").fadeIn(3000);
                $("<p>Wondering if the bedframe was protecting me from what is outside this room. I know I'll just die here with no supplies to keep me going.</p>").hide().insertBefore("#placeholder").fadeIn(3500);
                dragingSFX.play();
                bedroomItems.bedframe = true;
            }
            
            else if(input.includes("door") && currentLocation=="in_bedroom1" && bedroomItems.bedframe == true){
                $("<p>...</p>").hide().insertBefore("#placeholder").fadeIn(3000);
                $("<p>....</p>").hide().insertBefore("#placeholder").fadeIn(4000);
                $("<p>......</p>").hide().insertBefore("#placeholder").fadeIn(5000);
                $("<p><i><b> Why the hell do all creepy ass doors have to sound like that...</b> </i></p>").hide().insertBefore("#placeholder").fadeIn(6000);
                doorOpeningSFX.play();
                currentLocation = "in_livingRoom"
                beenToLivingRoom = true;
                $("<p>Looks like I'm in a living room.</p>").hide().insertBefore("#placeholder").fadeIn(3000);
                $("<p>Interesting... </p>").hide().insertBefore("#placeholder").fadeIn(3500);
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








