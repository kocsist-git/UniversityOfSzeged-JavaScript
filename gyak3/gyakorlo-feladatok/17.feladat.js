function szavazatKulonbseg(obj){
    let maxPont=0;
    for(let key in obj){
        if (obj[key]>maxPont){
            maxPont=obj[key];
        }
    }
    let minPont = maxPont;
    for(let key in obj){
        if (obj[key]<minPont){
            minPont=obj[key];
        }
    }
    return maxPont-minPont;
}

console.log(szavazatKulonbseg({'indiszkret matematika': 2, 'kalkulus iii': 4, 'tavolito es valosagos szamitasok': 5, 'kaveautomatak es informalis nyelvek': 1}));