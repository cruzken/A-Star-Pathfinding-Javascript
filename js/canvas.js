var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
var width = 500;
var height = 500;
var mapPoints = createMap();
console.log(mapPoints);



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
  makeWall(mouseCoords.x, mouseCoords.y);
  /*
  ctx.rect((mouseCoords.x * 50), (mouseCoords.y * 50), 50, 50);
  ctx.fillStyle = 'red';
  ctx.fill();
  ctx.stroke();
  */

});

function getMousePos(canvas, evt) {
  var rect = c.getBoundingClientRect();
  return {
    x: Math.floor((evt.clientX - rect.left) / 50),
    y: Math.floor((evt.clientY - rect.top) / 50)
  };
}

function makeWall(x, y) {
  for (var i = 0; i < mapPoints.length; i++) {
    if (mapPoints[i].x === x && mapPoints[i].y === y) {
      if (mapPoints[i].type === 'f') {
        mapPoints[i].type = 'w';
        ctx.beginPath();
        ctx.rect((x * 50), (y * 50), 50, 50);
        ctx.fillStyle = 'black';
        ctx.fill();
        ctx.stroke();
        break;
      } else if (mapPoints[i].type === 'w'){
        ctx.beginPath();
        mapPoints[i].type = 'f';
        ctx.rect((x * 50), (y * 50), 50, 50);
        ctx.fillStyle = 'white';
        ctx.fill();
        ctx.stroke();
        break;
      }
    }
  }
}

function makeFloor(x, y) {
  for (var i = 0; i < mapPoints.length; i++) {
    if (mapPoints[i].x === x && mapPoints[i].y === y) {
      if ((!mapPoints[i].type) || mapPoints[i].type !== 'f') {
        mapPoints[i].type = 'f';
      }
    }
  }
}

function createMap() {
  var map = [];
  for (var i = 0; i < 10; i++) {
    for (var j = 0; j < 10; j++) {
      map.push({x: i, y: j, type: 'f'});
    }
  }
  return map;
}

