function drawPart(num) {
    num--;
    switch (num) {
        case 9:
            ctx.lineWidth = 10;
            ctx.strokeStyle = "black";
            ctx.fillRect(50, 30, 10, 360);
            break;
        case 8:
            ctx.lineWidth = 10;
            ctx.strokeStyle = "black";
            ctx.fillRect(30, 40, 250, 10);
            break;
        case 7:
            ctx.lineWidth = 10;
            ctx.strokeStyle = "black";
            ctx.beginPath();
            ctx.moveTo(40, 130);
            ctx.lineTo(150, 30);
            ctx.stroke();
            break;
        case 6:
            ctx.lineWidth = 8;
            ctx.strokeStyle = "red";
            ctx.beginPath();
            ctx.moveTo(200, 50);
            ctx.lineTo(197, 100);
            ctx.stroke();
            break;
        case 5:
            ctx.lineWidth = 8;
            ctx.strokeStyle = "#5dd05a";
            ctx.beginPath();
            ctx.arc(197, 130, 30, 0, 2 * Math.PI)
            ctx.stroke();
            break;
        case 4:
            ctx.lineWidth = 8;
            ctx.strokeStyle = "blue";
            ctx.beginPath();
            ctx.ellipse(197, 220, 35, 60, 0, 0, 2 * Math.PI)
            ctx.stroke();
            break;
        case 3:
            ctx.lineWidth = 8;
            ctx.strokeStyle = "brown";
            ctx.beginPath();
            ctx.moveTo(170, 180);
            ctx.lineTo(130, 230);
            ctx.stroke();
            break;
        case 2:
            ctx.lineWidth = 8;
            ctx.strokeStyle = "brown";
            ctx.beginPath();
            ctx.moveTo(225, 180);
            ctx.lineTo(285, 210);
            ctx.stroke();
            break;
        case 1:
            ctx.lineWidth = 8;
            ctx.strokeStyle = "brown";
            ctx.beginPath();
            ctx.moveTo(180, 270);
            ctx.lineTo(160, 330);
            ctx.stroke();
            break;
        case 0:
            ctx.lineWidth = 8;
            ctx.strokeStyle = "brown";
            ctx.beginPath();
            ctx.moveTo(215, 270);
            ctx.lineTo(255, 320);
            ctx.stroke();
            break;
    }
    return num;
}

function writeWord() {
    ctx.clearRect(5, 399, 370, 100);
    ctx.font = "20px Courier";
    ctx.fillStyle = "Black";
    ctx.fillText(answerArray.join(" "), 10, 400)
}
function showUsableLetters() {
    ctx.clearRect(380, 10, 150, 600);
    ctx.font = "20px Courier";
    ctx.fillStyle = "Black";
    ctx.lineWidth = 2;
    ctx.strokeStyle = "Black";
    for (let i = 0; i < currentChoice.length; i++) {
        ctx.fillText(currentChoice[i], 400, 20 + 20 * i);
        ctx.beginPath();
        ctx.moveTo(398, 31 + i * 20);
        ctx.lineTo(413, 31 + i * 20);
        ctx.stroke();
    }
}
let words = ["перец", "флигель", "кабина", "грамота", "официант", "ручей", "изба", "азот", "блоха", "паутина", "перила", "пластина", "коктейль", "тент", "терраса", "кавалер", "аврора", "арбуз", "радиатор", "теплоход", "горох", "лава", "футляр", "пианино", "антиквар", "мускулатура", "Кремль", "холм", "мавзолей", "автострада", "пергамент", "корм", "буфет", "авиаметеостанция", "табор", "автограф", "африка", "окуляр", "суслик", "кадмий", "лыжа", "водопровод", "котелок", "перекись", "фонтан", "щетка", "билет", "аполлон", "кемпинг", "корчма", "ксерокс", "камзол", "арфа", "палка", "жир", "бронепоезд", "печень", "сиденье", "фильтр", "таракан", "козленок", "каминная полка", "банда", "капрал", "кинооператор", "оракул", "камбала", "реактор", "бревно", "носок", "гортань", "автокран", "гиена", "жабра", "камфара", "револьвер", "бубенчик", "консервы", "леопард", "администратор", "комар", "мышеловка", "время", "ожерелье", "заноза", "полиграф", "метро", "лак", "пропасть", "Киев", "каталка", "пансионат", "кузнец", "амеба", "инструкция", "танк", "ларец", "амфибия", "театр", "лотос", "кабанчик", "платок", "косилка", "библия", "врата", "подвал", "асфальтоукладчик", "рожь", "обелиск", "Марс", "кофеин", "Голландия", "кабинка", "тарелка", "тюльпан", "Ирландия", "князь", "шкаф", "чемодан", "патефон", "клевер", "кирка", "клетчатка", "единорог", "бляшка", "винтовка", "балкон", "порт", "сорочка", "декан", "индюк", "коала", "кролик", "штопор", "доктор", "Будапешт", "головоломка", "застежка", "булка", "доярка", "вентилятор", "нарцисс", "ампула", "прядь", "пудель", "напиток", "аптекарша", "карьер", "шпала", "карниз", "Кесарь", "краска", "княжна", "лезвие", "брус", "болванка", "енот", "вертолет", "картофелина", "Колумбия", "лифчик", "бедро", "мыльница", "канава", "лавина", "искра", "ведомство", "ворон", "гнездо", "луна", "кочегар", "лопух", "лужа", "тростник", "таблетка", "обувь", "каскадер", "дыня", "бордель", "кисет", "лопасть", "ресница", "войско", "лилипут", "рукавица", "барабанщик", "юар", "Калькутта", "варежка", "отель", "барахолка", "мак", "овес", "автовесы", "клиника", "метелка", "мелочь", "солома", "бритва", "олигарх",
];
let canvas = document.getElementsByTagName("canvas")[0]
let ctx = canvas.getContext("2d");
ctx.textAlign = "left";
ctx.textBaseline = "top";
let word = words[Math.floor(Math.random() * words.length)];
let answerArray = [];
let tryNumbers = 10;
let currentChoice = [];
for (let i = 0; i < word.length; i++) {
    answerArray[i] = "_"
}
let remainingLetters = word.length;
window.onload = function () {
    theGame();
}

function theGame() {
    let isCorrectAnswer = false;
        alert(answerArray.join(" "));
        let guess = prompt("Угадайте букву или нажмите Отмена для выхода из игры.");
            if (guess === null) {
                return
            } else if (guess.length !== 1) {
                alert("Пожалуйста, введите только одну букву.");
            } else {
                currentChoice.push(guess);
                for (let j = 0; j < word.length; j++) {
                    if (word[j] === guess.toLowerCase() && answerArray[j] === "_") {
                        answerArray[j] = guess;
                        remainingLetters--;
                        isCorrectAnswer = true;
                    }
                }
            }
        writeWord();
        showUsableLetters();
        if (!isCorrectAnswer) {
    tryNumbers = drawPart(tryNumbers)
        }
    if (remainingLetters > 0 && tryNumbers > 0) {
        setTimeout(theGame, 20);
    } else {
        setTimeout(endOfGame, 20);
    }
}

function endOfGame() {
    if (tryNumbers !== 0) {
        alert(answerArray.join(" "));
        alert("Отлично! Было загадано слово " + word);
    } else {
        alert("Извините! Вы проиграли. Было загадано слово " + word);
    }
}
