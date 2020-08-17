let canvas = document.getElementById("art1");
let ctx = canvas.getContext("2d");

let squareX;
let squareY;


function drawSquare(start, stop, squareX, squareY){
    ctx.beginPath();
    ctx.moveTo(start,stop);
    ctx.lineTo(start + squareX, stop);
    ctx.lineTo(start + squareX, stop + squareY);
    ctx.lineTo(start, stop + squareY);
    ctx.lineTo(start, stop);
    ctx.fillStyle = "red";
    ctx.fill();
    ctx.stroke();
}

function drawRandomFigure(start, stop, x, y, z){
    ctx.beginPath();
    ctx.moveTo(start, stop);
}

drawSquare(10,10,100,100);
drawSquare(100,100,12,100);
drawSquare(400,400,100,100);
