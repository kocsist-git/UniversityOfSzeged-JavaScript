function kibont(szoveg){
    let eredmeny = "";
    for(let i = 0; i<szoveg.length-1; i++){
        if(parseInt(szoveg[i])>0){
            let s = szoveg[i+1];
            eredmeny+=s.repeat(parseInt(szoveg[i]));
            i++;
        }else{
            eredmeny+=szoveg[i];
        }
    }
    return eredmeny;
}

console.log(kibont('Hah5o! Van i2t valaki3?'));

