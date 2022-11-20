function valaszokatOsszesit(tomb){
    let eredmeny = {};

    for (let targy of tomb){
        if (targy.toLowerCase() in eredmeny){
            eredmeny[targy.toLowerCase()]++;
        }else{
            eredmeny[targy.toLowerCase()]=1;
        }
    }

    return eredmeny;
}

console.log(valaszokatOsszesit([
    'Indiszkret Matematika', 'Kalkulus III', 'Tavolito es valosagos szamitasok',
    'kalkulus iii', 'tavolito es valosagos szamitasok',
    'TAVOLITO ES VALOSAGOS SZAMITASOK', 'kalkulus iii', 'Kalkulus III', 
    'Indiszkret Matematika', 'tAvOlItO Es vAlOsAgOs sZaMiTaSoK', 
    'Kaveautomatak es informalis nyelvek', 'tavolito es valosagos szamitasok'
  ]));