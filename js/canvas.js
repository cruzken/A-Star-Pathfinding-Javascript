var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
var width = 500;
var height = 500;


for (var i = 0; i <= width; i+= 50) {
  ctx.moveTo(i,0);
  ctx.lineTo(i,height);
  ctx.stroke();
}

for (var j = 0; j <= height; j+= 50) {
  ctx.moveTo(0,j);
  ctx.lineTo(width,j);
  ctx.stroke();
}

c.addEventListener('click', function(event) {
  var mouseCoords = getMousePos(c, event);
  console.log('x: ' + mouseCoords.x + ' y: ' + mouseCoords.y);
  ctx.rect((mouseCoords.x * 50), (mouseCoords.y * 50), 50, 50);
  ctx.fillStyle = 'red';
  ctx.fill();
  ctx.stroke();
});

function getMousePos(canvas, evt) {
  var rect = c.getBoundingClientRect();
  return {
    x: Math.floor((evt.clientX - rect.left) / 50),
    y: Math.floor((evt.clientY - rect.top) / 50)
  };
}