let favFruit = prompt("What is you favorite fruit?");
console.log(favFruit);


function capitalize() {
    favFruitCap = favFruit.charAt(0).toUpperCase();
    favFruit = favFruitCap + favFruit.slice(1);
}


if (favFruit == null) {
    favFruit = prompt("Don't have one? You'll get scurvy! You gotta like something?");
}

if (favFruit == "coconut") {
    capitalize();
    document.write(favFruit + "? Eww, that's really gross. Exit this page immediately");
} else if (favFruit == "strawberries" || "plums" || "blackberries") {
    capitalize();
    document.write(favFruit + "? I love those too!");
} else {
    capitalize();
    document.write(favFruit + "? Solid choice!");
}

function fruitRec() {
    confirm("Anything but coconut!");
}