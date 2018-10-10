var numOfSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.getElementById("message");
var h1 = document.querySelector("h1");
var resetButton = document.getElementById("reset");
var modeButtons = document.querySelectorAll(".mode")

init();


function init(){
	for (var i = 0; i< modeButtons.length; i++){
		modeButtons[i].addEventListener("click", function(){
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this. classList.add("selected");

			this.textContent === "Easy" ? numOfSquares = 3: numOfSquares = 6;
			reset();
	
		});
	}

	for(var i=0; i < squares.length; i++){
		// add intial color to the square
		squares[i].style.backgroundColor = colors[i];
		// add event listener to each of the square
			squares[i].addEventListener("click",function(){
			//grab color of clicked
			var clickedColor = this.style.backgroundColor;
			//Compare color to the pickedcolor
			
				if (clickedColor === pickedColor) {
					messageDisplay.textContent = "Correct";
					changeColor(clickedColor);
					h1.style.backgroundColor = clickedColor;
					resetButton.textContent = "Play again";
				}
				else{
					this.style.backgroundColor = "#232323";
					messageDisplay.textContent = "Try again";
				}
			});
	}

	reset();

}



 function reset(){
 	colors = generateRandomColors(numOfSquares);
	//pick a new random color from array
	pickedColor = pickColor();
	//change colorDisplay to match picked color
	colorDisplay.textContent = pickedColor;
	resetButton.textContent ="New Colors";

	for(var i=0; i < squares.length; i++){
	// add intial color to the square
	if(colors[i]){
		squares[i].style.display = "block";
		squares[i].style.backgroundColor = colors[i];
	}else{
		squares[i].style.display ="none";
	}
	
}
	h1.style.backgroundColor = "steelblue";
	messageDisplay.textContent = " ";

 }


resetButton.addEventListener("click", function(){
	reset();
});


colorDisplay.textContent = pickedColor;



function changeColor(color){
	for(var i=0; i < squares.length; i++){
	// add intial color to the square
	squares[i].style.backgroundColor = color;
}
}

function pickColor(){
	var random=Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num){
	//make an arry
	var arr = [];
	// add num radnom colors to array
	for(var i = 0; i<num; i++){
		arr.push(randomColor());
	}

	return arr;
}

function randomColor(){
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);

	return "rgb(" + r +", " + g +", " + b+")";
}