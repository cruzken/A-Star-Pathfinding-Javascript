/*var map = [{x: 0, y: 0, type: 'f'},
{x: 0, y: 1, type: 'f'},
{x: 0, y: 2, type: 'w'},
{x: 0, y: 3, type: 'w'},
{x: 0, y: 4, type: 'w'},
{x: 0, y: 5, type: 'w'},
{x: 0, y: 6, type: 'w'},
{x: 0, y: 7, type: 'w'},
{x: 0, y: 8, type: 'w'},
{x: 1, y: 0, type: 'w'},
{x: 1, y: 1, type: 'f'},
{x: 1, y: 2, type: 'f'},
{x: 1, y: 3, type: 'f'},
{x: 1, y: 4, type: 'f'},
{x: 1, y: 5, type: 'f'},
{x: 1, y: 6, type: 'w'},
{x: 1, y: 7, type: 'w'},
{x: 1, y: 8, type: 'w'},
{x: 2, y: 0, type: 'w'},
{x: 2, y: 1, type: 'f'},
{x: 2, y: 2, type: 'w'},
{x: 2, y: 3, type: 'w'},
{x: 2, y: 4, type: 'w'},
{x: 2, y: 5, type: 'w'},
{x: 2, y: 6, type: 'w'},
{x: 2, y: 7, type: 'f'},
{x: 2, y: 8, type: 'w'},
{x: 3, y: 0, type: 'w'},
{x: 3, y: 1, type: 'f'},
{x: 3, y: 2, type: 'f'},
{x: 3, y: 3, type: 'f'},
{x: 3, y: 4, type: 'f'},
{x: 3, y: 5, type: 'f'},
{x: 3, y: 6, type: 'f'},
{x: 3, y: 7, type: 'f'},
{x: 3, y: 8, type: 'f'},
{x: 4, y: 0, type: 'w'},
{x: 4, y: 1, type: 'f'},
{x: 4, y: 2, type: 'f'},
{x: 4, y: 3, type: 'f'},
{x: 4, y: 4, type: 'f'},
{x: 4, y: 5, type: 'f'},
{x: 4, y: 6, type: 'w'},
{x: 4, y: 7, type: 'w'},
{x: 4, y: 8, type: 'f'},
{x: 5, y: 0, type: 'w'},
{x: 5, y: 1, type: 'f'},
{x: 5, y: 2, type: 'f'},
{x: 5, y: 3, type: 'f'},
{x: 5, y: 4, type: 'w'},
{x: 5, y: 5, type: 'f'},
{x: 5, y: 6, type: 'f'},
{x: 5, y: 7, type: 'w'},
{x: 5, y: 8, type: 'f'},
{x: 6, y: 0, type: 'w'},
{x: 6, y: 1, type: 'f'},
{x: 6, y: 2, type: 'w'},
{x: 6, y: 3, type: 'w'},
{x: 6, y: 4, type: 'w'},
{x: 6, y: 5, type: 'w'},
{x: 6, y: 6, type: 'w'},
{x: 6, y: 7, type: 'w'},
{x: 6, y: 8, type: 'f'},
{x: 7, y: 0, type: 'w'},
{x: 7, y: 1, type: 'f'},
{x: 7, y: 2, type: 'w'},
{x: 7, y: 3, type: 'w'},
{x: 7, y: 4, type: 'w'},
{x: 7, y: 5, type: 'w'},
{x: 7, y: 6, type: 'f'},
{x: 7, y: 7, type: 'w'},
{x: 7, y: 8, type: 'f'},
{x: 8, y: 0, type: 'w'},
{x: 8, y: 1, type: 'f'},
{x: 8, y: 2, type: 'f'},
{x: 8, y: 3, type: 'f'},
{x: 8, y: 4, type: 'f'},
{x: 8, y: 5, type: 'w'},
{x: 8, y: 6, type: 'f'},
{x: 8, y: 7, type: 'w'},
{x: 8, y: 8, type: 'f'},
{x: 9, y: 0, type: 'w'},
{x: 9, y: 1, type: 'w'},
{x: 9, y: 2, type: 'w'},
{x: 9, y: 3, type: 'w'},
{x: 9, y: 4, type: 'f'},
{x: 9, y: 5, type: 'f'},
{x: 9, y: 6, type: 'f'},
{x: 9, y: 7, type: 'w'},
{x: 9, y: 8, type: 'f'},
{x: 10, y: 0, type: 'f'},
{x: 10, y: 1, type: 'f'},
{x: 10, y: 2, type: 'f'},
{x: 10, y: 3, type: 'f'},
{x: 10, y: 4, type: 'w'},
{x: 10, y: 5, type: 'w'},
{x: 10, y: 6, type: 'w'},
{x: 10, y: 7, type: 'w'},
{x: 10, y: 8, type: 'f'},
{x: 11, y: 0, type: 'f'},
{x: 11, y: 1, type: 'f'},
{x: 11, y: 2, type: 'f'},
{x: 11, y: 3, type: 'f'},
{x: 11, y: 4, type: 'f'},
{x: 11, y: 5, type: 'f'},
{x: 11, y: 6, type: 'f'},
{x: 11, y: 7, type: 'f'},
{x: 11, y: 8, type: 'f'},
{x: 12, y: 0, type: 'w'},
{x: 12, y: 1, type: 'w'},
{x: 12, y: 2, type: 'f'},
{x: 12, y: 3, type: 'w'},
{x: 12, y: 4, type: 'f'},
{x: 12, y: 5, type: 'w'},
{x: 12, y: 6, type: 'w'},
{x: 12, y: 7, type: 'w'},
{x: 12, y: 8, type: 'w'},
{x: 13, y: 0, type: 'w'},
{x: 13, y: 1, type: 'w'},
{x: 13, y: 2, type: 'f'},
{x: 13, y: 3, type: 'w'},
{x: 13, y: 4, type: 'f'},
{x: 13, y: 5, type: 'w'},
{x: 13, y: 6, type: 'w'},
{x: 13, y: 7, type: 'w'},
{x: 13, y: 8, type: 'w'},
{x: 14, y: 0, type: 'w'},
{x: 14, y: 1, type: 'w'},
{x: 14, y: 2, type: 'f'},
{x: 14, y: 3, type: 'w'},
{x: 14, y: 4, type: 'f'},
{x: 14, y: 5, type: 'w'},
{x: 14, y: 6, type: 'w'},
{x: 14, y: 7, type: 'w'},
{x: 14, y: 8, type: 'w'},
{x: 15, y: 0, type: 'w'},
{x: 15, y: 1, type: 'w'},
{x: 15, y: 2, type: 'f'},
{x: 15, y: 3, type: 'w'},
{x: 15, y: 4, type: 'f'},
{x: 15, y: 5, type: 'w'},
{x: 15, y: 6, type: 'f'},
{x: 15, y: 7, type: 'f'},
{x: 15, y: 8, type: 'w'},
{x: 16, y: 0, type: 'w'},
{x: 16, y: 1, type: 'w'},
{x: 16, y: 2, type: 'f'},
{x: 16, y: 3, type: 'f'},
{x: 16, y: 4, type: 'w'},
{x: 16, y: 5, type: 'f'},
{x: 16, y: 6, type: 'f'},
{x: 16, y: 7, type: 'w'},
{x: 16, y: 8, type: 'w'},
{x: 17, y: 0, type: 'w'},
{x: 17, y: 1, type: 'w'},
{x: 17, y: 2, type: 'f'},
{x: 17, y: 3, type: 'f'},
{x: 17, y: 4, type: 'f'},
{x: 17, y: 5, type: 'f'},
{x: 17, y: 6, type: 'f'},
{x: 17, y: 7, type: 'w'},
{x: 17, y: 8, type: 'w'},
{x: 18, y: 0, type: 'w'},
{x: 18, y: 1, type: 'w'},
{x: 18, y: 2, type: 'f'},
{x: 18, y: 3, type: 'f'},
{x: 18, y: 4, type: 'f'},
{x: 18, y: 5, type: 'f'},
{x: 18, y: 6, type: 'f'},
{x: 18, y: 7, type: 'w'},
{x: 18, y: 8, type: 'w'},
{x: 19, y: 0, type: 'w'},
{x: 19, y: 1, type: 'w'},
{x: 19, y: 2, type: 'w'},
{x: 19, y: 3, type: 'w'},
{x: 19, y: 4, type: 'w'},
{x: 19, y: 5, type: 'w'},
{x: 19, y: 6, type: 'w'},
{x: 19, y: 7, type: 'w'},
{x: 19, y: 8, type: 'w'}];
*/

