var n = Math.random()*6;
var rndmnos = Math.floor(n) +1;
document.querySelector(".img1").setAttribute( "src","images/dice"+rndmnos+".png")

var n1 = Math.random()*6;
var rndmnos1 = Math.floor(n1) +1;
document.querySelector(".img2").setAttribute( "src","images/dice"+rndmnos1+".png")

if( rndmnos > rndmnos1){
    document.querySelector("h1").innerHTML = "Player 1 Wins";
}
else if(rndmnos<rndmnos1){
    document.querySelector("h1").innerHTML = "Player 2 Wins";
}
else{
    document.querySelector("h1").innerHTML = "DRAW!";
}
