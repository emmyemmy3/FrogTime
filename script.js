
let nakedFrog;
let frogParty, frogChef, frogHowdy;

let hat1 = 0;
let hat2 = 0;
let hat3 = 0;
let partyHat, chefHat, cowboyHat;

let partyButton;
let chefButton;
let howdyButton;

let input, greeting, nameButton;


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
}


function setup() {
  createCanvas(windowWidth, windowHeight);

   //input for frog name
  input = createInput();
  input.position(100, 120);

   // button to submit frog name
  nameButton = createButton('submit');
  nameButton.position(250, 120);
  nameButton.mousePressed(greet);

  greeting = createElement('h2', '');
  greeting.position(600, 200);

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
 }

  // add tint to chef hat frog
 function hatTime2() {
  hat1 = 0;
  hat2 = 255;
  hat3 = 0;
 }

  // add tint to cowboy hat frog
function hatTime3() {
  hat1 = 0;
  hat2 = 0;
  hat3 = 255;
}

