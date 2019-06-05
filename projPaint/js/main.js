'use strict'
console.log('CANVAS!')

let canvas
let ctx

let currElement = 'triangle'

function changeEl(elName) {
    currElement = elName
}

function init() {
    canvas = document.querySelector('#my-canvas');
    ctx = canvas.getContext('2d')

    canvas.width = window.innerWidth - 50
    canvas.height = window.innerHeight - 100

    // ctx.fillStyle = 'green'
    // ctx.save()
    // drawTriangle()
    // ctx.restore()
    // drawRect()
    // drawArc()
    // clearCanvas()

    // drawImg()
    // drawText('HELLO CANVAS')
}

function draw(ev) {
    ev.preventDefault();
    console.log('ben');
    console.log(ev)
    // ctx.save()
    // // const offsetX = ev.offsetX
    // // const offsetY = ev.offsetY
    // const {offsetX, offsetY} = ev
    // switch (currElement) {
    //     case 'triangle':
    //         drawTriangle()
    //         break;
    //     case 'rect':
    //         drawRect(offsetX, offsetY)
    //         break;
    //     case 'text':
    //         drawText('test',offsetX, offsetY)
    //         break;
    // }
    // ctx.restore()
}



function dragStart(event) {
    console.log('ee');
    event.dataTransfer.setData("Text", event.target.id);
    document.getElementById("demo").innerHTML = "Started to drag the p element";
  }
  
  function dragEnd(event) {
    document.getElementById("demo").innerHTML = "Finished dragging the p element.";
    console.log('ee');
}
  
  function allowDrop(event) {
    event.preventDefault();
    console.log('ee');
  }
  
  function drop(event) {
    event.preventDefault();
    var data = event.dataTransfer.getData("Text");
    event.target.appendChild(document.getElementById(data));
    console.log('ee');
  }







function downloadCanvas(elLink) {
    const data = canvas.toDataURL()
    elLink.href = data



    elLink.download = 'my-img.jpg'
}

function drawImg() {
    const img = document.querySelector('img');
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height)

}

function clearCanvas() {
    ctx.fillStyle = 'yellow'
    ctx.fillRect(0, 0, canvas.width, canvas.height)
    ctx.clearRect(50, 50, 100, 100)
}

function drawText(txt,x,y) {
    ctx.fillStyle = 'white'
    ctx.strokeStyle = 'green'
    ctx.font = "17px Arial";
    // ctx.fillText(txt, x, y);
    ctx.strokeText(txt, x, y);
}


function drawArc() {
    ctx.beginPath();
    ctx.arc(100, 75, 50, 0, 1 * Math.PI);
    ctx.stroke();
}

function drawRect(x,y) {
    ctx.rect(x,y, 150, 150)
    ctx.fillStyle = 'orange'
    ctx.fillRect(x,y, 150, 150)
    ctx.stroke()
    ctx.fill()
}



function drawTriangle() {
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(300, 150);
    ctx.lineTo(100, 100);
    ctx.closePath()

    ctx.lineWidth = 5;
    ctx.strokeStyle = 'blue'
    ctx.fillStyle = '#ff0000'

    ctx.stroke();
    ctx.fill()

}

