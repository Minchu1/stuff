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
    car1=createSprite(100,200,50,50);
    car2=createSprite(300,200,50,50);
    car3=createSprite(500,200,50,50);
    car4=createSprite(700,200,50,50);
    cars=[car1,car2,car3,car4];

}
play(){
    form.hide();
    textSize(24);
    text("game has started!", displayWidth/2,100);
    Player.getPlayerInfo();

    if(allP!==undefined){
        var index=0;
        var x=0;
        var y=0;
        for(var plr in allP){
           index=index+1;
           x=x+200;
           y=displayHeight-allP[plr].distance;
           cars[index-1]=x;
           cars[index-1]=y;
            if(index===player.index){

                //cars[index-1].shapeColor="red";
                camera.position.x=displayWidth/2;
                camera.position.y=cars[index-1].y;

            }

        
           
        }
    }
    if(keyIsDown("w")&&player.index!==null){
        player.distance+=5;
        player.update();
    }
    drawSprites();
}

}
