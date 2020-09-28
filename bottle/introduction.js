let drinkGame = {
    0: "Пьёшь одну",
    1: "Пьёшь 1/2",
    2: "Пьёшь две",
    3: "Пьешь три или звонок бывшей (бывшему)",
    4: "Удвоение следующего действия",
    5: "Пропусти ход",
    6: "Следующий раз не пьешь",
    7: "Пьёшь вместо следующего",
    8: "Сосед справа выпьет одну",
    9: "Сосед слева выпьет одну",
    10: "Пьёшь сколько хочешь",
    11: "Половина от следующего действия",
    12: "Все отдыхают 5 минут",
    13: "Все пьют по одной",
    14: "Выбирай кто выпьет одну",
    15: "Пьёшь 1/4",
    16: "Срабатывают 2 соседних варианта",
    17: "Следующие 2 раза не пьёшь",
    18: "Расскажи историю или выпей одну",
    19: "Пьют одну курящие",
    20: "Пьют одну некурящие",
    21: "Пропусти ход",
    22: "Не пьёшь 3 минуты",
    23: "5 минут пьешь только ты",
    24: "Пьёшь одну в течении 15 сек",
    25: "Пьют одну у кого в имени 'а'",
    26: "Пьют одну у кого в имени 'о'",
    27: "Пьют одну у кого в имени 'я'",
    28: "Не пьёшь 5 минут",
    29: "Один из соседей пьёт одну, кто?",
    30: "Пьёшь 1/2",
    31: "Пьёшь одну",
    32: "Последний поднявший руку пьёт одну",
    33: "Все отдыхают 5 минут",
    34: "Нижний и верхний варианты - твои",
    35: "Твой отдых окончен",
    36: "Всем всегда наливаешь ты",
    37: "Пропусти ход",
    38: "Пьют одну у кого в имени 'е'",
    39: "Пьёшь одну без закуски",
    length: 40
}

let sportGame = {
    0: "Отожмись 1 раз",
    1: "Отожмись 5 раз",
    2: "Отожмись 8 раз",
    3: "Отожмись 10 раз",
    4: "Отожмись 15 раз",
    5: "Отожмись 20 раз",
    6: "Удвоение следующего действия",
    7: "Половина от следующего действия",
    8: "Отожмись на одной руке 1 раз",
    9: "Сделай пресс 10 раз",
    10: "Сделай пресс 5 раз",
    11: "Сделай пресс 3 раза",
    12: "Сделай пресс 1 раз",
    13: "Пропусти ход",
    14: "Выбирай кто отожмется 5 раз",
    15: "Пропусти ход",
    16: "Выпей водички",
    17: "Срабатывают 2 соседних варианта",
    18: "Отожмется 10 раз сосед справа",
    19: "Отожмется 3 раза сосед слева",
    20: "Минуту в стойке отжимания",
    21: "Следующий игрок удваивает действия",
    22: "Отожмись 10 раз",
    23: "Отожмись 5 раз",
    24: "Полежи 5 минут",
    25: "Присядь 20 раз",
    26: "Все присядут 20 раз кроме тебя",
    27: "Присядь 10 раз",
    28: "Все присядут 10 раз",
    29: "Отожмись сколько хочешь",
    30: "Ты без упражнений на 5 минут",
    31: "Все отдыхают 5 минут",
    32: "Отожмись 1 раз",
    33: "Подпрыгни 20 раз",
    34: "Подпрыгни 50 раз",
    35: "Попей водички",
    36: "Все отожмутся 15 раз",
    37: "Половина от следующего действия",
    38: "Армрестлинг с победителем",
    39: "Соседи отожмутся по 8 раз",
    length: 40
}

