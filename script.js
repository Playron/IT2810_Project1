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

function drawRandomFigure(start, stop, x1, y1, x2, y2){
    ctx.beginPath();
    ctx.moveTo(start, stop);
    ctx.lineTo(start + x1, stop + y1);
    ctx.lineTo(x1, stop + y1);
    ctx.lineTo(x1, y2);
    ctx.lineTo(x2, y2);
    ctx.lineTo(start, stop);
    ctx.fillStyle = "blue";
    ctx.fill()
    ctx.stroke();
}

drawSquare(10,10,100,100);
drawSquare(100,100,12,100);
drawSquare(400,400,100,100);

drawRandomFigure(100, 400, 50, 50, 75, 50);
drawRandomFigure(300, 100, 522, 50, 25, 30);
