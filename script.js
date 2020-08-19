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
    context.fill()
}

function drawCircle2(context, centerX, centerY, radius) {
    context.beginPath();
    context.fillStyle = "green";
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


drawRectangle(ctx, "#EE4C7C", 116, 58, 116, 232);
drawTriangle(ctx, "#45A29E", 175, 290, 58, 55);
drawSquare(ctx, "#D79922", 200, 35, 75, 75);
drawCircle(ctx, "#C5CBE3", 237, 200, 40);



let canvas1 = document.getElementById("art2");
let ctx2 = canvas1.getContext("2d");


drawSquare(ctx2, 10, 10, 100, 100);
drawSquare(ctx2, 100, 100, 12, 100);
drawSquare(ctx2, 400, 400, 100, 100);

drawRandomFigure(ctx2, 100, 400, 50, 50, 75, 50);
drawRandomFigure(ctx2, 300, 100, 522, 50, 25, 30);