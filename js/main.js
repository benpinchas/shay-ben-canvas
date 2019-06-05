console.log('loaded');

var gIsMouseDown = false;

var gCanvas;
var gCtx;

//test
var gLastGest = {};
var gCurrGest = {};

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
    getGestDir()

    draw(ev)
}


function onMouseUp(ev) {
    gIsMouseDown = false;
}



function init() {
    gCanvas = document.querySelector('#myCanvas');
    gCtx = gCanvas.getContext('2d')

    gCanvas.width = window.innerWidth - 50
    gCanvas.height = window.innerHeight - 100
}



function draw(ev) {
    ev.preventDefault();
    gCtx.save()
    const offsetX = ev.offsetX
    const offsetY = ev.offsetY
    console.log('offsetX, offsetY', offsetX, offsetY);
    // gCtx.save()
    drawRect(offsetX, offsetY)
    gCtx.restore()
}



function drawRect(x, y) {

    var width = 140;
    var heigth = 30;
    
    var gestX = x - width / 2
    var gestY = y - heigth / 2
    
    // Matrix transformation
     gCtx.translate(gestX+width/2, gestY+heigth/2);
     gCtx.rotate(45* Math.PI/180);
     gCtx.translate(-(gestX+width/2), -(gestY+heigth/2));
    

     // Rotated rectangle
     gCtx.rect(gestX, gestY , width, heigth);
     gCtx.stroke()

   

   

}



function getGestDir() {
    var diffX = (gCurrGest.x - gLastGest.x)
    var diffY = (gCurrGest.y - gLastGest.y)


    console.log('diffX', diffX, diffY);
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