let bottleGame = {
    0: "История о себе",
    1: "Погладь по руке соседа справа",
    2: "Ничего не делай",
    3: "Расскажи секрет",
    4: "Был поцелуй в лифте?",
    5: "Прокати на спине д/п справа",
    6: "Ты боишься темноты?",
    7: "В шкафу на 5 минут с д/п справа",
    8: "Порекоммендуй всем книгу",
    9: "Возьми на руки д/п напротив",
    10: "В шкафу на 5 минут один",
    11: "Нравится кто-то здесь?",
    12: "Задай вопрос прошлому игроку",
    13: "Цвет нижнего белья сейчас?",
    14: "Иммунитет на 1 вопрос",
    15: "Часто смотришь неприличное?",
    16: "Подглядывал когда-нибудь?",
    17: "История о себе",
    18: "Поцелуй в щёку д/п слева",
    19: "Попрыгай на одной ноге 15 раз",
    20: "Спой что-нибудь",
    21: "Понюхай соседа слева",
    22: "Расскажи про неловкую ситуацию",
    23: "Ты предавал кого-нибудь?",
    24: "Расскажи о чем ты жалеешь",
    25: "Любимый фрукт?",
    26: "Был ли в секс шопе?",
    27: "Прокукарекай",
    28: "Заткни уши на 5 минут",
    29: "Включи свою песню",
    30: "Устраивали прошлые отношения?",
    31: "Твой % пошлости от 0 до 100",
    32: "Д/п слева тебе нравится?",
    33: "Обнимашки с д/п слева",
    34: "Нелюбимое качество в д/п справа",
    35: "Встань в угол на 5 минут",
    36: "Любил по-настоящему?",
    37: "Сделай массаж д/п справа",
    38: "Все меняются местами",
    39: "Поцелуй в губы д/п слева",
    length: 40
}

let drinkGameLog = {
    0: " пьёт одну.",
    1: " пьёт 1/2.",
    2: " пьёт одну.",
    3: " пьёт три или звонит бывшей/бывшему!!!!",
    4: " удваивает следующее действие.",
    5: " пропускает ход.",
    6: " следующий раз не пьёт.",
    7: " пьёт вместо следующего.",
    8: " заставляет соседа справа выпить одну.",
    9: " заставляет соседа слева выпить одну.",
    10: " пьёт сколько хочет.",
    11: " уменьшает следующее действие наполовину.",
    12: " дарит всем отдых на 5 минут.",
    13: " заставляет всех выпить по одной.",
    14: " выбирает кто выпьет одну.",
    15: " пьёт 1/4.",
    16: " задейсвует 2 соседних варианта. Что же там?",
    17: " следующие 2 раза не пьёт.",
    18: " рассказывает историю или пьёт одну!.",
    19: " заставляет выпить одну курящих.",
    20: " заставляет выпить одну некурящих.",
    21: " пропускает ход.",
    22: " не пьёт 3 минуты.",
    23: " пьёт 5 минут, остальные отдыхают.",
    24: " пьёт одну в течении 15 секунд!",
    25: " заставляет пить одну у кого в имени есть 'а'!",
    26: " заставляет пить одну у кого в имени есть 'о'!",
    27: " заставляет пить одну у кого в имени есть 'я'!",
    28: " не пьёшт 5 минут.",
    29: " заставляет выпить одну одного из соседей.",
    30: " пьёт 1/2.",
    31: " пьёт одну.",
    32: " заставляет последнего поднявшего руку пить одну.",
    33: " дарит всем отдых на 5 минут.",
    34: " задействует нижний и верхний вариант. Что же там?",
    35: " завершает свой отдых принудительно.",
    36: " всгда всем наливает :)",
    37: " пропускает ход.",
    38: " заставляет пить одну у кого в имени есть 'е'!",
    39: " пьёт одну без закуски.",
    length: 40
}

let sportGameLog = {
    0: " отжимается 1 раз.",
    1: " отжимается 5 раз.",
    2: " отжимается 8 раз.",
    3: " отжимается 10 раз.",
    4: " отжимается 15 раз.",
    5: " отжимается 20 раз.",
    6: " удваивает следующее действие.",
    7: " уменьшает следующее действие наполовину.",
    8: " отжимается на одной руке 1 раз.",
    9: " делает пресс 10 раз.",
    10: " делает пресс 5 раз.",
    11: " делает пресс 3 раза.",
    12: " делает пресс 1 раз.",
    13: " пропускает ход.",
    14: " выбирает кто отожмется 5 раз.",
    15: " пропускает ход.",
    16: " выпьет водички.",
    17: " задейсвует 2 соседних варианта. Что же там?",
    18: " заставляет отжаться 10 раз соседа справа.",
    19: " заставляет отжаться 3 раза соседа слева.",
    20: " проводит минуту в стойке отжимания!",
    21: " удваивает действия следующему игроку!",
    22: " отжимается 10 раз.",
    23: " отжимается 5 раз.",
    24: " ложится на 5 минут:)",
    25: " приседает 20 раз.",
    26: " заставляет всех присесть 20 раз, а сам отдыхает.",
    27: " приседает 10 раз.",
    28: " со всеми приседает 10 раз.",
    29: " отжимается сколько захочет.",
    30: " без упражнений на 5 минут.",
    31: " позволяет всем отдохнуть 5 минут.",
    32: " отжимается 1 раз.",
    33: " подпрыгивает 20 раз.",
    34: " подпрыгивает 50 раз.",
    35: " пьёт водичку.",
    36: " со всеми отжимается 15 раз.",
    37: " уменьшает следующее действие наполовину.",
    38: " проводит армрестлинг с соседом справа :)",
    39: " заставляет соседей отожаться по 8 раз.",
    length: 40
}

