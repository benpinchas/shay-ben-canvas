function drawRect() {
    var canvas = document.getElementById("myCanvas");
    var context = canvas.getContext("2d");

    context.fillStyle = "blue";
    context.fillRect(25, 25, 150, 100);
}



function drawRect(x,y) {
    ctx.rect(x,y, 150, 150)
    ctx.fillStyle = 'orange'
    ctx.fillRect(x,y, 150, 150)
    ctx.stroke()
    ctx.fill()
}