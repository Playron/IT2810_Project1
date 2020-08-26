let canvas = document.getElementById("art1");
let ctx = canvas.getContext("2d");

function drawSquare(context, color, start, stop, squareX, squareY) {
    context.beginPath();
    context.moveTo(start, stop);
    context.lineTo(start + squareX, stop);
    context.lineTo(start + squareX, stop + squareY);
    context.lineTo(start, stop + squareY);
    context.lineTo(start, stop);
    context.fillStyle = color;
    context.fill();
    context.closePath();
    context.stroke();
}

function drawRandomFigure(context, start, stop, x1, y1, x2, y2) {
    context.beginPath();
    context.moveTo(start, stop);
    context.lineTo(start + x1, stop + y1);
    context.lineTo(x1, stop + y1);
    context.lineTo(x1, y2);
    context.lineTo(x2, y2);
    context.lineTo(start, stop);
    context.fillStyle = "blue";
    context.fill()
    context.stroke();
}


function drawCircle(context, color, centerX, centerY, radius) {
    context.beginPath();
    context.fillStyle = color;
    context.arc(centerX, centerY, radius, 0, Math.PI * 2);
    context.closePath();
    context.fill();
}

function drawCircle2(context, color, centerX, centerY, radius) {
    context.beginPath();
    context.fillStyle = color;
    context.arc(centerX, centerY, radius, 0, 3, Math.PI * 2);
    context.closePath();
    context.fill();
}

function drawRectangle(context, color, start, stop, x, y) {
    context.beginPath();
    context.moveTo(start, stop);
    context.lineTo(start + x, stop);
    context.lineTo(start + x, stop + y);
    context.lineTo(start, stop + y);
    context.closePath();
    context.fillStyle = color;
    context.fill();
    context.stroke();
}

function drawTriangle(context, color, startX, startY, x, y) {
    context.beginPath();
    context.moveTo(startX, startY);
    context.lineTo(startX + x, startY + y);
    context.lineTo(startX - x, startY + y);
    context.closePath();
    context.fillStyle = color;
    context.fill();
    context.stroke();
}

function drawArc(context, color, startX, startY, radius){
    context.beginPath();
    context.arc(startX, startY, 70, 0, Math.PI, false);
    context.moveTo(startX+70, startY);
    context.ellipse(startX, startY, 70, 35, 0, 0, Math.PI);
    //context.closePath();
    context.fillStyle = color;
    //context.fill();
    context.stroke();

}

//Function that creates a random rgb color using the Math.random function.
function randomColorSelector() {
    let red = Math.random() * (255 - 0);
    let green = Math.random() * (255 - 0);
    let blue = Math.random() * (255 - 0);
    return ["rgb(", red, ",", green, ",", blue, ")"].join("");

}

//Draws the initial artpiece
drawRectangle(ctx, "#EE4C7C", 116, 58, 116, 232);
drawTriangle(ctx, "#45A29E", 175, 290, 58, 55);
drawTriangle(ctx, "#8860D0", 116, 35, -50, 70);
drawSquare(ctx, "#D79922", 200, 35, 75, 75);
drawCircle(ctx, "#C5CBE3", 237, 200, 35);
drawCircle2(ctx, "#41B3A3", 100 , 200, 50);
drawArc(ctx,"blue", 175, 220);


//Make the canvas interactive. Simply change all color to a random color, and change size of the circle.
//The rectangle is duplicating itself to add a color stack.
let circleRadius = 35;
let rectStartX = 116;
let rectStartY = 58;
let rectX = 116;
let rectY = 232;

/*canvas.addEventListener('click',
    function () {
        drawRectangle(ctx, randomColorSelector(), rectStartX, rectStartY, rectX, rectY);
        drawTriangle(ctx, randomColorSelector(), 175, 290, 58, 55);
        drawTriangle(ctx, randomColorSelector(), 116, 35, -50, 70);
        drawSquare(ctx, randomColorSelector(), 200, 35, 75, 75);
        drawCircle(ctx, randomColorSelector(), 237, 200, circleRadius);
        circleRadius += 4;
        rectStartX -= 2;
        rectStartY += 4;
        rectX += 2;
        rectY += 2;
        console.log(circleRadius);
        console.log(rectStartY);
        if (circleRadius > 95) {
            circleRadius = 95;
        }
        if(rectStartY > 100){
            rectStartY -= 30;
            rectStartX += 80;
        }
    });*/



$(document).ready(function () {
    $('#art1').on('click', function () {
        drawRectangle(ctx, randomColorSelector(), rectStartX, rectStartY, rectX, rectY);
        drawTriangle(ctx, randomColorSelector(), 175, 290, 58, 55);
        drawTriangle(ctx, randomColorSelector(), 116, 35, -50, 70);
        drawSquare(ctx, randomColorSelector(), 200, 35, 75, 75);
        drawCircle(ctx, randomColorSelector(), 237, 200, circleRadius);
        drawCircle2(ctx, randomColorSelector(), 100 , 200, 50);
        drawArc(ctx,"blue", 175, 220);
        circleRadius += 4;
        rectStartX -= 2;
        rectStartY += 4;
        rectX += 2;
        rectY += 2;
        console.log(circleRadius);
        console.log(rectStartY);
        if (circleRadius >= 95) {
            circleRadius = 95;
        }
        if (rectStartY >= 100) {
            rectStartY -= 30;
            rectStartX += 80;
        }
    });
});

