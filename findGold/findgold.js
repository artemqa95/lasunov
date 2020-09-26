let getRandomNumber = function (size) {
    return Math.floor(Math.random() * size);
};
let width = $("#map").width();
let height = $("#map").height();
let clicksNumber = 0;
let maxClicksCount = 100;
let target = {
    x: getRandomNumber(width),
    y: getRandomNumber(height)
}

function refreshGame() {
    target = {
        x: getRandomNumber(width),
        y: getRandomNumber(height)
    }
    clicksNumber = 0;
    $("p").text("");
}
let getDistanceHint = function (distance) {
    if (distance < 10) {
        return "Обожжешься!";
    } else if (distance < width*0.05) {
        return "Очень горячо";
    } else if (distance < width*0.1) {
        return "Горячо";
    } else if (distance < width*0.2) {
        return "Тепло";
    } else if (distance < width*0.3) {
        return "Ни тепло ни холодно";
    } else if (distance < width*0.4) {
        return "Холодно";
    } else if (distance < width*0.6) {
        return "Холоднее холодного";
    } else if (distance < width*0.8) {
        return "Очень холодно";
    } else if (distance < width*0.9) {
        return "Очень очень холодно";
    } else {
        return "Замерзнешь!";
    }
};
let getDistance = function (event, target) {
    let diffX = event.offsetX - target.x;
    let diffY = event.offsetY - target.y;
    return Math.sqrt((diffX * diffX) + (diffY * diffY));
};
$("#map").click(function (event) {
    event.preventDefault();
    clicksNumber++;
    let distance = getDistance(event, target);
    console.log(distance);
    let distanceHint = getDistanceHint(distance);
    if (distance < 8) {
        alert("Клад найден! Сделано кликов: " + clicksNumber);
        refreshGame();
        return;
    }
    $("p").text(distanceHint + " (осталось " + (maxClicksCount-clicksNumber) + " кликов)")
    if (clicksNumber>99) {
        alert("Вы проиграли! Сделано максимальное количество кликов: " + maxClicksCount);
        refreshGame();
        return;
    }
})
document.getElementById("map").ondragstart = function (event) {
return false;
}
