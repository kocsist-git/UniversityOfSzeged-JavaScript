function leghosszabbNyeroszeria(szoveg){
    let a = szoveg.split("0");
    let leghosszabb = 0;
    for (let i = 0; i<a.length; i++){
        if (leghosszabb<a[i].length){
            leghosszabb = a[i].length;
        }
    }
    return leghosszabb;
}


console.log(leghosszabbNyeroszeria("0000100111000000110000101"));
console.log(leghosszabbNyeroszeria("1101001111010000011110011"));
console.log(leghosszabbNyeroszeria("0000000000000000000000000"));