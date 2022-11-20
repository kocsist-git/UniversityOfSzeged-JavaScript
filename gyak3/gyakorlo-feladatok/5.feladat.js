function kisKaracsonyNagyKaracsony(nap, napok){
    let het = ["hetfo", "kedd", "szerda", "csutortok", "pentek", "szombat", "vasarnap"];
    let kezdes = het.indexOf(nap);
    for (let i=0; i<napok; i++){
        kezdes++;
        if(kezdes==7){
            kezdes=0;
        }
    }
    return het[kezdes];
    
}

console.log(kisKaracsonyNagyKaracsony('szerda', 5));
console.log(kisKaracsonyNagyKaracsony('csutortok', 250));