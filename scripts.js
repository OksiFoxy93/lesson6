function Figure(x, y, color) {
    this.x = x;
    this.y = y;
    this.color = color;
}

function Rect(x, y, w, h, color){
    Figure.call(this, x, y, color);
    this.w = w;
    this.h = h;
    this.draw = function(ctx) {
        ctx.fillStyle = color;
        ctx.fillRect(x, y, w, h);
    }
}

function Line(x, y, x2, y2, color){
    Figure.call(this, x, y, color);
    this.x2 = x2;
    this.y2 = y2;
    this.draw = function(ctx) {
        ctx.strokeStyle = color;
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(x2, y2);
        ctx.closePath();
        ctx.stroke();
    }
}

function Circle(x, y, r, color){
    Figure.call(this, x, y, color);
    this.r = r;
    this.draw = function(ctx) {
        ctx.fillStyle = color;
        ctx.beginPath();
        ctx.arc (x, y, r, 0, Math.PI * 2, false);
        ctx.fill();
    }
}

var rect1 = new Rect(900, 300, 220, 100, 'rgba(235, 205, 232, 0.7)');
var rect2 = new Rect(850, 320, 150, 300, 'rgba(207, 255, 226, 0.7)');
var rect3 = new Rect(1060, 360, 150, 100, 'rgba(251, 247, 189, 0.7)');
var line1 = new Line(100, 650, 500, 550, 'grey');
var line2 = new Line(100, 680, 500, 580, 'grey');

// Это те самые зубчатые линии, написала просто, чтобы наглядно понять как меняются параметры
var line3 = new Line(0, 0, 30, 30, 'red');
var line4 = new Line(30, 30, 60, 0, 'red');
var line5 = new Line(60, 0, 90, 30, 'red');
var line6 = new Line(90, 30, 120, 0, 'red');

var circle1 = new Circle(250, 300, 130, 'rgba(207, 234, 255, 0.7)');
var circle2 = new Circle(190, 200, 65, 'rgba(207, 234, 255, 0.7)');


function Canvas(canvasID) {
    var canvas = document.getElementById(canvasID);
    this.ctx = canvas.getContext('2d');
    this.add = function (...fig) {
        fig.forEach((element) => element.draw(this.ctx));
    }
}

var drawArea = new Canvas('canvasID');
drawArea.add(line1, line2, line3, line4, line5, line6);
drawArea.add(circle1, circle2);
drawArea.add(rect2, rect3, rect1);


//
for(let i = 0; i < 10; i++) {
    line3.map((item) => {
        return{
            ...item,
            x: this.x2,
            y: this.y2,
            x2: item.x2 + 30,
            y2: item.y2 + 20,
        }
    })
}





