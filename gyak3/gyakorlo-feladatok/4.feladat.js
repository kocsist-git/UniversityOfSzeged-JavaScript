function hatvanyoz(tomb, szam){
    if(typeof(tomb)!="object" || typeof(szam)!="number"){
        return [];
    }
    for(let index = 0; index<tomb.length; index++){
        tomb[index]=tomb[index]**szam;
    }
    return tomb;
}

console.log(hatvanyoz([1, 4, 7, 2, 5], 3));
console.log(hatvanyoz('buvarszivattyu', 5));