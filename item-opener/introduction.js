let box = document.getElementsByClassName("boximage");
let itemChoice = 0;
let ItemNames = 0;
let ItemLinks = 0;
let ItemChances = 0;
let droppedItems = [];
let imageCount = 0;
let Parent = document.getElementsByClassName("inventory");
let ItemNameTag = document.getElementsByClassName("subcontent3");
let ItemImageTag = document.getElementsByClassName("itemimage");
let index = 0;

for (let i = 0; i < box.length; i++) {
    box[i].onclick = function () {
        itemChoice = Math.random() * 100;
        GetItem();
    }
}

function GetItem() {
    let counting = 0;
    for (key in items) {
        ItemNames = items[key][0];
        ItemChances = items[key][1];
        ItemLinks = items[key][2];
        counting += Number(ItemChances);
        if (counting >= itemChoice) {
            for (let i = 0; i < ItemNameTag.length; i++) {
                ItemNameTag[i].innerHTML = "Your last item is <br/>" + ItemNames
                ItemImageTag[i].src = ItemLinks;
                ItemImageTag[i].hidden = false;
                ItemImageTag[i].classList.remove("animation");
                void ItemImageTag[i].offsetWidth;
                ItemImageTag[i].classList.add("animation"); //способ перезапуска анимации, другой способ ниже закомменчен
                // let elm = ItemImageTag[i];
                // let newone = elm.cloneNode(true);
                // elm.parentNode.replaceChild(newone, elm);
            }
            index = droppedItems.indexOf(ItemNames);
            CheckingItemInArray()
            return
        }
    }
}

function CreateImage() {
    let NewItem = document.createElement("img"); // создаваемая имага по клику
    NewItem.className = "puttingImage";
    NewItem.id = "item" + imageCount;
    for (let k = 0; k < Parent.length; k++) {
        Parent[k].append(NewItem);
    }
    let ItemBYID = document.getElementById("item" + imageCount);
    ItemBYID.src = ItemLinks;
    ItemBYID.name = ItemNames;
    CreateText();
}

function CreateText() {
    let ItemNumbers = document.createElement("div");
    ItemNumbers.className = "textImage";
    ItemNumbers.id = "text" + imageCount;
    for (let j = 0; j < Parent.length; j++) {
        Parent[j].append(ItemNumbers);
    }
    ItemNumbers.innerHTML = "1";
}

function CheckingItemInArray() {
    if (index === -1) {
        droppedItems.push(ItemNames);
        CreateImage();
        imageCount++;
    } else {
        EditText()

    }
}

function EditText() {
    for (let i = 0; i <= droppedItems.length - 1; i++) {
        if (droppedItems[i] === ItemNames) {
            let currentElement = document.getElementById("text" + i);
            let currentValue = currentElement.innerHTML;
            currentValue = Number(currentValue.substring(0)) + 1;
            currentElement.innerHTML = currentValue;

        }
    }
}

// for (k = 0; k < 10000; k++) {
//     itemChoice = Math.random() * 100;
//     GetItem();
// }
