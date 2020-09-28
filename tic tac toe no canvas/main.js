let usedCells = new Array(1);
let cells = document.getElementsByClassName("box");
let footer = document.getElementsByClassName("footer");
let change = document.getElementsByClassName("change");
let clickCount = 0;
let CrossArr = [];
let CircleArr = [];
let isWin = false;
let random = 0;
let h = 0;
let option = true;
let abstract = true;
for (let i = 0; i < cells.length; i++) {
    cells[i].onclick = () => {
        DoublePlay(i);
    }
}

function crossOrCircles(meaning) {
    if (clickCount % 2 === 0) {
        cells[meaning].style.backgroundImage = "url(cross.jpg)"
        cells[meaning].style.backgroundSize = "100%"
        CrossArr.push(meaning);
        for (let j = 0; j < footer.length; j++) {
            footer[j].innerHTML = "Circle's step";
            footer[j].style.color = "blue";
        }
        testWin("Crosses", CrossArr);
    } else {
        cells[meaning].style.backgroundImage = "url(circle.jpg)"
        cells[meaning].style.backgroundSize = "100%"
        CircleArr.push(meaning);
        for (let j = 0; j < footer.length; j++) {
            footer[j].innerHTML = "Crosses step";
            footer[j].style.color = "red";
        }
        testWin("Circles", CircleArr);
    }
}

function testWin(text, symbol) {
    let firstdiagonal = 0;
    let seconddiagonal = 0;

    for (let k = 0; k <= 2; k++) {
        let horizontal = 0;
        let vertical = 0;
        for (let m = 0; m < symbol.length; m++) {
            if (symbol[m] === (k * 4)) {
                firstdiagonal++;
            }
            if (symbol[m] === (2 * k + 2)) {
                seconddiagonal++;
            }
        }
        for (let n = 0; n <= 2; n++) {
            for (let m = 0; m < symbol.length; m++) {
                if (symbol[m] === (k + n * 3)) {
                    horizontal++;
                }
                if (symbol[m] === (n + k * 3)) {
                    vertical++;
                }
            }
        }
        if (firstdiagonal === 3 || seconddiagonal === 3 || horizontal === 3 || vertical === 3) {
            abstract = true;
            for (let j = 0; j < footer.length; j++) {
                footer[j].innerHTML = text + " win"
                footer[j].style.color = "Black";
            }
            isWin = true;
            abstract = true;
        }
    }
}

function Clearing() {
    clickCount = 0;
    CrossArr = [];
    CircleArr = [];
    isWin = false;
    abstract = true;
    for (let i = 0; i < cells.length; i++) {
        cells[i].style.backgroundImage = "none"
        cells[i].style.backgroundSize = "100%"
        usedCells = Array(1);
    }
    for (let j = 0; j < footer.length; j++) {
        footer[j].innerHTML = "";
        footer[j].innerHTML = "Circle's step";
    }
}

function NN() {
    random = Math.floor(Math.random() * 9)
    for (h = 0; h < usedCells.length; h++) {
        if (usedCells[h] === random) {
            NN()
        }
    }
    return;
}

function isDraw() {
    if (clickCount === 9 & isWin === false) {
        for (let j = 0; j < footer.length; j++) {
            footer[j].innerHTML = "Draw";
            footer[j].style.color = "Black";
        }
        abstract = true;
    }

}

function DoublePlay(num) {
    for (let j = 0; j < usedCells.length; j++) {
        for (let j = 0; j < usedCells.length; j++) {
            if (usedCells[j] === num) {
                return;
            }
        }
        if (isWin === false) {
            abstract = false;
            clickCount++
            crossOrCircles(num);
            usedCells.push(num);
            isDraw();
        }
        return;
    }
}

function SinglePlay(num) {
    for (let j = 0; j < usedCells.length; j++) {
        if (usedCells[j] === num) {
            return;
        }
    }
    if (isWin === false) {
        abstract = false;
        clickCount++
        crossOrCircles(num);
        usedCells.push(num);
        if (clickCount < 9) {
            NN();
            usedCells.push(random);
            clickCount++;
            for (let j = 0; j < cells.length; j++) {
                if (j === random) {
                    crossOrCircles(j);
                }
            }
        }
        if (isWin === false) {
            isDraw();
        }
    }
    return;
}

function Changing() {
    if (abstract === true) {
        if (option === true) {
            for (let i = 0; i < cells.length; i++) {
                cells[i].onclick = () => {
                    SinglePlay(i);
                }
            }
            for (let j = 0; j < footer.length; j++) {
                change[j].innerHTML = "Режим игры друг против друга";
            }
        } else {
            for (let i = 0; i < cells.length; i++) {
                cells[i].onclick = () => {
                    DoublePlay(i);
                }
            }
            for (let j = 0; j < footer.length; j++) {
                change[j].innerHTML = "Режим игры против компьютера";
            }
        }
        option = !option;
    } else {
        alert(`Игра еще не окончена. Нажмите "очистить поле" или завершите игру`)
    }
}

console.log(abstract);