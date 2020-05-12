class Form{
    constructor(){
        this.input=createInput("name")
        this.button = createButton('play')
        this.greeting =createElement('h3')
        this.reset = createButton('Reset')

    }
    hide(){
        this.input.hide()
        this.button.hide()
    }
    display(){
        var title=createElement('h2')
        title.html("car racing game")
        title.position(130,0)
       this.reset.position(displayWidth-100,20)
       this.reset.mousePressed(()=>{
           database.ref('/').update({gameState:0,playerCount:0})
         //game.update(0)  
         //player.updatecount(0)
         database.ref('players').remove()

       })
        this.input.position(displayWidth/2.5,displayHeight/2.5)
        this.button.position(displayWidth/2.5,displayHeight/2.2)

        this.button.mousePressed(()=>{
            this.input.hide()
            this.button.hide()
            player.name = this.input.value()
            playercount+=1
            player.index=playercount
            player.update()
            player.updatecount(player.index)
            this.greeting.html("Welcome"+player.name)
            this.greeting.position(130,160)





        })




    }
}