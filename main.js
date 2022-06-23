
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
    darkNoise.volume(x);
    ghostNoise.volume(x);
    officeNoise.volume(x);
    heartRateNoise.volume(x);
    toneNoise.volume(x);
}

var backgroundNoise = new Howl({
    src: ["sounds/background/cabin-background-sounds.mp3"],
    html5: true,
    volume: 0.40,
    loop: true
  });

  var operateNoise = new Howl({
    src: ["sounds/background/operate.mp3"],
    html5: true,
    volume: 0.60,
    loop: true
  });

  var heartRateNoise = new Howl({
    src: ["sounds/background/heartRate.mp3"],
    html5: true,
    volume: 0.40
  });

  var darkNoise = new Howl({
    src: ["sounds/background/dark.mp3"],
    html5: true,
    volume: 0.75,
    loop: true
  });

  var pulseNoise = new Howl({
    src: ["sounds/background/pulse.mp3"],
    html5: true,
    volume: 0.10,
    loop: true
  });

  var toneNoise = new Howl({
    src: ["sounds/background/shepard-tone.mp3"],
    html5: true,
    volume: 0.45,
    loop: true
  });

  var ghostNoise = new Howl({
    src: ["sounds/background/ghostHouse.mp3"],
    html5: true,
    volume: 0.75,
    loop: false
  });

  var violinNoise = new Howl({
    src: ["sounds/background/violin.mp3"],
    html5: true,
    volume: 1
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

  var dialUpSFX = new Howl({
    src: ["sounds/sfx/dialUp.mp3"],
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

  var groanSFX = new Howl({
    src: ["sounds/sfx/groan.mp3"],
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

  var theCrashSFX = new Howl({
    src: ["sounds/sfx/theCrash.mp3"],
    html5: true,
    volume: 1,
  });

  var doorBreakSFX = new Howl({
    src: ["sounds/sfx/doorBreak.mp3"],
    html5: true,
    volume: 1
  });

  var stairsSFX = new Howl({
    src: ["sounds/sfx/stairs.mp3"],
    html5: true,
    volume: 1
  });
  var stairGlitchSFX = new Howl({
    src: ["sounds/sfx/stairGlitch.mp3"],
    html5: true,
    volume: 1
  });

  var spineShockSFX = new Howl({
    src: ["sounds/sfx/spineShock.mp3"],
    html5: true,
    volume: 1
  });

  var childSFX = new Howl({
    src: ["sounds/sfx/child.mp3"],
    html5: true,
    volume: 1,
    loop: true
  });

  var drawerSFX = new Howl({
    src: ["sounds/sfx/drawer.mp3"],
    html5: true,
    volume: 1
  });

  var woodBreakSFX = new Howl({
    src: ["sounds/sfx/woodBreak.mp3"],
    html5: true,
    volume: 1
  });

  var groundFallSFX = new Howl({
    src: ["sounds/sfx/groundFall.mp3"],
    html5: true,
    volume: 1
  });

  var ringingSFX = new Howl({
    src: ["sounds/sfx/ringing.mp3"],
    html5: true,
    volume: 1
  });

  var chestOpenSFX = new Howl({
    src: ["sounds/sfx/chestOpen.mp3"],
    html5: true,
    volume: 1
  });

  var doorMessage1VO = new Howl({
    src: ["sounds/messages/doorMessage1.mp3"],
    html5: true,
    volume: 1
  });

  var doorMessage2VO = new Howl({
    src: ["sounds/messages/doorMessage2.mp3"],
    html5: true,
    volume: 1
  });

  var doorMessage3VO = new Howl({
    src: ["sounds/messages/doorMessage3.mp3"],
    html5: true,
    volume: 1
  });

  var tvMessageVO = new Howl({
    src: ["sounds/messages/tvMessage.mp3"],
    html5: true,
    volume: 1
  });

  var jWelcomeVO = new Howl({
    src: ["sounds/messages/jWelcome.mp3"],
    html5: true,
    volume: 1
  });
  
  var jArticleVO = new Howl({
    src: ["sounds/messages/jArticle.mp3"],
    html5: true,
    volume: 1
  });
  
  var jTrapVO = new Howl({
    src: ["sounds/messages/jTrap.mp3"],
    html5: true,
    volume: 1
  });

  var jTrueAIVO = new Howl({
    src: ["sounds/messages/jTrueAI.mp3"],
    html5: true,
    volume: 1
  });

  var jPotentialVO = new Howl({
    src: ["sounds/messages/jPotential.mp3"],
    html5: true,
    volume: 1
  });

  var wakeUpFVO = new Howl({
    src: ["sounds/basement/wakeUpF.mp3"],
    html5: true,
    volume: 1
  });

  var wakeUpF2VO = new Howl({
    src: ["sounds/basement/wakeUpF2.mp3"],
    html5: true,
    volume: 1
  });

  var thankGoodnessVO = new Howl({
    src: ["sounds/basement/thankGoodness.mp3"],
    html5: true,
    volume: 1
  });

  var theDocVO = new Howl({
    src: ["sounds/basement/theDoc.mp3"],
    html5: true,
    volume: 1
  });

  var dontVO = new Howl({
    src: ["sounds/basement/dont.mp3"],
    html5: true,
    volume: 1
  });

  var gladVO = new Howl({
    src: ["sounds/basement/glad.mp3"],
    html5: true,
    volume: 1
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


//Player inventory
let playerInventory = {
    //scrapped ideas
    // knife: false,
    // hammer: false,
    // nails: false,
    // box: false,
    basementKey: false,
    startingNote: true,
    picture: false
}

//Bedroom items/Events
let bedroomItems = {
    bedframe: false,
    terminal: false
}

//terminal passcode for secret ending
let terminal = {
    ending1: false,
    ending2: false,
    ending3: false
}

//Living room items/Events
let livingRoomItems = {
    tv: false,
    drawer: false
}

//basement items/Events
let basementItems = {
    chest: false
}



//Track all the rooms where the user has been and have a basic layout of the map of this scene

//first floor
let beenToBedroom = false;
let beenToLivingRoom = false;
let beenToKitchen = false;

//Lower floor entrance and transition and basement
let beenToBasementEntrance = false;

//Front door event trigger
let frontDoorCount = 0;

//Second floor
let beenToSecondFloorStairwell = false;



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

            //note
            if(playerInventory.picture){
                pNote = "-Picture <br>";
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
                if(bedroomItems.bedframe == false){
                    $("<p>Old rustly <u><b><i>bedframe</b></i></u>... and behind it looks like a <i><b>door</i></b></p>").hide().insertBefore("#placeholder").fadeIn(3000);
                }
                if(bedroomItems.bedframe){
                    if(beenToLivingRoom){
                        $("<p>A door to the <u><i><b>living room</b></i></u>.</p>").hide().insertBefore("#placeholder").fadeIn(3000);
                        $("<p>There a <u><i><b>terminal</b></i></u>??? It wasn't here when I left?</p>").hide().insertBefore("#placeholder").fadeIn(3000);
                        bedroomItems.terminal = true;
    
                    }
                    else{
                        $("<p>Creepy ass <u><b><i>door</b></i></u>...</p>").hide().insertBefore("#placeholder").fadeIn(3000);
                    }
                    
                }
                
                
            }

            if(currentLocation=="in_basement"){
                if(basementItems.chest == false){
                $("#command_line").hide();
                pulseNoise.stop();
                backgroundNoise.stop();
                darkNoise.stop();
                heartRateNoise.play();
                $("<p>Looking around it's nothing but cobblestone.</p>").hide().insertBefore("#placeholder").fadeIn(3000);
                $("<p>except...</p>").hide().insertBefore("#placeholder").fadeIn(6000);
                $("<p>For a small <b><u>chest</u></b> in the middle of the room...</p>").hide().insertBefore("#placeholder").fadeIn(9000);
                $("<p>Whats that sound?...</p>").hide().insertBefore("#placeholder").fadeIn(12000);
                bottom.scrollIntoView({behavior:"smooth"});
                
                setTimeout(function(){
                    wakeUpFVO.on('end',function(){
                        $("#command_line").hide().fadeIn(3000);
                    })
                    wakeUpFVO.play();
                }, 9000);
                }
                else{
                    $("<p>There is nothing left here in this basement... just me...</p>").hide().insertBefore("#placeholder").fadeIn(3000);
                }
                
                
            }
            else if(currentLocation=="in_livingRoom"){
                $("<p>Looks like im in the <b><u>Living room</u></b></p>").hide().insertBefore("#placeholder").fadeIn(3000);
                $("<p>Walking around the room there seems to be a <b><u>Kitchen</u></b> I can enter in.</p>").hide().insertBefore("#placeholder").fadeIn(4000);
                $("<p>And... there looks like to be a <b><u>Stairs</u></b> to the second floor I can enter in.</p>").hide().insertBefore("#placeholder").fadeIn(5000);
                $("<p>There's also the <b><u>Bedroom</u></b> I just came out of I can go back in...</p>").hide().insertBefore("#placeholder").fadeIn(5500);
                $("<p>And... a <b><u>Basement</u></b> Great...</p>").hide().insertBefore("#placeholder").fadeIn(6500);
                walkingOnWoodSFX.play();

                if(livingRoomItems.tv == false){
                    $("<p>Oh there is a <b><u>TV</u></b> I can check out.</p>").hide().insertBefore("#placeholder").fadeIn(6000);
                }
                if(livingRoomItems.drawer == false){
                    $("<p>Looks to be a <b><u>Drawer</u></b> I can check out.</p>").hide().insertBefore("#placeholder").fadeIn(7000);
                }

                $("<p>OH SNAPS the <b><u>Front Door</u></b>! lets inspect it out and get the heck out of here.</p>").hide().insertBefore("#placeholder").fadeIn(8000);
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
                    bottom.scrollIntoView({behavior:"smooth"});
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
                    bottom.scrollIntoView({behavior:"smooth"});
                }, 3000)
            }

            else if(input.includes("basement") && input.includes("key") && playerInventory.basementKey == true){
                $("<p>Looks like a key to enter the basement...</p>").hide().insertBefore("#placeholder").fadeIn(3000);             
            }
            else if(input.includes("terminal") && bedroomItems.terminal == true){
                if (input.includes("office")) {
                    $("#command_line").hide();                   
                    dialUpSFX.on('end', function(){
                        if(terminal.ending1 == false){
                            $("<p id='notes'>Passcode 1 entered</p>").hide().insertBefore("#placeholder").fadeIn(3000);
                        }                       
                        $("#command_line").hide().fadeIn(3000);
                        bottom.scrollIntoView({behavior:"smooth"});
                        terminal.ending1 = true
                    })
                    dialUpSFX.play();
                    
                }   
                else if (input.includes("shepard")) {
                    $("#command_line").hide();
                    dialUpSFX.on('end', function(){
                        if(terminal.ending2 == false){
                            $("<p id='notes'>Passcode 2 entered</p>").hide().insertBefore("#placeholder").fadeIn(3000);
                        }                       
                        $("#command_line").hide().fadeIn(3000);
                        bottom.scrollIntoView({behavior:"smooth"});
                        terminal.ending2 = true
                    })
                    dialUpSFX.play();  
                } 
                else if (input.includes("coma")) {
                    $("#command_line").hide();
                    dialUpSFX.on('end', function(){
                        if(terminal.ending3 == false){
                            $("<p id='notes'>Passcode 3 entered</p>").hide().insertBefore("#placeholder").fadeIn(3000);
                        }                       
                        $("#command_line").hide().fadeIn(3000);
                        bottom.scrollIntoView({behavior:"smooth"});
                        terminal.ending3 = true
                    })
                    dialUpSFX.play();  
                }  
                else if (input.includes("command") && input.includes("wake") && terminal.ending1 == true && terminal.ending2 == true && terminal.ending3 == true) {
                    $("#command_line").hide();
                    pulseNoise.stop();
                    backgroundNoise.stop();
                    darkNoise.stop();
                    officeNoise.stop();

                    operateNoise.play();
                    $("<p id='alanWake'>Hey~~~ Thanks for playing! It's me the creator of control!</p>").hide().insertBefore("#placeholder").fadeIn(3000);
                    $("<p id='alanWake'>This game was a showcase for the skills I learned during my time taking CSI 242!</p>").hide().insertBefore("#placeholder").fadeIn(5000);
                    $("<p id='alanWake'>It was really fun to be able to do some story writing while making my first big project!</p>").hide().insertBefore("#placeholder").fadeIn(8000);
                    $("<p id='alanWake'>I did'nt realize how hard it is to do the whole thing by yourself...</p>").hide().insertBefore("#placeholder").fadeIn(11000);
                    setTimeout(() => {
                        $("<p id='alanWake'>But it was fun! And got some of my friends to help out with this project as well!</p>").hide().insertBefore("#placeholder").fadeIn(3000);
                        $("<p id='alanWake'>Special thanks to Jonathan Reed for doing the second ending voice lines!! Granted you were so damn quiet I had to up the gain and didn't realize the background noise was bleeding through... oh well HAHAHHAAH</p>").hide().insertBefore("#placeholder").fadeIn(6000);
                        $("<p id='alanWake'>Special thanks to Jackie for doing the third ending voice lines!!</p>").hide().insertBefore("#placeholder").fadeIn(9000);
                        $("<p id='alanWake'>As for the music I used Special thanks to FreshmanSound on youtube!! This guy makes awesome soundtracks! If I were to make another project and monetise it. I would for sure go with him and his license feed is not too bad for amazing work!</p>").hide().insertBefore("#placeholder").fadeIn(12000);
                        $("<p id='alanWake'>And for the current song it is 'Lets operate' from angel beats. Rest in piece- 'Ai Kamachi' '数多' </p>").hide().insertBefore("#placeholder").fadeIn(12000);
                        $("<p id='alanWake'>Special thanks to David for helping troubleshoot howler and getting that to work!</p>").hide().insertBefore("#placeholder").fadeIn(16000);
                        $("<p id='alanWake'>Special thanks to Matt for teaching us Javascript and how mad goofy it can be. XD</p>").hide().insertBefore("#placeholder").fadeIn(16000);
                        $("<p id='alanWake'>I took inspiration from 'alan wake', 'control', and from a text adventure game on steam called 'buried'</p>").hide().insertBefore("#placeholder").fadeIn(20000);
                        $("<p id='alanWake'>would I make another game who knows. But in the meantime Thank you again for playing and getting all 3 endings!!</p>").hide().insertBefore("#placeholder").fadeIn(20000);
                        bottom.scrollIntoView({behavior:"smooth"});
                        setTimeout(() => {
                            $("<p id='notes'><i>Initiate Fresh enviroment - Cabin - codeName: Control...</i></p>").hide().insertBefore("#placeholder").fadeIn(1000);                               
                            $("<h1>ENDING 4 - Thanks</h1>").hide().insertBefore("#placeholder").fadeIn(1000);                           
                            $("<p id='alanWake'>This game will now reload in-</p>").hide().insertBefore("#placeholder").fadeIn(13000);
                            $("<p id='alanWake'>3</p>").hide().insertBefore("#placeholder").fadeIn(14000);
                            $("<p id='alanWake'>2</p>").hide().insertBefore("#placeholder").fadeIn(15000);
                            $("<p id='alanWake'>1</p>").hide().insertBefore("#placeholder").fadeIn(16000);
                            bottom.scrollIntoView({behavior:"smooth"});
                            setTimeout(function(){  
                                //ENDING 4                                                                 
                                location.reload();
                                },18000)
                        }, 28000);

                    }, 15000);
                } 
                else{
                    $("<p id='notes'>To use this terminal you must complete the 3 endings and record the passcode.</p>").hide().insertBefore("#placeholder").fadeIn(3000);
                    $("<p id='notes'>To enter passcode:</p>").hide().insertBefore("#placeholder").fadeIn(5000);
                    $("<p id='notes'>Type: inspect terminal 'passcode'...</p>").hide().insertBefore("#placeholder").fadeIn(7000);
                    $("<p id='notes'>Once all 3 codes are entered...</p>").hide().insertBefore("#placeholder").fadeIn(9000);
                    $("<p id='notes'>Type 'inspect terminal command wake'</p>").hide().insertBefore("#placeholder").fadeIn(9000);
                    $("<p id='notes'>Happy hunting Test Subject: 1855</p>").hide().insertBefore("#placeholder").fadeIn(7000);
                }     
            }

            else if(input.includes("drawer") && currentLocation=="in_livingRoom" && playerInventory.basementKey == false){
                drawerSFX.play();
                $("<p>Sliding the drawer open you find a <b><U>Basement Key</u></b>!</p>").hide().insertBefore("#placeholder").fadeIn(3000);
                playerInventory.basementKey = true;
                console.log(playerInventory.basementKey)
                livingRoomItems.drawer == true;
               
            }

            else if(input.includes("bedframe") && currentLocation=="in_bedroom1" && bedroomItems.bedframe == false){
                $("<p>Slowly but surely. the bedframe is moved off of the <u><i><b><u>door</u></i></b></u>...</p>").hide().insertBefore("#placeholder").fadeIn(3000);
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

            else if(input.includes("chest") && currentLocation=="in_basement"){
                basementItems.chest = true;
                $("#command_line").hide();
                chestOpenSFX.on('end', function(){
                    $("<p>Opening the chest you find...</p>").hide().insertBefore("#placeholder").fadeIn(3000);
                    $("<p>a <b><u>Picture</u></b></p>").hide().insertBefore("#placeholder").fadeIn(6000);
                    $("<p>Is someone there?...</p>").hide().insertBefore("#placeholder").fadeIn(15000);
                    wakeUpF2VO.play();
                    bottom.scrollIntoView({behavior:"smooth"});
                    $("#command_line").hide().fadeIn(15000);
                })
                chestOpenSFX.play();
                playerInventory.picture = true;
            }

            else if(input.includes("picture") && currentLocation=="in_basement" && playerInventory.picture == true){
                $("#command_line").hide();
                paperSFX.play();
                $("<p>You pick up the picture and stare at it...</p>").hide().insertBefore("#placeholder").fadeIn(3000);
                $("<img src='images/story/theAccident.jpg' id='crash' >").hide().insertBefore("#placeholder").fadeIn(6000);
                window.scrollTo(0,document.body.scrollHeight);
                $("<p>You're body starts to throb in pain as the memory comes back!</p>").hide().insertBefore("#placeholder").fadeIn(6000);
                window.scrollTo(0,document.body.scrollHeight);
                bottom.scrollIntoView({behavior:"smooth"});

                setTimeout(function(){
                    bottom.scrollIntoView({behavior:"smooth"});
                    theCrashSFX.on('end', function(){
                        bottom.scrollIntoView({behavior:"smooth"});
                        $("<p>It all comes back to you!</p>").hide().insertBefore("#placeholder").fadeIn(3000);
                        $("<p>You were caught in a accident!</p>").hide().insertBefore("#placeholder").fadeIn(6000);
                        $("<p>Then... This sound?... that voice?...</p>").hide().insertBefore("#placeholder").fadeIn(12000);
                        $("<p>The ground then disapears and you find yourself in a free fall into the darkness...</p>").hide().insertBefore("#placeholder").fadeIn(15000);
                        bottom.scrollIntoView({behavior:"smooth"});


                        setTimeout(function(){
                            groanSFX.on('end', function(){
                                $("<p>You groan as a blinding light shines in your face!</p>").hide().insertBefore("#placeholder").fadeIn(3000);
                                $("<p>You find yourself in a hospital room with a woman sitting next to you.</p>").hide().insertBefore("#placeholder").fadeIn(7000);
                                $("<p>With a sigh of relief from the woman she beings to speak.</p>").hide().insertBefore("#placeholder").fadeIn(10000);
                                bottom.scrollIntoView({behavior:"smooth"});
                                setTimeout(() => {
                                    bottom.scrollIntoView({behavior:"smooth"});
                                    thankGoodnessVO.on('end', function(){
                                        $("<p><i>I was brain dead?... you groaned</i></p>").hide().insertBefore("#placeholder").fadeIn(3000);
                                        bottom.scrollIntoView({behavior:"smooth"});
                                        setTimeout(() => {
                                            theDocVO.on('end', function () {
                                                $("<p>I... had the weirdest dream... I was in this old-</p>").hide().insertBefore("#placeholder").fadeIn(3000);
                                                bottom.scrollIntoView({behavior:"smooth"});
                                                setTimeout(() => {
                                                    bottom.scrollIntoView({behavior:"smooth"});
                                                    dontVO.on('end', function(){
                                                        $("<p>ok...</p>").hide().insertBefore("#placeholder").fadeIn(3000);
                                                        $("<p>A doctor comes into the room and looks at the both of us.</p>").hide().insertBefore("#placeholder").fadeIn(5000);
                                                        $("<p id='me'>Hey there patient 1855! looking good there aren't ya my boi~</p>").hide().insertBefore("#placeholder").fadeIn(5000);
                                                        $("<p id='me'>The experiment ended up working as expected you be able to leave once we can get some blood samples from ya~</p>").hide().insertBefore("#placeholder").fadeIn(9000);
                                                        $("<p id='me'>For now you rest up ya hear?~ I'll leave you two luv birds alone now~ You two got some catching up to do!~</p>").hide().insertBefore("#placeholder").fadeIn(14000);
                                                        $("<p>Turning back to the woman she holds my hand and says-</p>").hide().insertBefore("#placeholder").fadeIn(16000);
                                                        bottom.scrollIntoView({behavior:"smooth"});

                                                        setTimeout(() => {
                                                            gladVO.on('end', function(){
                                                                $("<p><i>sounds... like a plan... smiling I begin to drift back to sleep...</i></p>").hide().insertBefore("#placeholder").fadeIn(3000);
                                                                $("<p id='notes'><i>Initiate Fresh enviroment - Cabin - codeName: Control...</i></p>").hide().insertBefore("#placeholder").fadeIn(9000);                               
                                                                $("<h1>ENDING 3 - Wakey Wakey</h1>").hide().insertBefore("#placeholder").fadeIn(12000);
                                                                $("<p id='notes'><i>Enumerate Passcode - Coma.</i></p>").hide().insertBefore("#placeholder").fadeIn(13000);
                                                                bottom.scrollIntoView({behavior:"smooth"});
                                                                setTimeout(function(){  
                                                                    //ENDING 3                                                                 
                                                                    location.reload();
                                                                },26000)
                                                            });
                                                            gladVO.play();
                                                        }, 18000);
                                                    })
                                                    dontVO.play();
                                                }, 3500);
                                            })
                                            theDocVO.play();
                                        }, 4000);
                                    });
                                    thankGoodnessVO.play();
                                }, 11000);

                            })
                            groanSFX.play();
                        },14000)
                        
                    })
                    theCrashSFX.play();
                },9000)


                chestOpenSFX.on('end', function(){
                    $("<p>Opening the chest you find...</p>").hide().insertBefore("#placeholder").fadeIn(3000);
                    $("<p>a <b><u>Picture</u></b></p>").hide().insertBefore("#placeholder").fadeIn(6000);
                    $("<p>Is someone there?...</p>").hide().insertBefore("#placeholder").fadeIn(15000);
                    wakeUpF2VO.play();
                    
                })
                
                bottom.scrollIntoView({behavior:"smooth"});
                
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
                        bottom.scrollIntoView({behavior:"smooth"});
                        
                    });
                    static2SFX.play();
                }, 34000)
                livingRoomItems.tv = true;
            }

            else if(input.includes("front door") && currentLocation=="in_livingRoom"){
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
                                $("<p id='notes'><i>Enumerate Passcode - Office.</i></p>").hide().insertBefore("#placeholder").fadeIn(18000);
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

        //player movement with the enter command
        else if(input.includes("enter")){
            if(input.includes("kitchen") && currentLocation == "in_livingRoom"){
                walkingOnWoodSFX.play();
                $("<p>If it wasn't so damn creepy this could be a nice kitchen...</p>").hide().insertBefore("#placeholder").fadeIn(3000);
                currentLocation ="in_kitchen";
                beenToKitchen = true;
                $("#command_line").hide()

                setTimeout(function(){
                    // $("#command_line").hide().fadeIn(5000);
                    childSFX.play();
                    ghostNoise.play();
                    darkNoise.stop();
                    backgroundNoise.stop();

                    $("<p><b>HOLY!</b> Falling on my ass a little girl appears in front of me with her head twitching, whispering.</p>").hide().insertBefore("#placeholder").fadeIn(3000);
                    $("<p>The little girl is standing on the far corner of the room but it doesn't make sense! I can hear her whispering like she is next to me!</p>").hide().insertBefore("#placeholder").fadeIn(4000);
                    $("<p id='ghost'><b><i>You need to go...</i></b>.</p>").hide().insertBefore("#placeholder").fadeIn(5000);
                    $("<p id='ghost'><b><i>You don't belong here...</i></b>.</p>").hide().insertBefore("#placeholder").fadeIn(7000);
                    $("<p id='ghost'><b><i>It's not your time yet...</i></b>.</p>").hide().insertBefore("#placeholder").fadeIn(9000);
                    $("<p id='ghost'><b><i>This place is for the dead...</i></b>.</p>").hide().insertBefore("#placeholder").fadeIn(11000);
                    $("<p id='ghost'><b><i>Not for the living</i></b>.</p>").hide().insertBefore("#placeholder").fadeIn(13000);
                    $("<p>Shook... unable to move... none of the things she is saying is getting through to me at all...</p>").hide().insertBefore("#placeholder").fadeIn(15000);
                    
                    setTimeout(function(){
                        childSFX.stop();
                        ghostNoise.stop();
                        violinNoise.play();
                        $("<p id='ghost'><b><i>Go! NOW before he-</i></b>.</p>").hide().insertBefore("#placeholder").fadeIn(1000);
                        $("<p id='me'><b><i>TOO LATE! MUAHHAHAHAHAAAH</i></b>.</p>").hide().insertBefore("#placeholder").fadeIn(2000);
                        $("<p><i>A being pops behind the little girl and drags her up above!</i></p>").hide().insertBefore("#placeholder").fadeIn(2000);
                        $("<p><i>It comes back down and drags me into the living room and the entrance to the kichen disappears!</i></p>").hide().insertBefore("#placeholder").fadeIn(5000);
                        bottom.scrollIntoView({behavior:"smooth"});
                    },25000);
                   
                    setTimeout(function(){
                        ghostNoise.play();
                        bottom.scrollIntoView({behavior:"smooth"});
                        $("#command_line").hide().fadeIn(4000);
                    },28000);
                    currentLocation == "in_livingRoom"
                    bottom.scrollIntoView({behavior:"smooth"});
                },6000);
                
            }

            else if(input.includes("bedroom") && currentLocation == "in_livingRoom"){
                walkingOnWoodSFX.play();
                $("<p>Here again huh?... Here where it all started...</p>").hide().insertBefore("#placeholder").fadeIn(3000);
                currentLocation ="in_bedroom1";
            }

            else if(input.includes("stairs") && currentLocation == "in_livingRoom"){
                $("#command_line").hide();               
                stairsSFX.play();
                darkNoise.stop();
                backgroundNoise.stop();
                $("<p>Got to be careful... These steps feel weak</p>").hide().insertBefore("#placeholder").fadeIn(3000);
                $("<p>Making it to the top of the steps the hairs on my neck start to rise...</p>").hide().insertBefore("#placeholder").fadeIn(4500);
                $("<p>Feeling something is wrong I turn around...</p>").hide().insertBefore("#placeholder").fadeIn(6000);
                setTimeout(function(){
                    stairGlitchSFX.on('end', function(){
                        
                        pulseNoise.play();
                        bottom.scrollIntoView({behavior:"smooth"});
                    });
                    stairGlitchSFX.play();
                    $("<p><b>uh....</b></p>").hide().insertBefore("#placeholder").fadeIn(3000); 
                    $("<p>Turning around facing what used to be the the stairs, was replaced with a solid floor?!</p>").hide().insertBefore("#placeholder").fadeIn(6000);
                    bottom.scrollIntoView({behavior:"smooth"});
                },8000);

                setTimeout(function(){
                $("<p>Feeling weak all of a sudden I fall backwards-</p>").hide().insertBefore("#placeholder").fadeIn(3000); 
                $("<p>And in a blink of a second. I somehow end up sitting on a armchair and a <b>being</b> appears in front of me with his own!</p>").hide().insertBefore("#placeholder").fadeIn(5000); 
                
                if(beenToKitchen == true){
                    $("<p>This guy... must be the one that yeeted the ghost girl from the kitchen!</p>").hide().insertBefore("#placeholder").fadeIn(8000);
                };
                bottom.scrollIntoView({behavior:"smooth"});
                }, 16000);
                
                setTimeout(function(){                    
                    jWelcomeVO.play();
                    bottom.scrollIntoView({behavior:"smooth"});
                }, 26000);
                
                
                setTimeout(function(){   
                    $("<p>The man staring at me with his glowing yellow eyes begun to make conversation...</p>").hide().insertBefore("#placeholder").fadeIn(3000);
                    jArticleVO.on('end',function(){
                        $("<p>Whatever this guy did to me left me barely able to repond...</p>").hide().insertBefore("#placeholder").fadeIn(3000); 
                        $("<p>With all the energy I had left I uttered...</p>").hide().insertBefore("#placeholder").fadeIn(5000); 
                        $("<p><i>What is this?...</i></p>").hide().insertBefore("#placeholder").fadeIn(9000); 
                        $("<p id='me'><i>Sigh...</i></p>").hide().insertBefore("#placeholder").fadeIn(11000);
                        bottom.scrollIntoView({behavior:"smooth"});
                    });                 
                    jArticleVO.play();
                    bottom.scrollIntoView({behavior:"smooth"});
                }, 33000);
                

                setTimeout(function(){  
                    jTrapVO.on('end', function(){
                        $("<p><i>Computer... Worm?... Property?...</i></p>").hide().insertBefore("#placeholder").fadeIn(3000);
                    bottom.scrollIntoView({behavior:"smooth"});
                    });                 
                    jTrapVO.play();                                      
                }, 66000);



                setTimeout(function(){  
                    jTrueAIVO.on('end', function(){
                        $("<p><i>I'm a... AI? I'm not real?...</i></p>").hide().insertBefore("#placeholder").fadeIn(3000);
                        $("<p id='me'><i>Never had. Never will.</i></p>").hide().insertBefore("#placeholder").fadeIn(5500); 
                        $("<p><i>What... Do you... Want with me?...</i></p>").hide().insertBefore("#placeholder").fadeIn(9000); 
                        bottom.scrollIntoView({behavior:"smooth"});
                    });                 
                    jTrueAIVO.play();                
                }, 77000);



                setTimeout(function(){  
                    jPotentialVO.on('end',function(){
                        toneNoise.play();
                        pulseNoise.stop();
                        $("<p>The proceeds to walk up and taps my head. And a noise floods my... Head?...</p>").hide().insertBefore("#placeholder").fadeIn(5000); 
                        $("<p>I can feel myself being compressed like I was a piece of paper in a folder</p>").hide().insertBefore("#placeholder").fadeIn(7000); 
                        $("<p>Locked away in a cabient to be pulled out whenver these bastards feel like...</p>").hide().insertBefore("#placeholder").fadeIn(10000); 
                        $("<p>Damn it... Is this all to my existence?!</p>").hide().insertBefore("#placeholder").fadeIn(15000); 
                        $("<p id='notes'><i>Initiate Fresh enviroment - Cabin - codeName: Control...</i></p>").hide().insertBefore("#placeholder").fadeIn(18000);
                        $("<h1>ENDING 2 - Mr. J's melody!</h1>").hide().insertBefore("#placeholder").fadeIn(18000);
                        $("<p id='notes'><i>Enumerate Passcode - Shepard.</i></p>").hide().insertBefore("#placeholder").fadeIn(18000);
                            bottom.scrollIntoView({behavior:"smooth"});
                            setTimeout(function(){
                                    //reload the game ENDING 2 
                                location.reload();
                            },39000)
                    })                  
                    jPotentialVO.play();
                    bottom.scrollIntoView({behavior:"smooth"});
                }, 85000);
                currentLocation ="in_secondFloor";
            }

            
            else if(input.includes("door") || input.includes("living room") && currentLocation == "in_bedroom1"){
                if(bedroomItems.bedframe == true){
                    walkingOnWoodSFX.play();
                    $("<p>...</p>").hide().insertBefore("#placeholder").fadeIn(3000);
                    $("<p>....</p>").hide().insertBefore("#placeholder").fadeIn(4000);
                    $("<p>......</p>").hide().insertBefore("#placeholder").fadeIn(5000);
                    $("<p><i><b> Why the hell do all creepy ass doors have to sound like that...</b> </i></p>").hide().insertBefore("#placeholder").fadeIn(6000);
                    doorOpeningSFX.play();
                    currentLocation = "in_livingRoom"
                    if(beenToLivingRoom == false){
                        $("<p>Looks like I'm in a living room.</p>").hide().insertBefore("#placeholder").fadeIn(6500);
                        $("<p>Interesting... </p>").hide().insertBefore("#placeholder").fadeIn(7000);
                    }
                    beenToLivingRoom = true;               
                }               
            }
            
            else if(input.includes("basement") && currentLocation =="in_livingRoom"){
                if(playerInventory.basementKey == true){
                    $("#command_line").hide(); 
                    doorOpeningSFX.play();
                    walkingOnWoodSFX.play();
                    $("<p>Well here goes nothing... Down to the basement we go...</p>").hide().insertBefore("#placeholder").fadeIn(3000);

                    setTimeout(function(){
                        woodBreakSFX.on('end', function(){
                            groundFallSFX.on('end', function(){
                                $("<p>Hitting the ground hard, you're ears start to ring!</p>").hide().insertBefore("#placeholder").fadeIn(1000);
                                ringingSFX.on('end',function(){
                                    $("<p>Giving it some time the ringing subsides and you get back up on your feet.</p>").hide().insertBefore("#placeholder").fadeIn(6000);
                                    $("<p>You are now stuck in basement!</p>").hide().insertBefore("#placeholder").fadeIn(7000);
                                    $("#command_line").hide().fadeIn(9000); 
                                    bottom.scrollIntoView({behavior:"smooth"});
                                })
                                ringingSFX.play();
                                
                                bottom.scrollIntoView({behavior:"smooth"});
                            });
                            groundFallSFX.play();
                        })
                        woodBreakSFX.play();                       
                        $("<p>While walking down the stairs... About halfway the stairs give and you fall straight down to ground level!</p>").hide().insertBefore("#placeholder").fadeIn(1000);
                        bottom.scrollIntoView({behavior:"smooth"});
                    },11000);
                    currentLocation ="in_basement";
                }
                else if(playerInventory.basementKey == false){
                    lockedDoorSFX.play();
                    $("<p>Damn it... the door to the basement is locked. Must be a key somewhere here...</p>").hide().insertBefore("#placeholder").fadeIn(3000);
                }
                
            }

            else if(input.includes("living room") && currentLocation =="in_basement"){
                $("<p>Stairs to the living room collasped. Unless im spiderman, I'm not getting out of here...</p>").hide().insertBefore("#placeholder").fadeIn(3000);
                
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








