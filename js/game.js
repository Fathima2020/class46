class Game{
  constructor(){

  
  }

  getState(){
    var getStateref=database.ref("gameState");
    this.getStateref.on("value",function(data){
      gameState=data.val();
    })
  }

  update(state){
    database.ref("/").update({
      gameState:state
    })
  }

 
  async start(){
    if(gameState===0){
     
      player=new Player();
      var playerCountref=await database.ref("playerCount").once("value");
     
     if(playerCountref.exists()){
       playerCount=playerCountref.val();
       player.getCount();
     }
      form=new Form();
      form.display();
     
    } 
    player1=createSprite(100,200);
    
    player2=createSprite(500,200);
players=[player1,player2];
  }

  play(){
   form.hide()
 Player.getPlayerinfo();
 if(allPlayers!==undefined){
   var index=0;
   var x=100;
   var y=100;
   
   for(var plr in allPlayers){
     index=index+1;
     x=x+500;
     y=y+500
     players[index-1].x=x;
     players[index-1].y=y;
   }

 }

 drawSprites();

   
}
}
  
 