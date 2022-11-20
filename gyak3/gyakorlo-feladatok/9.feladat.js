function emailCimetGeneral(teljesNev, szulEv=1970){
    let cim = "";
    let nev = teljesNev.split(" ");
    for (let n of nev){
        n=n.toLowerCase();
        if(n.length>3){
            cim += n[0] + n[1] + n[2];
        }else{
           cim+= n;
        }
        
    }
    cim+=String(szulEv)[3];
    cim+="@duck.com";
    return cim;
}

console.log(emailCimetGeneral('Richard Paul Astley', 1966));
console.log(emailCimetGeneral('Citad Ella'));
console.log(emailCimetGeneral('Pablo Diego Jose Francisco de Paula Juan Nepomuceno Maria de los Remedios Cipriano de la Santisima Trinidad Ruiz y Picasso', 1881));
