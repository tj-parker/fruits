let favFruit = prompt("What is you favorite fruit?");
console.log(favFruit);


if (favFruit == "coconut"){
    document.write(favFruit + "? Eww, that's really gross. Exit this page immediately");
} else if (favFruit == "strawberries"){
    document.write(favFruit + "? I love those too!");
} else if (favFruit == "plums"){
    document.write(favFruit + "? I love those too!");
} else if (favFruit == "blackberries"){
    document.write(favFruit + "? I love those too!");
} else if (favFruit == null){
    document.write("Don't have one? You'll get scurvy!");
} else {
    document.write(favFruit + "? Solid choice!");
}

function fruitRec() {
    confirm("Anything but coconut!");
}