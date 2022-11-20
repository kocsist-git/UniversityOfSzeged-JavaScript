function betucsere(szoveg){
    let eredmeny="";
    for (let i = 0; i<szoveg.length; i++){
        if(szoveg[i] == szoveg[i].toLocaleLowerCase()){
            eredmeny+=szoveg[i].toLocaleUpperCase();
        }else{
            eredmeny+=szoveg[i].toLocaleLowerCase();
        }
    }
    return eredmeny;
}

console.log(betucsere('SegITsEg! elROMloTt A cAPs LocK!'));