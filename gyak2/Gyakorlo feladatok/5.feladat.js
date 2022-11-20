function kobosszeg(also, felso){
    let osszeg = 0;
    for (let i = also; i<= felso; i++){
        osszeg+= i**3;
    }
    return osszeg;
}

console.log(kobosszeg(1,3));
console.log(kobosszeg(10,100));