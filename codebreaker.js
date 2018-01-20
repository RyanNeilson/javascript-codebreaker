var colorArray = [];

var guesses = 0;



var feedbackCell = 14;
var cell1Num = 10;
var cell2Num = 11;
var cell3Num = 12;
var cell4Num = 13;


	
	


/*Verify user's input as valid*/
function checkInput(){
	
	var color1 = document.getElementById("color1").value;
	var color2 = document.getElementById("color2").value;
	var color3 = document.getElementById("color3").value;
	var color4 = document.getElementById("color4").value;
	
	if(color1 != color2 && color1 != color3 && color1 != color4 && color2 != color3 && color2 != color4 && color3 != color4){
		submitGuess();
	} else {
		alert("You may not repeat colors in your guess");
	}
}




/*Submit the user's guess and display it on the board*/
function submitGuess(){
	
	var correct = 0;
	var almost = 0;
	
	var color1 = document.getElementById("color1").value;
	var color2 = document.getElementById("color2").value;
	var color3 = document.getElementById("color3").value;
	var color4 = document.getElementById("color4").value;
	
	switch(color1){
		
		case "0":
		document.getElementById(cell1Num).src="images/red-peg.png";
		break;
		case "1":
		document.getElementById(cell1Num).src="images/blue-peg.png";
		break;
		case "2":
		document.getElementById(cell1Num).src="images/green-peg.png";
		break;
		case "3":
		document.getElementById(cell1Num).src="images/yellow-peg.png";
		break;
		case "4":
		document.getElementById(cell1Num).src="images/black-peg.png";
		break;
		case "5":
		document.getElementById(cell1Num).src="images/white-peg.png";
		break;
		
	}
	
	switch(color2){
		
		case "0":
		document.getElementById(cell2Num).src="images/red-peg.png";
		break;
		case "1":
		document.getElementById(cell2Num).src="images/blue-peg.png";
		break;
		case "2":
		document.getElementById(cell2Num).src="images/green-peg.png";
		break;
		case "3":
		document.getElementById(cell2Num).src="images/yellow-peg.png";
		break;
		case "4":
		document.getElementById(cell2Num).src="images/black-peg.png";
		break;
		case "5":
		document.getElementById(cell2Num).src="images/white-peg.png";
		break;
		
	}
	
	switch(color3){
		
		case "0":
		document.getElementById(cell3Num).src="images/red-peg.png";
		break;
		case "1":
		document.getElementById(cell3Num).src="images/blue-peg.png";
		break;
		case "2":
		document.getElementById(cell3Num).src="images/green-peg.png";
		break;
		case "3":
		document.getElementById(cell3Num).src="images/yellow-peg.png";
		break;
		case "4":
		document.getElementById(cell3Num).src="images/black-peg.png";
		break;
		case "5":
		document.getElementById(cell3Num).src="images/white-peg.png";
		break;
		
	}
	
	switch(color4){
		
		case "0":
		document.getElementById(cell4Num).src="images/red-peg.png";
		break;
		case "1":
		document.getElementById(cell4Num).src="images/blue-peg.png";
		break;
		case "2":
		document.getElementById(cell4Num).src="images/green-peg.png";
		break;
		case "3":
		document.getElementById(cell4Num).src="images/yellow-peg.png";
		break;
		case "4":
		document.getElementById(cell4Num).src="images/black-peg.png";
		break;
		case "5":
		document.getElementById(cell4Num).src="images/white-peg.png";
		break;
		
	}
	
	/*Define functions for feedback of user guesses*/
	function feedback1(){
		if (color1 == colorArray[0]){
			correct++;
		}else if(color1 == colorArray[1] || color1 == colorArray[2] || color1 == colorArray[3]){
			almost++;
		} else {
			
		}
	};
	
	
	function feedback2(){
		if (color2 == colorArray[1]){
			correct++;
		}else if(color2 == colorArray[0] || color2 == colorArray[2] || color2 == colorArray[3]){
			almost++;
		} else {
			
		}
	};
	
	
	function feedback3(){
		if (color3 == colorArray[2]){
			correct++;
		}else if(color3 == colorArray[0] || color3 == colorArray[1] || color3 == colorArray[3]){
			almost++;
		} else {
			
		}
	};
	
	
	function feedback4(){
		if (color4 == colorArray[3]){
			correct++;
		}else if(color4 == colorArray[0] || color4 == colorArray[1] || color4 == colorArray[2]){
			almost++;
		} else {
			
		}
	}
	
	feedback1();
	feedback2();
	feedback3();
	feedback4();
	
	
	document.getElementById(feedbackCell).innerHTML = correct + ", " + almost;
	
	cell1Num = cell1Num + 10;
	cell2Num = cell2Num + 10;
	cell3Num = cell3Num + 10;
	cell4Num = cell4Num + 10;
	feedbackCell = feedbackCell + 10;
	guesses++;
	
	if(correct == 4){
		document.getElementById("gameOver").innerHTML = "You Win! Congratulations!";
		
	}else if (guesses == 12){
		document.getElementById("gameOver").innerHTML = "Game Over. Better Luck Next Time.";
	}
	
}


/*Make the secret code*/
function generateCode(){
	
	
	var secretCode=[0, 1, 2, 3, 4, 5];
	 
	 	/*Shuffle the initial array values randomly*/
		function shuffle(array) {
  					var i = 0;
  					var j = 0;
  					var temp = null;

  					for (i = array.length - 1; i > 0; i -= 1) {
    					j = Math.floor(Math.random() * (i + 1));
    					temp = array[i];
    					array[i] = array[j];
    					array[j] = temp;
    					
    		}
  			return array;
  			
	 	}
	 	 shuffle(secretCode);
	 	 	
	 	 	
	 	 /*Remove two values from the array to create a random 4-digit array*/
	 	 	for (var i = 0; i < 2; i++) {
	 		
	 		secretCode.splice((Math.floor(Math.random()*secretCode.length)),1);
	 	
	 	
			
			
		}
	 	 
		function colorNames(array){
			
			for(var i = 0; i < array.length; i++){
				
				switch(array[i]){
					
					case 0:
					colorArray.push(0);
					break;
					case 1:
					colorArray.push(1);
					break;
					case 2:
					colorArray.push(2);
					break;
					case 3:
					colorArray.push(3);
					break;
					case 4:
					colorArray.push(4);
					break;
					case 5:
					colorArray.push(5);
					
				
			}
		}
	};
	
	colorNames(secretCode);
	/*document.getElementById("checkInput").innerHTML =  colorArray.toString();*/
	
	
	
	
	document.getElementById("start").disabled=true;
	document.getElementById("reset").style.display='block';
	document.getElementById("guess").disabled=false;
	
	 	 
};

function resetPage(){
	window.location.reload();
	document.getElementById("start").disabled=false;
	document.getElementById("guess").disabled=true;
}






	 	
	 	
	 
	
	
	 

	

