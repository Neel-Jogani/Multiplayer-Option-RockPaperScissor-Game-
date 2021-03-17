var game, player, form;
var multiState= 0;
var database;
var playerCount= 0;
var bg, bgImg;
var allPlayers;
var player1, player2;
var redButtonImg;
var rock, rockImg, paper, paperImg, scissor, scissorImg;
var players;

function preload()
{
	bgImg= loadImage("images/bg2.jpg");
	redButtonImg= loadImage("images/red button.png")
	rockImg= loadImage("images/rock.png");
    paperImg= loadImage("images/paper.png")
    scissorImg= loadImage("images/scissors.png")
}

function setup() {
	createCanvas(700, 1000);

	database= firebase.database();

	game= new Game();
	game.getState();
	game.start();
	
}


function draw() {
  
  background(bgImg);

  if(playerCount===2){
	  game.updateState(1);

  }

  if(multiState===1){
	game.play();
  }
  
  
  drawSprites();
 
}



