var play1="Player 1";
var play2="Player 2";


function editNames(){
	play1=prompt("Change "+ play1 +" name");
	play2=prompt("Change "+play2+" name");

	document.querySelector("h3.Player1").innerHTML=play1;
	document.querySelector("h3.Player2").innerHTML=play2;

}

function rollDice(){
	setTimeout(function (){
		var rand1=Math.floor(Math.random()*6)+1;
		var rand2=Math.floor(Math.random()*6)+1;

		document.querySelector(".img1").setAttribute("src","images/dice"+rand1+".png");
		document.querySelector(".img2").setAttribute("src","images/dice"+rand2+".png");


		if(rand1 == rand2){
			document.querySelector("h1").innerHTML="DRAW!";
		}
		else if(rand1<rand2){
			document.querySelector("h1").innerHTML=play2+" WINS!";
		}
		else{
			document.querySelector("h1").innerHTML=play1+" WINS!";
		}

	},500);
}
