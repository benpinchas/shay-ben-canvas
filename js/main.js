console.log('loaded');

var gIsMouseDown = false;

var gCanvas;
var gCtx;

//test
var gLastGest = {};
var gCurrGest = {};

//prefs


function init() {
    gCanvas = document.querySelector('#myCanvas');
    gCtx = gCanvas.getContext('2d')

    gCanvas.width = window.innerWidth - 50
    gCanvas.height = window.innerHeight - 100
}



function onMouseDown(ev) {
    // console.log(ev);
    gIsMouseDown = true;

}


function onMouseMove(ev) {
    if (!gIsMouseDown) return;
   
    gLastGest.x = gCurrGest.x;
    gLastGest.y = gCurrGest.y;

    const offsetX = ev.offsetX;
    const offsetY = ev.offsetY;

    gCurrGest.x = offsetX;
    gCurrGest.y = offsetY;
    

    gCtx.save();
    gCtx.beginPath()
    draw(ev)

    gCtx.restore();

}


function onMouseUp(ev) {
    gIsMouseDown = false;
    gLastGest = {}
    gCurrGest = {}

}



function draw(ev) {
    ev.preventDefault();
    const offsetX = ev.offsetX
    const offsetY = ev.offsetY
    console.log(getPrefs().shape);
    switch (getPrefs().shape) {
        case 'rect':
            drawRect(offsetX, offsetY)
            break;
        case 'line':
            drawLine(offsetX, offsetY)
            break;
        case 'circle': 
            drawCircle(offsetX, offsetY)  
            break; 
    }
}



function drawRect(x, y) {

    var width = 100;
    var heigth = 50;

    var centerX = x - width / 2
    var centerY = y - heigth / 2

    // Matrix transformation
    gCtx.translate(centerX + width / 2, centerY + heigth / 2);
    var deg = Math.random() * 180;
    gCtx.rotate(deg * Math.PI / 180);
    gCtx.translate(-(centerX + width / 2), -(centerY + heigth / 2));

    //rectangle
    gCtx.rect(centerX, centerY, width, heigth);
    gCtx.stroke()
}


function drawLine() {
    gCtx.moveTo(gLastGest.x, gLastGest.y);
    gCtx.lineTo(gCurrGest.x, gCurrGest.y);
    gCtx.stroke();
}



function drawCircle(x, y) {
    gCtx.beginPath();
    gCtx.arc(x, y, 20, 0, 2 * Math.PI);
    gCtx.stroke();
}



function getGestDir() {
    console.log(gLastGest.x, gCurrGest.x);
    var diffX = (gCurrGest.x - gLastGest.x)
    var diffY = (gCurrGest.y - gLastGest.y)

    if (diffX > 0 && diffY > 0) return 90 * diffX * diffY

    // return diffX + diffY
    console.log('diffX', diffX, diffY);
}



function onChangeColor(color) {
    gCtx.strokeStyle = color;
}


function onSetShape(shape) {
    console.log('shape', shape);
    setShape(shape)
}



























/*
function drawRect(x, y) {

    // Non-rotated rectangle
    gCtx.fillStyle = 'gray';
    gCtx.fillRect(x, y, 140, 30);

    // Matrix transformation
    gCtx.translate(x+140/2, y+30/2);
    gCtx.rotate(Math.PI / 2);
    gCtx.translate(-(x+140/2), -(y+30/2));

    // Rotated rectangle
    gCtx.fillStyle = 'red';
    gCtx.fillRect(x, y, 140, 30);


    // var rectWidth = 100;
    // var rectHeight = 50;
    // // gCtx.arc(0, 0, 5, 0, 2 * Math.PI);
    // gCtx.translate(150, 75);
    // gCtx.rotate(Math.PI / 2);
    // gCtx.translate(-150, -75);


    // gCtx.rect(x - rectWidth / 2, y - rectHeight / 2, rectWidth, rectHeight)
    // // gCtx.fillStyle = 'orange'
    // // gCtx.fillRect(x,y, 150, 150)
    // gCtx.stroke()
    // // gCtx.fill(
    )















function drawRect(x, y) {

    var width = 140;
    var heigth = 30;


     // Matrix transformation
     gCtx.translate(x+width/2, y+heigth/2);
     gCtx.rotate(45* Math.PI/180);
     gCtx.translate(-(x+width/2), -(y+heigth/2));

     // Rotated rectangle
     gCtx.rect(x - width / 2, y - heigth / 2, width, heigth);
     gCtx.stroke()





}








} */




