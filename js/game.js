class Game{

constructor(){


}

getState(){
    var gameStateRef= db.ref("gameState");
    gameStateRef.on("value",function(data){
        Gamestate= data.val();
    })
}

update(state){
db.ref("/").update({
    gameState:state
})
}

start(){
    if(Gamestate===0){
        player=new Player();
        player.getCount();
        form=new Form();
        form.display();

    }
}
play(){
    form.hide();
    textSize(24);
    text("game has started!", 400,100);
    Player.getPlayerInfo();

    if(allP!==undefined){
        var displayPosition=150;
        for(var plr in allP){
            if(plr==="player"+player.index){
                fill("red");
            
            }

            else{
                fill("black");
            }
            displayPosition+=20;
            textSize(15);
            text(allP[plr].name+": "+allP[plr].distance,400,displayPosition);

        }
    }
    if(keyDown(UP_ARROW)&&player.index!==null){
        player.distance+=5;
        player.update();
    }
}
}