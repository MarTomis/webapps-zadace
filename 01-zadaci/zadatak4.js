var func = (x) => {
    var sat = Math.floor(x / 60);
    var min = x % 60;

    return "ovo je " + sat + " sata" + " i " + min + " minuta"
}

console.log(func(120))
