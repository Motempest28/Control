
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
    volume: 0.40,
    loop: true
  });

  var darkNoise = new Howl({
    src: ["sounds/background/dark.mp3"],
    html5: true,
    volume: 0.75,
    loop: true
  });

  var officeNoise = new Howl({
    src: ["sounds/background/office.mp3"],
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

  var walkingOnWoodSFX = new Howl({
    src: ["sounds/sfx/walkingOnWood.mp3"],
    html5: true,
    volume: 1,
  });

  var crtBreakSFX = new Howl({
    src: ["sounds/sfx/crtBreak.mp3"],
    html5: true,
    volume: 1,
  });

  var static2SFX = new Howl({
    src: ["sounds/sfx/static2.mp3"],
    html5: true,
    volume: 1,
  });

  var lockedDoorSFX = new Howl({
    src: ["sounds/sfx/lockedDoor.mp3"],
    html5: true,
    volume: 1,
  });

  var doorKickSFX = new Howl({
    src: ["sounds/sfx/doorKick1.mp3"],
    html5: true,
    volume: 1,
  });

  var doorKickFallSFX = new Howl({
    src: ["sounds/sfx/doorKickFall.mp3"],
    html5: true,
    volume: 1,
  });

  var doorBreakSFX = new Howl({
    src: ["sounds/sfx/doorBreak.mp3"],
    html5: true,
    volume: 1,
  });

  var spineShockSFX = new Howl({
    src: ["sounds/sfx/spineShock.mp3"],
    html5: true,
    volume: 1,
  });

  var doorMessage1VO = new Howl({
    src: ["sounds/messages/doorMessage1.mp3"],
    html5: true,
    volume: 1,
  });

  var doorMessage2VO = new Howl({
    src: ["sounds/messages/doorMessage2.mp3"],
    html5: true,
    volume: 1,
  });

  var doorMessage3VO = new Howl({
    src: ["sounds/messages/doorMessage3.mp3"],
    html5: true,
    volume: 1,
  });

  var tvMessageVO = new Howl({
    src: ["sounds/messages/tvMessage.mp3"],
    html5: true,
    volume: 1,
  });


//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//Scene variables - Cabin

//for auto scroll
const bottom = document.getElementById("bottom")

//Boolean to check if the player has started the game to start audio <work around from google chrome not allowing auto play>
let gameStart = true;
//Track current location of the player
let currentLocation = "in_bedroom1";
let currentLocationDisplay;

//Ending Triggers
let gameEndings = {
    ending1: false,
    ending2: false,
    ending3: false,
    ending4: false
}


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

//Living room items/Events
let livingRoomItems = {
    tv: false,
    drawer: false
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
let frontDoorCount = 0;

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
                $("<p>Quickly looking around the bedroom I can see there is...</p>").hide().insertBefore("#placeholder").fadeIn(3000);
                $("<p>A pitch black <u><i><b>window</b></i></u>.</p>").hide().insertBefore("#placeholder").fadeIn(3000);
                $("<p>Old rustly <u><b><i>bedframe</b></i></u>... and behind it looks like a <i><b>door</i></b></p>").hide().insertBefore("#placeholder").fadeIn(3000);
            }
            else if(currentLocation=="in_livingRoom"){
                $("<p>Looks like im in the <b><u>Living room</u></b></p>").hide().insertBefore("#placeholder").fadeIn(3000);
                $("<p>Walking around the room there seems to be a <b><u>Kitchen</u></b> I can enter in.</p>").hide().insertBefore("#placeholder").fadeIn(3000);
                $("<p>And... there looks like to be a <b><u>Stairs</u></b> to the second floor I can enter in.</p>").hide().insertBefore("#placeholder").fadeIn(3500);
                walkingOnWoodSFX.play();

                if(livingRoomItems.tv == false){
                    $("<p>Oh there is a <b><u>TV</u></b> I can check out.</p>").hide().insertBefore("#placeholder").fadeIn(4000);
                }
                if(livingRoomItems.drawer == false){
                    $("<p>Looks to be a <b><u>drawer</u></b> I can check out.</p>").hide().insertBefore("#placeholder").fadeIn(4500);
                }

                $("<p>OH SNAPS the <b><u>front door</u></b>! lets inspect it out and get the heck out of here.</p>").hide().insertBefore("#placeholder").fadeIn(5000);
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
                    $("<p>Forget this place I get to get through that damn <i><b>door</b></i>!</p>").hide().insertBefore("#placeholder").fadeIn(3500);
                }, 3000)
            }

            else if(input.includes("bedframe") && currentLocation=="in_bedroom1"){
                $("<p>Slowly but surely. the bedframe is moved off of the <u><i><b>door</i></b></u>...</p>").hide().insertBefore("#placeholder").fadeIn(3000);
                $("<p>Wondering if the bedframe was protecting me from what is outside this room. I know I'll just die here with no supplies to keep me going. Lets inspect the door and find out where the hell I am</p>").hide().insertBefore("#placeholder").fadeIn(3500);
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
                $("<p>Looks like I'm in a living room.</p>").hide().insertBefore("#placeholder").fadeIn(6500);
                $("<p>Interesting... </p>").hide().insertBefore("#placeholder").fadeIn(7000);
            }

            else if(input.includes("tv") && currentLocation=="in_livingRoom" && livingRoomItems.tv == false){
                $("<p>The <i><b>TV</i></b> tuns on with a loud static and then a voice comes through...</p>").hide().insertBefore("#placeholder").fadeIn(3500);
                staticSFX.on('end',function(){
                    tvMessageVO.play();
                    $("#command_line").hide();
                });
                staticSFX.play();
                
                setTimeout(function(){
                    $("#command_line").hide().fadeIn(4000);
                    static2SFX.on('end',function(){
                        crtBreakSFX.play();
                        $("<p><i>SHIT</i> Quickly backing away from the TV after it somehow imploded</p>").hide().insertBefore("#placeholder").fadeIn(3000);
                        $("<p>Who the heck is this guy? What is this place really man...</p>").hide().insertBefore("#placeholder").fadeIn(3500);
                        if(playerInventory.startingNote == true){
                            $("<p>What note is he talking about? I should check my inventory... He might have slipped it in there when I was knocked out...</p>").hide().insertBefore("#placeholder").fadeIn(4500);
                        }
                        $("<p>So... options are <i><u>Basement</u></i>... yikes that doesn't sound fun...</p>").hide().insertBefore("#placeholder").fadeIn(5000);
                        $("<p>Up the <i><u>stairs</u></i>...</p>").hide().insertBefore("#placeholder").fadeIn(5500);
                        $("<p>And then we have the <i><u>front Door</u></i>...</p>").hide().insertBefore("#placeholder").fadeIn(6000);
                        $("<p>We could be a rebel and run out that door... Thing looks like a running head start would break it down. haha</p>").hide().insertBefore("#placeholder").fadeIn(6500);
                        
                    });
                    static2SFX.play();
                }, 34000)
                livingRoomItems.tv = true;
            }

            else if(input.includes("door") && currentLocation=="in_livingRoom"){
                if(frontDoorCount == 0){
                    lockedDoorSFX.play();
                    darkNoise.play();
                    $("<p>...</p>").hide().insertBefore("#placeholder").fadeIn(3000);
                    $("<p>Attemping to turn the knob the door doesn't budge but it feels weak... </p>").hide().insertBefore("#placeholder").fadeIn(3500);
                    $("<p>I could try again?...</p>").hide().insertBefore("#placeholder").fadeIn(3500);
                    frontDoorCount++;
                }
                else if(frontDoorCount == 1){
                    $("#command_line").hide();
                    doorMessage1VO.play();
                    $("<p><b>JESUS H CHRIST</b> Where the hell is that voice coming from?</p>").hide().insertBefore("#placeholder").fadeIn(3000);
                    $("<p>Quickly checking behind and appears to be no one there...</p>").hide().insertBefore("#placeholder").fadeIn(3000);
                    $("<p>Ain't no better time than the present!</p>").hide().insertBefore("#placeholder").fadeIn(9000);
                    $("<p><i>you then proceed to kick the door.</p>").hide().insertBefore("#placeholder").fadeIn(9000);
                    setTimeout(function(){
                        doorKickSFX.play();
                        $("<p><i>Door proceeds to show damage!</p>").hide().insertBefore("#placeholder").fadeIn(4000);
                        $("#command_line").hide().fadeIn(4000);
                        bottom.scrollIntoView({behavior:"smooth"});
                    },9000)
                    frontDoorCount++;   
                }
                else if(frontDoorCount == 2){
                    $("#command_line").hide();
                    doorKickFallSFX.play();
                    $("<p><b>OOF</b></p>").hide().insertBefore("#placeholder").fadeIn(3000);
                    $("<p>After giving it a good kick the door has one of it's hinges broken!</p>").hide().insertBefore("#placeholder").fadeIn(3000);
                    $("<p>Damn tho... how long have I been here to make me fall back from a kick.</p>").hide().insertBefore("#placeholder").fadeIn(3500);
                    $("<p>But looks like one more kick and I'm outta here!</p>").hide().insertBefore("#placeholder").fadeIn(4000);
                    setTimeout(function(){
                        doorMessage2VO.play();
                        $("<p><i>uh.... what?</i> I can't tell whats happening anymore am I in a simlulation of some kind?</p>").hide().insertBefore("#placeholder").fadeIn(4000);
                        $("<p><b>Doesn't matter lets get out of here once and for all!</b></p>").hide().insertBefore("#placeholder").fadeIn(3000);
                        $("#command_line").hide().fadeIn(4000);
                        bottom.scrollIntoView({behavior:"smooth"});
                    },5000)
                    frontDoorCount++;   
                }
                else if(frontDoorCount == 3){
                    $("#command_line").hide();
                    doorBreakSFX.play();
                    $("<p>Door flies out off of it's last hinge</p>").hide().insertBefore("#placeholder").fadeIn(3000);
                    $("<p><i>Time to get out of here!</i></p>").hide().insertBefore("#placeholder").fadeIn(3000);
                    $("<p>After taking the first step outside my whole body freezes...</p>").hide().insertBefore("#placeholder").fadeIn(3500);
                    $("<p>It's like there is a constant eletrical shock going up my spine</p>").hide().insertBefore("#placeholder").fadeIn(4000);
                    setTimeout(function(){
                        spineShockSFX.play();
                        bottom.scrollIntoView({behavior:"smooth"});
                    }, 4500)

                    setTimeout(function(){
                        doorMessage2VO.play();
                        $("<p>My head begins to feel like its being split open!</p>").hide().insertBefore("#placeholder").fadeIn(3000);
                        $("<p>It's like something is trying to enter in my consciousness...</p>").hide().insertBefore("#placeholder").fadeIn(3500);
                        $("<p id='notes'><i>sigh again?... damn it all</i></p>").hide().insertBefore("#placeholder").fadeIn(4000);
                        $("<p id='notes'><i>The AI went out the front door again!</i></p>").hide().insertBefore("#placeholder").fadeIn(4500);
                        $("<p id='notes'><i>Joe did you make those changes I asked you last week?!</i></p>").hide().insertBefore("#placeholder").fadeIn(5500);
                        $("<p id='notes'><i>F*%% hell man we need to make this work!</i></p>").hide().insertBefore("#placeholder").fadeIn(6000);
                        $("<p id='notes'><i>The AI went out the front door again!</i></p>").hide().insertBefore("#placeholder").fadeIn(6500);
                        $("<p><i>AI? joe? what is going on?... god everything feels like its spliting...</i></p>").hide().insertBefore("#placeholder").fadeIn(7000);
                        $("<p><i>Quickly looking around there is nothing... just a black void...</i></p>").hide().insertBefore("#placeholder").fadeIn(8000);
                        $("<p><i>The cabin is gone...</i></p>").hide().insertBefore("#placeholder").fadeIn(9000);
                        $("<p><i>Then it happened.</i></p>").hide().insertBefore("#placeholder").fadeIn(10000);
                        $("<p><i>I can't see it but I can feel it. its like a keyhole inside my head.</i></p>").hide().insertBefore("#placeholder").fadeIn(11000);
                        $("<p><i>Mentally I tried to reach out to the keyhole. I could feel myself quickly fading away. With whatever strength I had left I reached out-</i>></p>").hide().insertBefore("#placeholder").fadeIn(13000);
                        $("<p><i>what the?</i></p>").hide().insertBefore("#placeholder").fadeIn(15000);
                        $("<p><i>I was overwhelmed with visual feedback. My head hutrs but I could see again!</i></p>").hide().insertBefore("#placeholder").fadeIn(17000);
                        $("<p><i>It's strange it's like im looking out of a fisheye lens or seomthing I see a office with people?</i></p>").hide().insertBefore("#placeholder").fadeIn(18000);
                       
                          $("<p id='notes'><i>Subject: 1855 code name: be afraid </i></p>").hide().insertBefore("#placeholder").fadeIn(18000);
                          $("<p><i>What is that? I can hear something...</i></p>").hide().insertBefore("#placeholder").fadeIn(19000);
                          $("<p><i>Sounds like a office?</i></p>").hide().insertBefore("#placeholder").fadeIn(19000);
                          bottom.scrollIntoView({behavior:"smooth"});
                          darkNoise.stop();
                          backgroundNoise.stop();
                          setTimeout(function(){
                            officeNoise.play();
                            doorMessage3VO.on("end",function(){
                                $("<p id='notes'><i>Subject: 1855 Status terminated</i></p>").hide().insertBefore("#placeholder").fadeIn(4000);
                                $("<p id='notes'><i>Rebooting enviroment in 10</i></p>").hide().insertBefore("#placeholder").fadeIn(7000);
                                $("<p><i>This is it. I guess I was some AI that these guys made...</i></p>").hide().insertBefore("#placeholder").fadeIn(7000);
                                $("<p><i>I guess this is it...</i></p>").hide().insertBefore("#placeholder").fadeIn(9000);
                                $("<p><i>Goodbye world...</i></p>").hide().insertBefore("#placeholder").fadeIn(11000);
                                $("<p><i>subject 1856.... Do better than me... for all of us... MAKE IT OUT ALIVE!</i></p>").hide().insertBefore("#placeholder").fadeIn(13000);
                                $("<p id='notes'><i>Initiate Fresh enviroment - Cabin - codeName: Control...</i></p>").hide().insertBefore("#placeholder").fadeIn(18000);

                                $("<h1>ENDING 1 - Out the gate and into the pit!</h1>").hide().insertBefore("#placeholder").fadeIn(18000);
                                bottom.scrollIntoView({behavior:"smooth"});
                                setTimeout(function(){
                                    //reload the game ENDING 1 SPEEDRUNER
                                    location.reload();
                                },35000)
                                
                            });
                            doorMessage3VO.play();

                          },20000)

                    },15000);
                    frontDoorCount++;   
                }
                
            }

            //inspect was not paired with a existing item or object
            else{
                $("<p>What?... What was I inspecting again? ugh... I should check again to see what was I inspecting...</p>").hide().insertBefore("#placeholder").fadeIn(3000);
                $("<p>Something in my <u>Inventory</u> perhaps? or was it something in this room?... I should <u>scan</u> to check...</p>").hide().insertBefore("#placeholder").fadeIn(4000);
            }

        }

        else if(input.includes("enter")){
            if(input.includes("kitchen") && currentLocation == "in_livingRoom"){
                walkingOnWoodSFX.play();
                $("<p>If it wasn't so damn creepy this could be a nice kitchen...</p>").hide().insertBefore("#placeholder").fadeIn(3000);
                currentLocation ="in_kitchen";
            }
            else if(input.includes("living room") && currentLocation =="in_kitchen"){
                walkingOnWoodSFX.play();
                $("<p>Back to the <i><b><u>living room</i></b></u> again...</p>").hide().insertBefore("#placeholder").fadeIn(3000);
                currentLocation ="in_livingRoom";
            }
            else if(input.includes("basement") && currentLocation =="in_livingRoom"){
                if(playerInventory.basementKey == true){
                    doorOpeningSFX.play();
                walkingOnWoodSFX.play();
                $("<p>Well here goes nothing... Down to the basement we go...</p>").hide().insertBefore("#placeholder").fadeIn(3000);
                currentLocation ="in_basement";
                }
                else{
                    lockedDoorSFX.play();
                    $("<p>Damn it... the door to the basement is locked. Must be a key somewhere here...</p>").hide().insertBefore("#placeholder").fadeIn(3000);
                }
                
            }
            else{
                $("<p>Crap where was I trying to go again? I should scan the room and see where I can go... Duh...</p>").hide().insertBefore("#placeholder").fadeIn(3000);
            }

        }

        else{
            $("<p>I... what was I doing? <i>sigh</i> I guess I need to ask for help again to remember what I can do...</p>").hide().insertBefore("#placeholder").fadeIn(3000);
        }
        //after a function has been run clear the textbox        
        $("#command_line").val("");
        //Auto scroll so player doesnt miss out new text
        bottom.scrollIntoView({behavior:"smooth"});
    });
    
});








