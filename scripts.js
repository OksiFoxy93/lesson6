/*
var canvas = document.getElementById('canvasID');
var ctx = canvas.getContext('2d');
*/


function Figure(x, y, color) {
    this.x = x;
    this.y = y;
    this.color = color;
}

function Rect(x, y, w, h, color){
    Figure.call(this, x, y, color);
    this.w = w;
    this.h = h;
    this.draw = function() {
        ctx.fillStyle = color;
        ctx.fillRect(x, y, w, h);
    }
}

function Line(x, y, x2, y2, color){
    Figure.call(this, x, y, color);
    this.x2 = x2;
    this.y2 = y2;
    this.draw = function() {
        ctx.fillStyle = color;
        ctx.moveTo(x, y);
        ctx.lineTo(x2, y2);
        ctx.stroke();
    }
}

function Circle(x, y, r, color){
    Figure.call(this, x, y, color);
    this.r = r;
    this.draw = function() {
        ctx.fillStyle = color;
        ctx.beginPath ();
        ctx.arc (x, y, r, 0, Math.PI * 2, false);
        ctx.fill();
    }
}

var rect = new Rect(260, 130, 60, 120, "blue");
var line = new Line(50, 150, 200, 200, 'red'); // x1, y1, x2, y2, color
var circle = new Circle(220, 520, 150, 'green'); // x, y, r, color



function Canvas(canvasID) {
    var canvas = document.getElementById(canvasID);
    var ctx = canvas.getContext('2d');
    function add(fig) {
        fig.draw();
    }
}

var drawArea = new Canvas('canvasID');
drawArea.add(line);
drawArea.add(circle, rect);