let bottleGameLog = {
    0: " рассказывает историю о себе.",
    1: " гладит по руке соседа справа :)",
    2: " ничего не делает.",
    3: " рассказывает секрет ;)",
    4: " рассказывает про поцелуй в лифте.",
    5: " катает на спине д/п справа :)",
    6: " рассказывает про боязнь темноты.",
    7: " идёт в шкаф на 5 минут с д/п справа :)",
    8: " рекоммендует книгу.",
    9: " берет на руки кого-то напротив.",
    10: " пряется в шкаф на 5 минут.",
    11: " отвечает на вопрос, нравится ли ему кто-то здесь.",
    12: " задает вопрос прошлому игроку.",
    13: " рассказывает про цвет нижнего белья :)",
    14: " получает иммунитет на 1 вопрос.",
    15: " рассказывает про просмотр неприличного!",
    16: " рассказывает про подгляделки!",
    17: " рассказывает историю о себе.",
    18: " целует в щёку д/п слева.",
    19: " прыгает на одной ноге 15 раз.",
    20: " поёт что-нибудь.",
    21: " нюхает соседа слева!",
    22: " рассказывает про неловкую ситуацию.",
    23: " рассказывает про предательство.",
    24: " рассказывает о сожалениях.",
    25: " рассказывает о любимом фрукте.",
    26: " рассказывает про посещения секс-шопа!",
    27: " кукарекает для всех!",
    28: " затыкает уши на 5 минут.",
    29: " включает свою песню.",
    30: " рассказывает про прошлые отношения.",
    31: " говорит свой % пошлости от 0 до 100.",
    32: " рассказывает про чувства к д/п слева.",
    33: " обнимает д/п слева.",
    34: " рассказывает про недостатки д/п справа.",
    35: " встаёт в угол на 5 минут.",
    36: " рассказывает про настоящую любовь!",
    37: " делает массаж д/п справа!",
    38: " заставляет всех поменяться местами.",
    39: " целует в губы д/п слева!",
    length: 40
}

