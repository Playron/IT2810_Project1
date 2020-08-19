let canvas = document.getElementById("art1");
let ctx = canvas.getContext("2d");

function drawSquare(context, start, stop, squareX, squareY) {
    context.beginPath();
    context.moveTo(start, stop);
    context.lineTo(start + squareX, stop);
    context.lineTo(start + squareX, stop + squareY);
    context.lineTo(start, stop + squareY);
    context.lineTo(start, stop);
    context.fillStyle = "red";
    context.fill();
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

function drawCircle(context, centerX, centerY, radius) {
    context.beginPath();
    context.arc(centerX, centerY, radius, 0, Math.PI * 2);
    context.closePath();
    context.fill()
}

function drawCircle2(context, centerX, centerY, radius) {
    context.beginPath();
    context.fillStyle = "green";
    context.arc(centerX, centerY, radius, 0, 3, Math.PI * 2);
    context.closePath();
    context.fill();
}

drawCircle(ctx, 250, 250, 100);
drawCircle2(ctx, 450, 200, 30);

drawSquare(ctx, 10, 10, 100, 100);
drawSquare(ctx, 100, 100, 12, 100);
drawSquare(ctx, 400, 400, 100, 100);

drawRandomFigure(ctx, 100, 400, 50, 50, 75, 50);
drawRandomFigure(ctx, 300, 100, 522, 50, 25, 30);



let canvas1 = document.getElementById("art2");
let ctx2 = canvas1.getContext("2d");


drawSquare(ctx2, 10, 10, 100, 100);
drawSquare(ctx2, 100, 100, 12, 100);
drawSquare(ctx2, 400, 400, 100, 100);

drawRandomFigure(ctx2, 100, 400, 50, 50, 75, 50);
drawRandomFigure(ctx2, 300, 100, 522, 50, 25, 30);