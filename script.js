 // inspired by user yp1083
 // with help from p5js reference + as always thecodingtrain

let nakedFrog;
let frogParty, frogChef, frogHowdy;
let ribbit;
let festive;
let sleighBell;
let blink;

let hat1 = 0;
let hat2 = 0;
let hat3 = 0;
let partyHat, chefHat, cowboyHat;

let lilypadTint = 0;
let christmasTint = 0;
let blinkTint = 0;

let partyButton;
let chefButton;
let howdyButton;
let lilypadButton;
let christmasMode;
let reset;

let input, greeting, nameButton;

let portName = '/dev/tty.usbmodem14101';
let serial;
let latestData;


function preload() {
   //original frog
  nakedFrog = loadImage('images/frog.png');

   //party hat icon
  partyHat = loadImage('images/partyHat.png');

   //chef hat icon
  chefHat = loadImage('images/chefHat.png');

   //cowboy hat icon
  cowboyHat = loadImage('images/cowboyHat.png');

   // frog in a party hat
  frogParty = loadImage('images/frogParty.png');

   // frog in a chef hat
  frogChef = loadImage('images/yesChef.png');

   // frog in a cowboy hat
  frogHowdy = loadImage('images/frogHowdy.png');

   // Lilypad environment
  lilypad = loadImage('images/lilypad.png'); 

   // frog noise
  ribbit = loadSound('sounds/frogNoise.mp3');

   // christmas mode
  festive = loadImage('images/christmasFrog.png');

   // sleighbell sound
  sleighBell = loadSound('sounds/sleigh.mp3');

   // blink eyes
  blink = loadImage('images/blinkEyes.png');
}


function setup() {
  createCanvas(windowWidth, windowHeight);

  // serial constructor
  serial = new p5.SerialPort();
  // get a list of all connected serial devices
  serial.list();
  // serial port to use - you'll need to change this
  serial.open(portName);
  // callback for when the sketchs connects to the server
  serial.on('connected', serverConnected);
  // callback to print the list of serial devices
  serial.on('list', gotList);
  // what to do when we get serial data
  serial.on('data', gotData);
  // what to do when there's an error
  serial.on('error', gotError);
  // when to do when the serial port opens
  serial.on('open', gotOpen);
  // what to do when the port closes
  serial.on('close', gotClose);



   //input for frog name
  input = createInput();
  input.position(100, 120);

   // button to submit frog name
  nameButton = createButton('submit');
  nameButton.position(250, 120);
  nameButton.mousePressed(greet);

  greeting = createElement('h2', '');
  greeting.position(570, 200);

   // button to equip party hat
  partyButton = createButton('Equip');
  partyButton.position (1168, 230);
  partyButton.mousePressed(hatTime1);

   // button to equip chef hat
  chefButton = createButton('Equip');
  chefButton.position (1168, 435);
  chefButton.mousePressed(hatTime2);

   // button to equip cowboy hat
  howdyButton = createButton('Equip');
  howdyButton.position (1169, 635);
  howdyButton.mousePressed(hatTime3);

   // button for lilypad and ribbit
  lilypadButton = createButton('RIBBIT');
  lilypadButton.position (150, 200);
  lilypadButton.mousePressed(whereLilypad);
  lilypadButton.size(100, 50);

   // button for christmas mode and sleigh bells
  christmasMode = createButton('CHRISTMAS MODE');
  christmasMode.position (150, 300);
  christmasMode.mousePressed(whereChristmas);
  christmasMode.size(100, 50);

   // button to reset
  reset = createButton('Reset Outfit');
  reset.position (170, 635);
  reset.mousePressed(resetSketch);

}






function serverConnected() {
  console.log("Connected to Server");
}

// list the ports
function gotList(thelist) {
  console.log("List of Serial Ports:");

  for (let i = 0; i < thelist.length; i++) {
    console.log(i + " " + thelist[i]);
  }
}

function gotOpen() {
  console.log("Serial Port is Open");
}

function gotClose() {
  console.log("Serial Port is Closed");
  latestData = "Serial Port is Closed";
}

function gotError(theerror) {
  console.log(theerror);
}

// when data is received in the serial buffer

function gotData() {
  let currentString = serial.readLine(); // store the data in a variable
  trim(currentString); // get rid of whitespace
  if (!currentString) return; // if there's nothing in there, ignore it
  console.log(currentString); // print it out
  latestData = currentString; // save it to the global variable
}







function draw() {
  background(220, 208, 255);

  tint(255, 255);
  textSize(25);
  text("What is his name??", 100, 100);

   // display frog
  image(nakedFrog, 475, 250, 446, 300);

   // display hat icons
  image(partyHat, 1100, 60, 170, 170);
  image(chefHat, 1100, 270, 170, 170);
  image(cowboyHat, 1085, 485, 190, 190);

   // display equipped frogs with no tint
  tint (255, hat1);
  image(frogParty, 475, 250, 446, 300);

  tint (255, hat2);
  image(frogChef, 475, 250, 446, 300);

  tint (255, hat3);
  image(frogHowdy, 475, 250, 446, 300);

  tint (255, lilypadTint);
  image(lilypad, 475, 250, 446, 300);

  tint (255, christmasTint);
  image(festive, 475, 250, 446, 300);

  if (latestData > 0) {
    blinkTint = 255;

  } else { 
    blinkTint = 0;
  }
  tint (255, blinkTint);
  image(blink, 475, 250, 446, 300);

}

 // function to display inputted frog name
 function greet(){
  const name = input.value();
  greeting.html('Help ' + name + ' get ready!');
  input.value('');
 }

  // add tint to party hat frog
 function hatTime1() {
  hat1 = 255;
  hat2 = 0;
  hat3 = 0;
  christmasTint = 0;
 }

  // add tint to chef hat frog
 function hatTime2() {
  hat1 = 0;
  hat2 = 255;
  hat3 = 0;
  christmasTint = 0;
 }

  // add tint to cowboy hat frog
function hatTime3() {
  hat1 = 0;
  hat2 = 0;
  hat3 = 255;
  christmasTint = 0;
}

 // lily pad and ribbit
function whereLilypad() {
  lilypadTint = 255;
  christmasTint = 0;
  ribbit.play();
}

 // Christmas and sleigh bells
function whereChristmas() {
  lilypadTint = 0;
  christmasTint = 255;
  hat1 = 0;
  hat2 = 0;
  hat3 = 0;
  sleighBell.play();
}

function resetSketch() {
  lilypadTint = 0;
  christmasTint = 0;
  hat1 = 0;
  hat2 = 0;
  hat3 = 0;
  
}