let itemsBlock = document.getElementById("items");
let allItems = document.getElementsByClassName("item");
let btn = document.getElementsByClassName("btn");
let bottle = document.getElementsByClassName("bottle");
let allText = document.getElementsByClassName("text");
let ingametop = document.getElementsByClassName("ingame-top");
let menu = document.getElementsByClassName("menu");
let players = document.getElementsByClassName("players");
let playersNames = document.getElementsByClassName("players-names");
let gameChoice = document.getElementsByClassName("game-choice");
let rules = document.getElementsByClassName("rules")
let soundoff = document.getElementsByClassName("soundoff");
let soundon = document.getElementsByClassName("soundon");
let theGame = document.getElementsByClassName("ingame");
let ingamebot = document.getElementsByClassName("ingame-bot");
let playerNamesClosed = document.getElementsByClassName("current-player-closed");
let playerNamesOpened = document.getElementsByClassName("current-player-opened");
let gameLog = document.getElementsByClassName("log-content");
let li = document.getElementsByClassName("li");
let lii = document.getElementsByClassName("lii");
let header = document.getElementsByClassName("header");
let windowOptions = document.getElementsByClassName("window-options");
let logElement = document.getElementsByClassName("log");
let buttonArr = [players[0], playersNames[0], gameChoice[0], rules[0], theGame[0]];
let game = [drinkGame, sportGame, bottleGame];
let gameStyle = {
    0: ["https://images.crafta.ua/collecting-items/3eeb736d60e91f2e181e6c5e2f1d9f5f", "linear-gradient(to top, #e2faa1, #7c73f3)", "КТО СКОЛЬКО ПЬЁТ? :)"],
    1: ["https://ecofitness.ru/kcfinder/upload/images/12-samyh-ehffektivnyh-vidov-otzhimanij-i-tekhnika-ih-vypolneniya-min.jpg", "linear-gradient(to left top, #56565e, #f3eeee, #8b828d)", "КТО САМЫЙ СИЛЬНЫЙ? :)"],
    2: ["https://piter-trening.ru/wp-content/uploads/2012/09/man-and-woman1.jpg", "linear-gradient(to left top, #d48ae0, #de4646, #c417e3)", "КТО АДАМ, А КТО ЕВА? :)"],
    length: 3
};
let textLog = [drinkGameLog, sportGameLog, bottleGameLog]
let thisGame = game[0];
let thisTextLog = textLog[0];
let inGame = false;
let playersArr = ["Евгений", "Артём", "Андрей"];
let imageCount = 10;
let currentPos = 0;
let currentElement = 0;
let playerNumbers = 3;
let playerIs = 1;
let thisPlayerIndex = 0;
let userpass = document.getElementsByClassName("userpass");
let btnAccept = document.getElementsByClassName("btn-accept");
let playersCurrent = document.getElementsByClassName("players-current");
let rulesClickCount = 0;
let audioSrc = {
    start: "rotate.mp3",
    finish: "finish.mp3",
}
let audioStart = new Audio();
let audioFinish = new Audio();
// Позиционирование по ширине и создание игроков по умолчанию при загрузке страницы
reposition();
refreshPlayerList();
// Определенной кнопке соответствует определенный див
for (let j = 0; j < buttonArr.length - 1; j++) {
    btn[j + 1].onclick = () => buttonclick(buttonArr[j])
}
// Режим игры - предварительный выбор
for (let j = 0; j < lii.length; j++) {
    lii[j].onclick = changeGameListState.bind(lii[j])
}

// ---------------------------event listeners
// Добавляем аудио на страничке

function playSound (name , source, currenttime, repeat, defaultmute) {
    name.src = source;
    name.currentTime = currenttime;
    name.muted = defaultmute;
    name.volume = 1;
    if (repeat === true) {
        name.addEventListener("ended", function () {
            name.currentTime = currenttime;
            name.play();
        })
    }
}
playSound (audioStart, audioSrc.start, 0, false, true);
playSound (audioFinish, audioSrc.finish, 0, false, true);
// Прикрутка аудио на кнопку
soundoff[0].onclick = function () {
    soundoff[0].style.display = "none";
    soundon[0].style.display = "block";
    audioStart.muted = true;
    audioFinish.muted = true;
}

soundon[0].onclick = function () {
    soundon[0].style.display = "none";
    soundoff[0].style.display = "block";
    audioStart.muted = false;
    audioFinish.muted = false;
}

// Разрешаем только цифры и стандартные браузерные клавиши в поле Количество игроков
userpass[0].addEventListener('keydown', function (event) {
    if (event.keyCode == 46 || event.keyCode == 8 || event.keyCode == 9 || event.keyCode == 27 ||
        (event.keyCode >= 35 && event.keyCode <= 39) || event.keyCode == 116 || event.keyCode == 123) {
        return;
    } else {
        if ((event.keyCode < 48 || event.keyCode > 57) && (event.keyCode < 96 || event.keyCode > 105)) {
            event.preventDefault();
        }
    }
});


// Репозиционирование элементов при ресайзе
window.addEventListener("resize", function () {
    return reposition()
});


// ---------------------------click on elements

