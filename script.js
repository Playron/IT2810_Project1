/*Making a Canvas element*/
let canvas = document.getElementById("art1");
let ctx = canvas.getContext("2d");

/*Simple function that draw a Square. Simply lets me choose position and color*/
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
/*Function draws a random figure. This is fun to use when you don't want standard figures. */
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

/*Draws a circle with a color color. Also have to choose witch canvas you will draw it on */
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
/*Instead of using rect function i built my own. Lets me specify color and makes interactivity easier */
function drawRectangle(context, color, start, stop, x, y) {
    context.clearRect(0, 0, canvas.width, canvas.height);
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

function drawArc(context, color, startX, startY, radius) {
    context.beginPath();
    context.arc(startX, startY, 70, 0, Math.PI, false);
    context.moveTo(startX + 70, startY);
    context.ellipse(startX, startY, 70, 35, 0, 0, Math.PI);
    context.fillStyle = color;
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
drawCircle(ctx, "#41B3A3", 100, 200, 50);


//Make the canvas interactive. Simply change all color to a random color, and change size of the circle.
//The rectangle is duplicating itself to add a color stack.
let startX = 116;
let startY = 35;
let circleRadius = 35;
let circleX = 237;
let circleY = 200;
let circle2X = 100;
let circle2Y = 200;
let rectStartX = 116;
let rectStartY = 58;
let rectX = 116;
let rectY = 232;
let triangleX = 175;
let triangleY = 290;
let squareX = 200;
let squareY = 35;
let triangle2X = 116;
let triangle2Y = 35;

/*EventListener that will change the canvas image by clicking on it*/
$(document).ready(function () {
    $('#art1').on('click', function () {
        drawRectangle(ctx, randomColorSelector(), rectStartX, rectStartY, rectX, rectY);
        drawTriangle(ctx, randomColorSelector(), 175, 290, 58, 55);
        drawTriangle(ctx, randomColorSelector(), startX, startY, -50, 70);
        drawSquare(ctx, randomColorSelector(), 200, 35, 75, 75);
        drawCircle(ctx, randomColorSelector(), 237, 200, circleRadius);
        drawCircle(ctx, randomColorSelector(), 100, 200, 50);
        draw(ctx);
        i++;
        /*The code from here will change the appearance of teh canvas-figures.
        This values can be changed to change the interactivity effect.
        */
        /*circleRadius += 4;
        rectStartX -= 2;
        rectStartY += 4;
        rectX += 2;
        rectY += 2;
        startX += 2;
        startY += 2;
        if (circleRadius >= 95) {
            circleRadius = 95;
        }
        if (rectStartY >= 100) {
            rectStartY -= 30;
            rectStartX += 80;
        }*/
    });
});
/*Listens to SVG-window and change all colors if clicked*/
$(document).ready(function () {
    $('#svg-art').on('click', function () {
        $svg = $("#svg-art");
        $("#svg-rect", $svg).attr('style', "fill:" + randomColorSelector());
        $("#triangle1", $svg).attr('style', "fill:" + randomColorSelector());
        $("#triangle2", $svg).attr('style', "fill:" + randomColorSelector());
        $("#square", $svg).attr('style', "fill:" + randomColorSelector());
        $("#circle1", $svg).attr('style', "fill:" + randomColorSelector());
        $("#circl2", $svg).attr('style', "fill:" + randomColorSelector());
    });
});

/*Function that make it possible to show or hide documentation*/
let show = "less";
$(document).ready(function () {
    $("#show-more").hide();
    $('.btn').on("click", function () {
        if (show == "less") {
            $("#show-more").show();
            $('html, body').scrollTop($("#show-more").offset().top);
            show = "more"
            $("#btn1").text("Show less");
        } else {
            $("#show-more").hide(1000);
            show = "less";
            $("#btn1").text("Show more");
        }
    });
});


let i = 0;
let id;

function draw(context) {
    id = requestAnimationFrame(draw);
    drawRectangle(ctx, randomColorSelector(), rectStartX, rectStartY, rectX, rectY);
    drawTriangle(ctx, randomColorSelector(), triangleX, triangleY, 58, 55);
    drawTriangle(ctx, randomColorSelector(), triangle2X, triangle2Y, -50, 70);
    drawSquare(ctx, randomColorSelector(), squareX, squareY, 75, 75);
    drawCircle(ctx, randomColorSelector(), circleX, circleY, 35);
    drawCircle(ctx, randomColorSelector(), circle2X, circle2Y, 50);
    if (i == 1) {
        rectStartX -= 0.1;
    }
    if (i == 2) {
        rectStartX += 0.1;
        triangleY -= 0.1;
        rectStartX += 0.2;
        rectY += 0.2;
    }
    if (i == 3) {
        rectStartX -= 0.1;
        triangleY += 0.1;
        circleY -= 0.1;
        circleX -= 0.1;
    }
    if (i == 4) {
        rectStartX -= 0.1;
        triangleY += 0.1;
        circleY += 0.1;
        circleX += 0.1;
        squareX -= 0.5;
        squareY += 0.5;
        triangle2X += 0.5;
        triangle2Y + -1;
    }
    if (i == 5) {
        rectStartX += 0.1;
        triangleY -= 0.1;
        circleY -= 0.1;
        circleX -= 0.1;
        circle2Y -= 0.1;
        triangle2X -= 0.5;
        triangle2Y += 0.5;
    }
    if (i == 8) {
        i = 0;
        cancelAnimationFrame(id);
    }
}

$(document).ready(function () {
    $('#art1').mouseleave(function () {
        drawRectangle(ctx, randomColorSelector(), rectStartX, rectStartY, rectX, rectY);
        drawTriangle(ctx, randomColorSelector(), triangleX, triangleY, 58, 55);
        drawTriangle(ctx, randomColorSelector(), 116, 35, -50, 70);
        drawSquare(ctx, randomColorSelector(), 200, 35, 75, 75);
        drawCircle(ctx, randomColorSelector(), circleX, circleY, 35);
        drawCircle(ctx, randomColorSelector(), circle2X, circle2Y, 50);
        startX = 116;
        startY = 35;
        circleRadius = 35;
        circleX = 237;
        circleY = 200;
        circle2X = 100;
        circle2Y = 200;
        rectStartX = 116;
        rectStartY = 58;
        rectX = 116;
        rectY = 232;
        triangleX = 175;
        triangleY = 290;
        squareX = 200;
        squareY = 35;
        triangle2X = 116;
        triangle2Y = 35;
        for (let j = 0; j <= 7; j++) {
            if (j == i) {
                cancelAnimationFrame(id);
            }
        }
    });
});