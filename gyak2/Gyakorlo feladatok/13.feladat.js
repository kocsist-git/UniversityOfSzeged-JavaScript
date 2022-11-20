function karakterTobbszoroz(szoveg){
    if(typeof(szoveg) != "string" || szoveg == ""){
        return "HIBA!"
    }else{
        let eredmeny = "";
        for (let i=0; i<szoveg.length; i++){
            eredmeny+=szoveg[i].repeat(i+1);
        }
        return eredmeny;
    }
}



console.log(karakterTobbszoroz("sajt"));
console.log(karakterTobbszoroz(true));