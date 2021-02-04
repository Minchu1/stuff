
var db
var Gamestate=0;
var playerCount;
var form;
var player;
var game;
var allP;
var car1, car2,car3,car4;
var cars;

function setup(){
createCanvas(displayWidth,displayHeight);
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