function makePath(x1, y1, x2, y2, map) {
//initialize the open list
//initialize the closed list
//put the starting node on the open list (you can leave its f at zero)
    var start = {x: x1, y: y1, f: 0, g: 0, parent: 'origin'};
    var target = {x: x2, y: y2};
    var openList = [];
    var closedList = [];
    openList.push(start);
    do {  
        //while the open list is not empty
        //    find the node with the least f on the open list, call it "q"
        //    pop q off the open list
        var q = openList.splice(lowestF(openList), 1)[0];
        //    generate q's 8 successors and set their parents to q
        var qSuccessors = findPathAdjacent(q.x, q.y, map);
        //    for each successor
        //console.log(qSuccessors);
        for (var i = 0; i < qSuccessors.length; i++) {
        //      if successor is the goal, stop the search    
            if (qSuccessors[i].x === target.x && qSuccessors[i].y === target.y) {
                console.log('Path found');
                openList = [];
                break;
            }
        //        successor.g = q.g + distance between successor and q
        //        successor.h = distance from goal to successor
        //        successor.f = successor.g + successor.h
            qSuccessors[i].g = q.g + 1;
            qSuccessors[i].h = manhattanDistance(qSuccessors[i].x, qSuccessors[i].y, target.x, target.y);
            qSuccessors[i].f = qSuccessors[i].g + qSuccessors[i].h;
            qSuccessors[i].parent = {x: q.x, y: q.y};
        //       if a node with the same position as successor is in the OPEN list \
        //            which has a lower f than successor, skip this successor
        //        if a node with the same position as successor is in the CLOSED list \ 
        //            which has a lower f than successor, skip this successor
        //        otherwise, add the node to the open list
            if (lowestFCheck(qSuccessors[i], openList, closedList)) {
                openList.push(qSuccessors[i]);
            }
        }
        //    push q on the closed list
        closedList.push(q);
    } while (openList.length > 0);
    return optimalPath(closedList);
}


