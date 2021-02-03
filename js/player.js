class Player{
    constructor(){
        this.name=null;
        this.distance=0;
        this.index=null;

    }
getCount(){
    var playerCountRef=db.ref("playerCount");
    playerCountRef.on("value",(data)=>{
        playerCount=data.val();
        
    })
}
updateCount(count){
db.ref("/").update({
    playerCount:count
})

}
update(){
    var playerIndex="players/player"+this.index;
    db.ref(playerIndex).set({
        name:this.name,
        distance:this.distance
    })
}
static getPlayerInfo(){
    var playerRef=db.ref("players");
    playerRef.on("value",(data)=>{
        allP=data.val();
    })
}
}