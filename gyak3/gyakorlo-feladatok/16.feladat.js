function legnehezebbTargy(obj){
    let maxPont=0;
    let melyik="";
    for(let key in obj){
        if (obj[key]>maxPont){
            maxPont=obj[key];
            melyik=key;
        }
    }
    return melyik;
}

console.log(legnehezebbTargy({'indiszkret matematika': 2, 'kalkulus iii': 4, 'tavolito es valosagos szamitasok': 5, 'kaveautomatak es informalis nyelvek': 1}));