function findPathAdjacent(x, y, arr) {
    var adjacentTiles = [{x: (x - 1), y: y},
                        {x: (x + 1), y: y},
                        {x: x, y: (y - 1)},
                        {x: x, y: (y + 1)}]
                            .filter(function(item) {
                                if ((item.x > -1 && item.x < 20) && (item.y > -1 && item.y < 9)) {
                                    return item;}});
    return adjacentTiles.filter(function(item) {
        for (var i = 0; i < arr.length; i++) {
            if (item.x === arr[i].x && item.y === arr[i].y) {
                if (arr[i].type === 'f') {
                    return item;
                }
            }
        }
    });
}

function lowestF(arr) {
    var lowestIndex;
    arr.reduce(function(a, b, index){
        if (a.f < b.f) {
            return a;
        } else {
            lowestIndex = index;
            return b;
        }
    });
    return lowestIndex;
}

function lowestFCheck(node, openL, closedL) {
    //debugger;
    for (var i = 0; i < openL.length; i++) {
        if (node.x === openL[i].x && node.y === openL[i].y) {
            if (node.f >= openL[i].f) {
                return false;
            }
        }
    }
    for (var j = 0; j < closedL.length; j++) {
        if (node.x === closedL[j].x && node.y === closedL[j].y)
            if (node.f >= closedL[j].f) {
                return false;
            }
    }
    return true;
}

function manhattanDistance(x1, y1, x2, y2) {
    return Math.abs(x2 - x1) + Math.abs(y2 - y1);
}

function optimalPath(arr) {
    for (var i = arr.length - 1; i > 0; i--) {
        if ((manhattanDistance(arr[i].x, arr[i].y, arr[i - 1].x, arr[i - 1].y) !== 1) || 
            (arr[i].parent.x !== arr[i - 1].x && arr[i].parent.y !== arr[i - 1].y)) {
            arr.splice(i - 1, 1);
            i++;
        }
    }
    return arr;
}

console.log('Pathfinding initialized');