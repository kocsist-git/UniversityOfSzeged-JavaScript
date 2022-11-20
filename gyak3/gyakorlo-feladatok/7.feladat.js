function gepeles(szoveg){
    if(typeof(szoveg)!="string" || szoveg == ""){
        return "HIBA!";
    }
    szoveg=szoveg.split(";");
    if (szoveg.length == 1){
        return `${szoveg[0].trim()} eppen gepel...`;
    }
    if (szoveg.length == 2){
        return `${szoveg[0].trim()} es ${szoveg[1].trim()} eppen gepel...`;
    }
    if (szoveg.length > 2){
        return `${szoveg[0].trim()}, ${szoveg[1].trim()} es ${szoveg.length-2} tovabbi felhasznalo eppen gepel...`;
    }
}

console.log(gepeles('SuTi'));
console.log(gepeles('szte4k;catman6     ;    Sziklas  ;          Aerosol;cservZenberg'));
console.log(gepeles(''));