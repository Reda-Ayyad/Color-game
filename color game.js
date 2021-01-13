var numSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init(){
    setupModebuttons();
    setupSquares();
    reset();
}

function setupModebuttons(){
    for(var i = 0; i < modeButtons.length; i++){
        modeButtons[i].addEventListener("click", function(){
        modeButtons[0].classList.remove("selected")
        modeButtons[1].classList.remove("selected")
        this.classList.add("selected")
        
        this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
            reset();
        })
    }
}

function setupSquares(){
    for (var i = 0; i < squares.length; i++){
        squares[i].addEventListener("click", function(){
        //grab color of clicked square
        var clickedColor = this.style.backgroundColor;
        //compare it to the picked color
        if(clickedColor === pickedColor){
        messageDisplay.textContent = "correct!"
        changecolors(clickedColor);
        h1.style.backgroundColor = clickedColor;
        resetButton.textContent = "Play Again?"
        } else {
                this.style.backgroundColor = "#232323";
                messageDisplay.textContent = "Try again"
            }
        });
    }
}

function reset(){
    colors = generateRandomColors(numSquares);   
    //pick color
    pickedColor = pickColor();
    //change color display to match the new one
    colorDisplay.textContent = pickedColor;
    //change colors of the array
    for(var i = 0; i < squares.length; i++){
        if(colors[i]){
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = "none";
        }
    }
    h1.style.backgroundColor = "steelblue";
    resetButton.textContent = "New Colors";
    messageDisplay.textContent = "";
}

resetButton.addEventListener("click", function(){
    reset();
})


function changecolors(color){
//loop through squares 
    for(var i = 0; i < squares.length; i++){
//change square color to match the given color
    squares[i].style.backgroundColor = color;
}
}

function pickColor(){
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

function generateRandomColors(num) {
    //create an array
    var arr = [];
    //repeat num times 
    for(var i = 0; i < num; i++){
    //generate random colors
        arr.push(randomColors());
    }
    //return the array
    return arr;
}

function randomColors() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    "rgb(r ,g , b)"
    return "rgb(" + r + ", " + g + ", " + b + ")";
}

