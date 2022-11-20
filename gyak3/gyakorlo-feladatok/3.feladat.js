function szepTomb(tomb){
    if(typeof(tomb) !== "object"){
        return false;
    }
    let tipus = typeof(tomb[0]);
    for (let index=1; index<tomb.length;index++){
        if (typeof(tomb[index])!=tipus){
            return false;
        }
    }
    return true;
}

console.log(szepTomb(['alma', 'korte', 'szilva', 'barack', 'palinka']));
console.log(szepTomb([10, 20, 30, 40, '50', 60, 70]));
console.log(szepTomb([]));
console.log(szepTomb('YEE HAW!'));