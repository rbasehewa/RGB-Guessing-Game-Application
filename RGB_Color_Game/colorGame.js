var colors = generateRandomColors(9);



var squares = document.querySelectorAll(".square");
var pickedColor = pickedColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");

colorDisplay.textContent = pickedColor;


for (var i = 0; i < squares.length; i++) {
    //add click listeners to squares
    squares[i].style.backgroundColor = colors[i];

    //grab color of clicked square
    squares[i].addEventListener("click", function () {
    // grab color of clicked square
        var clickedColor = this.style.backgroundColor;
    // compare color to pickedColor
    console.log(clickedColor, pickedColor);
        if (clickedColor === pickedColor) {
            // alert("Correct!");
            messageDisplay.textContent = "Correct!";
            changeColors(clickedColor);
            h1.style.background = clickedColor;
        } else {
            // alert("incorrect color");
            this.style.backgroundColor = '#232323';
            messageDisplay.textContent = "Try Again";
        }

    })

}

function changeColors(colors) {

    for (var i = 0; i < squares.length; i++) {

        squares[i].style.backgroundColor = colors;
    }
}
function pickedColor() {
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num){
    // make an array
    var random = [];
    // add random colors to an array
    for(var i = 0; i < num; i++){
    //get the color and push into arr

     random.push(randomColor());
    }
    // return that array

    return random;
}

function randomColor(){
    // pick a red from 0 to 255
    var r = Math.floor(Math.random() * 256);
    // pick a green from 0 to 255
    var g = Math.floor(Math.random() * 256);
    // pick a blue from 0 to 255
    var b = Math.floor(Math.random() * 256);

    //    "rgb(255, 0, 0)",

    return "rgb(" + r + ", "+ g +", " + b + ")";
}