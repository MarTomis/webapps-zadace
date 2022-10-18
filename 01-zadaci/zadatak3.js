var func = (x) => {
    if ( x >= 100 && x <= 150000){
        console.log( x ,"je unutar [100,15000]")
    }
    else console.log( x ,"nije unutar [100,15000]")
}

console.log(func(53))
