let canvas = document.getElementById("art1");
let ctx = canvas.getContext("2d");

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

function drawCircle(centerX, centerY, radius){
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, 0, Math.PI*2);
    ctx.closePath();
    ctx.fill()
}

function drawCircle2(centerX, centerY, radius){
    ctx.beginPath();
    ctx.fillStyle = "green";
    ctx.arc(centerX, centerY, radius, 0, 3, Math.PI*2);
    ctx.closePath();
    ctx.fill();
}

drawCircle(250, 250, 100);
drawCircle2(450, 200, 30);

drawSquare(10,10,100,100);
drawSquare(100,100,12,100);
drawSquare(400,400,100,100);

drawRandomFigure(100, 400, 50, 50, 75, 50);
drawRandomFigure(300, 100, 522, 50, 25, 30);



let canvas1 = document.getElementById("art2");
let context = canvas1.getContext("2d");



function drawSquare1(start, stop, squareX, squareY){
    context.beginPath();
    context.moveTo(start,stop);
    context.lineTo(start + squareX, stop);
    context.lineTo(start + squareX, stop + squareY);
    context.lineTo(start, stop + squareY);
    context.lineTo(start, stop);
    context.fillStyle = "red";
    context.fill();
    context.stroke();
}

function drawRandomFigure1(start, stop, x1, y1, x2, y2){
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

drawSquare1(10,10,100,100);
drawSquare1(100,100,12,100);
drawSquare1(400,400,100,100);

drawRandomFigure1(100, 400, 50, 50, 75, 50);
drawRandomFigure1(300, 100, 522, 50, 25, 30);








