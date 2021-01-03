var randomNumber1= Math.floor(Math.random()*6)+1;
var randomNumber2= Math.floor(Math.random()*6)+1;
document.getElementsByClassName("img1")[0].setAttribute("src","dice"+randomNumber1+".png");
document.getElementsByClassName("img2")[0].setAttribute("src","dice"+randomNumber2+".png");


if(randomNumber1>randomNumber2){
  document.querySelector("h1").innerHTML = "PLAYER 1 WINS";
}else if (randomNumber2>randomNumber1) {

  document.querySelector("h1").innerHTML = "PLAYER 2 WINS";
}else{
  document.querySelector("h1").innerHTML = "DRAW !";
}

function ref() {
 location.reload();
}
