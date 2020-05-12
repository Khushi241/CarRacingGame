var ball;
var database,position;
var playercount=0,gamestate=0,player,form,game;
var allplayer
var car1,car2,car3,car4,cars,c1,c2,c3,c4,track;
var bg;
function setup(){
    createCanvas(displayWidth-20,displayHeight-140);
    console.log(displayWidth);
    console.log(displayHeight);
    database = firebase.database();
 game=new Game()
 game.getState()
 game.start()
 bg = "white"
}
function preload(){
    c1 = loadImage("car1 (1).png")
    c2 = loadImage("car2.png")
    c3 = loadImage("car3.png")
    c4 = loadImage("car4.png")
    track = loadImage("track.jpg")

}

function draw(){
    background("white");
if(gamestate===2){
    //game.update(2)
    game.End()
}

   if(playercount===4){
       game.update(1)
   }
   if(gamestate===1){
       clear()
       game.play()
     
   }
    drawSprites();
}

