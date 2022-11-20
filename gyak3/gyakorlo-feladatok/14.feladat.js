function statisztika(pontszamok){
    if (typeof(pontszamok) != "object" || pontszamok.length<3){
        return {};
    }
    let eredmeny = {};

    let atlag = 0;
    for (szam of pontszamok){
        atlag+=szam;
    }
    atlag=atlag/pontszamok.length;
    eredmeny["atlag"]=atlag;

    pontszamok = pontszamok.sort((a,b)=>a-b);
    if(pontszamok.length % 2 == 0){
        eredmeny["median"] = (pontszamok[(pontszamok.length/2)-1] + pontszamok[(pontszamok.length/2)]) / 2;
    }else{
        eredmeny["median"] = pontszamok[(pontszamok.length/2)-0.5];
    }

    eredmeny["terjedelem"] = pontszamok[pontszamok.length-1] - pontszamok[0];

    return eredmeny;
}


console.log(statisztika([29, 48, 0, 36, 20]));
console.log(statisztika([42, 35, 23, 50, 46, 25, 50, 47, 18, 38]));
console.log(statisztika([38, 45]));