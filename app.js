let favFruit = prompt("What is you favorite fruit?");
console.log(favFruit);

function capitalize() {
    favFruitCap = favFruit.charAt(0).toUpperCase();
    favFruit = favFruitCap + favFruit.slice(1);
}

if (favFruit == null) {
    favFruit = prompt("Don't have one? You'll get scurvy! You gotta like something?");
}

function askFruit() {
    if (favFruit == "coconut") {
        capitalize();
        document.write(favFruit + "? Eww, that's really gross. Exit this page immediately");
    } else if (favFruit == "strawberries" || favFruit == "plums" || favFruit == "blackberries") {
        capitalize();
        document.write(favFruit + "? I love those too!");
    } else if (favFruit == "apples" || favFruit == "oranges" || favFruit == "bananas" || favFruit == "mangos" || favFruit == "cherries") {
        capitalize();
        document.write(favFruit + "? Solid choice!");
    } else {
        capitalize();
        favFruit = prompt(favFruit + "? That one's not on the list, might've forgot to add that to the database. Try another!");
        askFruit();
    }
}

askFruit();

function fruitRec() {
    let userNumber = prompt("Pick a number between 1-5");
    for (let i = 1; i <= userNumber; i++){
        document.write("<img src='shrug-emoji.gif' />");
    }
    return userNumber;
}

fruitRec();