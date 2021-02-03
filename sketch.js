
var db
var Gamestate=0;
var playerCount;
var form;
var player;
var game;
var allP;


function setup(){
createCanvas(400,400);
db=firebase.database();
game=new Game();
game.getState();
game.start();
}

function draw(){
if(playerCount===4){
    game.update(1);


}
if(Gamestate===1){
    clear();
    game.play();
}
}