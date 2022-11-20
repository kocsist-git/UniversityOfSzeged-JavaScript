function kobosszeg(also, felso){
    let osszeg = 0;
    for (let i = also; i<= felso; i++){
        osszeg+= i**3;
    }
    return osszeg;
}

function kobosszegetMeghiv(szam, szam2, callback){
    if (typeof(szam) === "number" && typeof(szam2) === "number" && typeof(callback) === "function"){
        if (szam2>szam){
            return callback(szam,szam2);
        }else{
            return callback(szam2, szam)
        }
    }
}

console.log(kobosszegetMeghiv(100,10,kobosszeg));