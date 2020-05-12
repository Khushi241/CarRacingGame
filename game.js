class Game{
    constructor(){
    }
getState(){
    database.ref('gameState').on("value",function(data){
        gamestate=data.val()


    })
}
update(state){

    database.ref('/').update({
        gameState:state
    })
}
start(){
    if(gamestate===0){
        player=new Player()
        player.getcount()
        form=new Form()
        form.display()
    }
    car1 = createSprite(100,200)
    car1.addImage("l1",c1)
    car2 = createSprite(300,200)
    car2.addImage("l2",c2)
    car3 = createSprite(500,200)
    car3.addImage("l3",c3)
    car4 = createSprite(700,200)
    car4.addImage("l4",c4)
    cars=[car1,car2,car3,car4]
}
play(){
    form.hide()
    textSize(30)
    text("Game Started",displayWidth/2.5,50)
    Player.getplayerinfo();
    player.getCarsAtEnd();
    if(allplayer!==undefined){
        background("#c68767")
        image(track,0,-displayHeight*4,displayWidth,displayHeight*5)
        var index = 0
        var x = 175
        var y
        var pos = 130;
        for(var plr in allplayer){
            index = index+1
            x = x+200
            y = displayHeight-allplayer[plr].distance
            cars[index-1].x=x
            cars[index-1].y=y
            if(index===player.index)
            {  fill("red")
                ellipse(x,y,60,60)
                
                camera.position.y=cars[index-1].y
                cars[index-1].shapeColor="red"}
           // fill ("red")
           // else
           //fill ("black")
            //pos+=20
            //textSize(15)
           // text(allplayer[plr].name+": "+allplayer[plr].distance,120,pos)
          
        }
    }
    if(keyIsDown(UP_ARROW)&&player.index!==null){
        player.distance +=10
        player.update()
    }

    if(player.distance===3860){
        gamestate=2
        player.rank +=1 
        Player.updateCarsAtEnd(player.rank)
        game.update(2)
    }
}
End(){
    console.log("gameEnded")
   
   
    console.log(player.rank)

}
}