// Начало игры
btn[0].onclick = function () {
    audioFinish.pause();
    buttonclick(theGame[0]);
    let arrayWithUsageKeys = [];
    for (let i = 0; i < allText.length; i++) {
        let random = Math.trunc(Math.random() * 40);
        while (arrayWithUsageKeys.includes(random)) {
            random = Math.trunc(Math.random() * 40);
        }
        ;
        allText[i].innerHTML = thisGame[random];
        arrayWithUsageKeys.push(random);
    }
    ingametop[0].innerHTML = "Ходит" + " " + playersArr[playerIs - 1];
    ingamebot[0].style.display = "none";
    bottle[0].classList.remove("selected");
    for (let i = 0; i < allItems.length; i++) {
        allItems[i].classList.remove("selected");
        allText[i].classList.remove("selected");
    }
    if (inGame === false) {
        inGame = true;
        let random = Math.trunc(Math.random() * imageCount * 10 + imageCount);
        for (let i = 0; i < bottle.length; i++) {
            bottle[i].animate([
                {transform: "rotate(" + currentPos + "deg)"},
                {transform: "rotate(" + (currentPos + 360 / imageCount * random) + "deg)"}
            ], {
                duration: 5000,
                iterations: 1,
                fill: "forwards",
                easing: "ease"
            })
            currentElement = (random % imageCount) + currentElement;
            if (currentElement > imageCount - 1) {
                currentElement = currentElement - imageCount;
            }
            currentPos = currentPos + 360 / imageCount * random;
            console.log("Текущий элемент" + " " + currentElement);
        }
        audioStart.currentTime = 0;
        audioStart.play();
        setTimeout(endOfGame, 5000);

    }
    for (let i = 0; i < btn.length; i++) {
        btn[i].disabled = true;
    }
    btnAccept[0].disabled = true;
}

rules[0].onclick = function () {
    rulesClickCount++
    if (rulesClickCount % 2 === 1) {
        this.style.borderBottom = "1px outset black";
        this.animate([
            {height: "30%", opacity: "1"},
            {height: "100%", opacity: "0.9"}
        ], {
            duration: 1000,
            iterations: 1,
            fill: "forwards",
            easing: "ease"
        })
    } else {
        this.style.borderBottom = "none"
        this.animate([
            {height: "100%", opacity: "0.9"},
            {height: "30%", opacity: "1"}
        ], {
            duration: 500,
            iterations: 1,
            fill: "forwards",
            easing: "ease"
        })
    }
}

// Имена игроков - открывающийся список
playerNamesClosed[0].onclick = function () {
    this.style.display = "none";
    playerNamesOpened[0].style.display = "block";
}

// Количество игроков - принять
btnAccept[0].onclick = () => acceptPlayerNumbers();

// Имена игроков - принять
btnAccept[1].onclick = function () {
    if (userpass[1].value !== "") {
        playersArr[thisPlayerIndex] = userpass[1].value;
        li[thisPlayerIndex].innerHTML = userpass[1].value;
        playerNamesClosed[0].innerHTML = userpass[1].value;
        userpass[1].value = "";
    }
}

// Режим игры - принять
btnAccept[2].onclick = function () {
    for (let i = 0; i < lii.length; i++) {
        lii[i].classList.contains("chosen") ? lii[i].classList.toggle("current", true) : lii[i].classList.contains("current") ? lii[i].classList.remove("current") : true;
    }
    let liiClassCurrentIndex = Array.prototype.indexOf.call(lii, document.getElementsByClassName("current")[0]);
    thisGame = game[liiClassCurrentIndex];
    thisTextLog = textLog[liiClassCurrentIndex];
    itemsBlock.style.background = "url(" + gameStyle[liiClassCurrentIndex][0] + ") center no-repeat";
    itemsBlock.style.backgroundSize = "cover";
    header[0].textContent = gameStyle[liiClassCurrentIndex][2]
    let bottleWord = "БУТЫЛОЧКА:)";
    for (let i = 0; i < allItems.length; i++) {
        allItems[i].classList.remove("selected");
        allText[i].classList.remove("selected");
        allItems[i].style.background = gameStyle[liiClassCurrentIndex][1];
        if (i === allItems.length - 1) {
            allText[i].innerHTML = bottleWord.slice(i, i + 2);
            break
        }
        allText[i].innerHTML = bottleWord.slice(i, i + 1);
    }
}

// ---------------------------functions
// Обновить список в Именах игроков
function refreshPlayerList() {
    playerNamesClosed[0].innerHTML = playersArr[0];
    for (let i = 0; i < li.length; i++) {
        li[i].innerHTML = playersArr[i];
        li[i].onclick = function () {
            playerNamesOpened[0].style.display = "none";
            playerNamesClosed[0].style.display = "block";
            playerNamesClosed[0].innerHTML = this.innerHTML;
            thisPlayerIndex = i;
        }
    }
}

