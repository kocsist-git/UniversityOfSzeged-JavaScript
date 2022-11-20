function szamjegyAtlag(szam){
    if (typeof(szam) == "number"){
        szam = Math.abs(szam);
        let szamString = szam.toString();
        let szamjegyekOsszege = 0;
        for (let i of szamString){
            szamjegyekOsszege+=parseInt(i);
        }       
        return szamjegyekOsszege / parseInt(szam.toString().length);
    }else{
        return -1;
    }
}

console.log(szamjegyAtlag(741258));
console.log(szamjegyAtlag(-97968));
console.log(szamjegyAtlag("kecske"));