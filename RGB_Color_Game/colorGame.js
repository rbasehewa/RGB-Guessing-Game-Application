var colors = [
    "rgb(255, 0, 0)",
    "rgb(0, 255, 0)",
    "rgb(0 , 0, 255)",
    "rgb(255, 255, 0)",
    "rgb(0, 255, 255)",
    "rgb(255, 0, 255)",
    "rgb(255, 255, 255)",
    "rgb(128, 255, 128)",
    "rgb(0, 0, 0)",
]

var squares = document.querySelectorAll(".square");
var pickedColor = pickedColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");

colorDisplay.textContent = pickedColor;


for (var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colors[i];

    squares[i].addEventListener("click", function () {

        var clickedColor = this.style.backgroundColor;

        if (clickedColor === pickedColor) {
            // alert("Correct!");
            messageDisplay.textContent = "Correct!";
            changeColors(clickedColor);
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
