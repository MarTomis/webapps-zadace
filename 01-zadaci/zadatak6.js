var func = (x) => {
    var temp = x.split(" ");

    for ( var i = 1; i < temp.length; i++){
        temp[i] = temp[i].charAt(0).toUpperCase() + temp[i].slice(1);
    }
    var camel = temp.join("")

    return camel
}
console.log(func("web apps vjezbe"))