// Функция соответствия дива кнопке
function buttonclick(element) {
    let thisDisplay = element.style.display;
    if (thisDisplay === "flex") {
        return
    } else {
        for (let i = 0; i < buttonArr.length; i++) {
            if (buttonArr[i] === element) {
                element.style.display = "flex";
            } else {
                buttonArr[i].style.display = "none";
            }
        }
    }
}

// Позиционирование дивов по кругу
function reposition() {
    itemsBlock.style.height = itemsBlock.clientWidth + "px";
    menu[0].style.height = itemsBlock.clientWidth + "px";
    for (let i = 0; i < allItems.length; i++) {
        allItems[i].style.height = allItems[i].offsetWidth - 2 + "px";
        let spacer = itemsBlock.offsetWidth / 2 - (allItems[i].offsetWidth / 2) - 0.25;
        let radius = itemsBlock.offsetWidth * 0.387;
        let position = 2 * Math.PI / imageCount * i;
        let left = Math.cos(-Math.PI / 2 + position) * radius + spacer + "px";
        let top = Math.sin(-Math.PI / 2 + position) * radius + spacer + "px";
        allItems[i].style.top = top;
        allItems[i].style.left = left;
    }
}

// Действие после анимации бутылки
function endOfGame() {
    allItems[currentElement].classList.add("selected");
    allText[currentElement].classList.add("selected");
    bottle[0].classList.add("selected")
    ingamebot[0].style.display = "block";
    ingamebot[0].innerHTML = "&nbsp" + allText[currentElement].innerHTML + "&nbsp";
    gameLog[0].innerHTML = "- " + playersArr[playerIs - 1] + thisTextLog[Array.prototype.indexOf.call(thisGame, allText[currentElement].textContent)] + "<br \/>" + gameLog[0].innerHTML;
    audioFinish.currentTime = 0;
    audioFinish.play();
    setTimeout(() => audioFinish.pause(), 10000)

    allItems[currentElement].addEventListener("animationend", function (event) {
        if (this != event.target) return;
        playerIs++;
        inGame = false;
        for (let i = 0; i < btn.length; i++) {
            btn[i].disabled = false;
        }
        btnAccept[0].disabled = false;
        if (playerIs > playerNumbers) {
            playerIs = 1;
        }
        ingametop[0].innerHTML = "Ходит" + " " + playersArr[playerIs - 1];
        reposition();

        event.stopImmediatePropagation();
    })
}

// Функция установки количества игроков
function acceptPlayerNumbers() {
    if (userpass[0].value == 1) {
        playersCurrent[0].innerHTML = "Минимум 2 игрока";
        playersCurrent[0].style.color = "red";
    } else {
        if (userpass[0].value !== "") {
            playersCurrent[0].style.color = "black";
            playerNumbers = userpass[0].value;
            playerIs = 1;
            let currentArr = new Array(Number(userpass[0].value));
            for (let i = 0; i < currentArr.length; i++) {
                currentArr[i] = "игрок" + " " + (i + 1);
            }
            if (playersArr.length < currentArr.length) {
                for (let i = 0; i < playersArr.length; i++) {
                    currentArr[i] = playersArr[i];
                }
            } else {
                for (let i = 0; i < currentArr.length; i++) {
                    currentArr[i] = playersArr[i];
                }
            }
            playersArr = currentArr;
            let ul = li[0].parentNode;
            if (li.length < playersArr.length) {
                for (let i = li.length; i < playersArr.length; i++) {
                    let newli = document.createElement("li");
                    ul.append(newli);
                    newli.className = "li";
                }
                for (let i = 0; i < playersArr.length; i++) {
                    li[i].innerHTML = playersArr[i];
                }
            } else {
                for (let i = li.length - 1; i >= playersArr.length; i--) {
                    li[i].remove();
                }
            }
            refreshPlayerList();
            ingametop[0].innerHTML = "Ходит" + " " + playersArr[playerIs - 1];
            playersCurrent[0].innerHTML = "Количество игроков" + " " + playerNumbers;
            userpass[0].value = "";
        }
        return
    }
}

// Функция на предварительный выбор режима игры
function changeGameListState() {
    for (let i = 0; i < lii.length; i++) {
        lii[i].classList.remove("chosen");
    }
    this.classList.add("chosen");
}
