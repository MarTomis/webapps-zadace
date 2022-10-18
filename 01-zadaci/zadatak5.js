var func = (x) => {
    var arr = [1,2,3,4,5,6,7,8,9,10];
    var temp = [];

    for (let i of arr){
        if ( i % 3 == 0 ){
            temp.push(i)
        }
    }
    return "brojevi djeljivi s 3: " + temp
}

console.log(func())
