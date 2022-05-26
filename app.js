let favFruit = prompt("What is you favorite fruit?");
console.log(favFruit);
document.write(favFruit + "?");

if (favFruit == "coconut"){
    document.write(" Eww, that's really gross. Exit this page immediately");
} else if (favFruit == "strawberries"){
    document.write(" I love those too!");
} else if (favFruit == "plums"){
    document.write(" I love those too!");
} else if (favFruit == "blackberries"){
    document.write(" I love those too!");
} else {
    document.write(" Solid choice!");
}

function fruitRec() {
    confirm("Anything but coconut!");
}