var database,gameState=0,playerCount=0;
var form,player,game;
var player1,player2,players;

function setup() {
  createCanvas (displayWidth,displayHeight-150);
  database=firebase.database();
  game=new Game ();
  game.start();
  
}
function draw() {
  background("yellow");  
  if(playerCount===2){
   game.update(1);
   

  }
  if(gameState===1){
    game.play();
  }
}