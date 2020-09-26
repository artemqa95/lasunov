const holst = document.getElementById("canv");
const context = holst.getContext("2d");


function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n) && n % 1 === 0;
}
let userChose;
do {userChose = parseInt(prompt("Укажите размер поля в строках/столбцах (от 3 до 10)"));}
while ((userChose < 3 || userChose > 10) || !isNumeric(userChose));

const choseMessage = document.getElementById("result");
const cellCount = userChose;
const subpixelFix = 0.5;
holst.width = holst.width * cellCount + 1;
holst.height = holst.height * cellCount + 1;
const cellHeight = (holst.height - 1) / cellCount;
const cellWidth = (holst.width - 1) / cellCount;
var UsedCells = [];

start();

function start() {
    let my_gradient = context.createLinearGradient(holst.width / 2, 0, holst.width / 2, holst.height);
    my_gradient.addColorStop(0, "yellow");
    my_gradient.addColorStop(1, "blue");
    context.fillStyle = my_gradient;
    context.fillRect(0, 0, holst.width, holst.height);
    for (let i = 0; i <= cellCount; i += 1) {
        let xCoord = i * cellWidth + subpixelFix;
        //console.log("z = " + xCoord);
        context.moveTo(xCoord, 0);
        context.lineTo(xCoord, holst.height);
    }
    for (let i = 0; i <= cellCount; i += 1) {
        let yCoord = i * cellHeight + subpixelFix;
        context.moveTo(0, yCoord);
        context.lineTo(holst.width, yCoord);
    }
    context.strokeStyle = "#000";
    context.stroke();
    var clickCount = 0;
       addEventListener("click", function (event) {

            let mouseCoordX = event.pageX - holst.offsetLeft - 5;
            let mouseCoordY = event.pageY - holst.offsetTop - 5;
            console.log("X" + mouseCoordX);
            console.log("Y" + mouseCoordY);
            if (mouseCoordX > holst.width || mouseCoordY > holst.height ||
                mouseCoordY < 0 || mouseCoordX < 0) {
                return;
            }
            let cellX = Math.floor(mouseCoordX / cellWidth);
            let cellY = Math.floor(mouseCoordY / cellHeight);

            var point = {x: cellX, y: cellY, isCross: clickCount % 2 == 0};
            let pointIsUsed = isPointBusy(point);

            //console.log("Used count " + UsedCells.length);
            if (!pointIsUsed && !globalTest()) {
                ++clickCount;
                UsedCells.push(point);
                if (point.isCross) {
                    drawCross(cellX, cellY);
                } else {
                    drawCircle(cellX, cellY);
                }
            }
            if (!globalTest() && UsedCells.length === cellCount*cellCount ) {
                choseMessage.innerHTML = "draw";
            }
            globalTest();
        }
    );

}

function testHorizontalWin() {
    for (let testY = 0; testY < cellCount; testY++) {
        let crossCount = 0;
        let circlesCount = 0;
        for (let i = 0; i < UsedCells.length; i++) {
            if (UsedCells[i].y === testY && UsedCells[i].isCross) {
                ++crossCount;
            }
            if (UsedCells[i].y === testY && !UsedCells[i].isCross) {
                ++circlesCount;
            }
        }
        if (crossCount === cellCount) {
            choseMessage.innerHTML = "Crosses win";
            return true;
        }
        if (circlesCount === cellCount) {
            choseMessage.innerHTML = "Circles win";
            return true;
        }
    }
    return false;
}

function testVerticalWin() {
    for (let testX = 0; testX < cellCount; testX++) {
        let crossCount = 0;
        let circlesCount = 0;
        for (let i = 0; i < UsedCells.length; i++) {
            if (UsedCells[i].x === testX && UsedCells[i].isCross) {
                ++crossCount;
            }
            if (UsedCells[i].x === testX && !UsedCells[i].isCross) {
                ++circlesCount;
            }
        }
        if (crossCount === cellCount) {
            choseMessage.innerHTML = "Crosses win";
            return true;
        }
        if (circlesCount === cellCount) {
            choseMessage.innerHTML = "Circles win";
            return true;
        }
    }
    return false;
}

function testFirstDiagonalWin() {
    let crossCount = 0;
    let circlesCount = 0;
    for (let i = 0; i < UsedCells.length; i++) {
        if (UsedCells[i].x === UsedCells[i].y && UsedCells[i].isCross) {
            ++crossCount;
        }
        if (UsedCells[i].x === UsedCells[i].y && !UsedCells[i].isCross) {
            ++circlesCount;
        }
    }
    if (crossCount === cellCount) {
        choseMessage.innerHTML = "Crosses win";
        return true;
    }
    if (circlesCount === cellCount) {
        choseMessage.innerHTML = "Circles win";
        return true;
    }

    console.log("crossCount " + crossCount);
    console.log("circlesCount " + circlesCount);
    return false;
}

function testSecondDiagonalWin() {
    let crossCount = 0;
    let circlesCount = 0;
    for (let i = 0; i < UsedCells.length; i++) {
        if (UsedCells[i].isCross &&
            UsedCells[i].x === (cellCount - 1 - UsedCells[i].y)) {
            ++crossCount;
        }
        if (!UsedCells[i].isCross &&
            UsedCells[i].x === (cellCount - 1 - UsedCells[i].y)) {
            ++circlesCount;
        }
    }
    if (crossCount === cellCount) {
        choseMessage.innerHTML = "Crosses win";
        return true;
    }
    if (circlesCount === cellCount) {
        choseMessage.innerHTML = "Circles win";
        return true;
    }

    console.log("crossCount " + crossCount);
    console.log("circlesCount " + circlesCount);
    return false;
}

function isPointBusy(point) {
    for (let i = 0; i < UsedCells.length; i++) {
        let usedPoint = UsedCells[i];
        if (usedPoint.x === point.x && usedPoint.y === point.y) {
            return true;
        }
    }
    return false;
}

function drawCross(cellX, cellY) {
    //console.log("Vizvana drawCross " + cellX + " " + cellY);
    context.beginPath();
    context.moveTo(cellWidth * cellX + cellWidth / 10, cellHeight * cellY + cellHeight / 10);
    context.lineTo(cellWidth * cellX + cellWidth - (cellWidth / 10), cellHeight * cellY + cellHeight - (cellHeight / 10));
    context.moveTo(cellWidth * cellX + cellWidth - (cellWidth / 10), cellHeight * cellY + cellHeight / 10);
    context.lineTo(cellWidth * cellX + cellWidth / 10, cellHeight * cellY + cellHeight - (cellHeight / 10));
    context.strokeStyle = "black";
    context.stroke();
    context.closePath();
}

function drawCircle(cellX, cellY) {
    context.beginPath();
    context.arc(cellWidth * cellX + cellWidth / 2, cellHeight * cellY + cellHeight / 2,
        Math.min(cellHeight, cellWidth) * 0.45, 0, Math.PI * 2);
    context.strokeStyle = "black";
    context.stroke();
    context.closePath();
}


function globalTest() {
    return testVerticalWin() || testHorizontalWin() || testFirstDiagonalWin() || testSecondDiagonalWin();
}