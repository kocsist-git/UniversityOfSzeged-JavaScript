function szamokatCsoportosit(szoveg){
    let eredmeny = {};
    eredmeny["pozitiv"]=[];
    eredmeny["nulla"]=[];
    eredmeny["negativ"]=[];
    let szamok=szoveg.split(";");
    for(let szam of szamok){
        if (szam < 0){
            eredmeny.negativ.push(parseInt(szam));
        }else if (szam > 0){
            eredmeny.pozitiv.push(parseInt(szam));
        }else{
            eredmeny.nulla.push(parseInt(szam));
        }

    }
    return eredmeny;
}

console.log(szamokatCsoportosit('7;-4;-1;0;2;5;-8'));
console.log(szamokatCsoportosit('-1;-2;-3;-4;-5'));