class Player{
    constructor(){
        this.name=null
        this.distance=0
        this.index=null
        this.rank=null

    }
    getcount(){
        database.ref('playerCount').on("value",(data)=>{
            playercount = data.val()




        })



    }
    updatecount(count){
        database.ref('/').update({
            playerCount:count


        })



    }
 update(){
     var playerindex = "players/player" + this.index
     database.ref(playerindex).set({
         name:this.name,
         distance:this.distance



     })



 }
static getplayerinfo(){
    database.ref('players').on("value",(data)=>{
        allplayer=data.val()
    })
}

getCarsAtEnd(){
    database.ref('CarsAtEnd').on("value",(data)=>{
        this.rank=data.val()
    })
}
static updateCarsAtEnd(rank){
    database.ref('/').update({
        CarsAtEnd:rank
    })

}
}