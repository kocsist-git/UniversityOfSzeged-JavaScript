function otoslotto(){

    let szamok = new Set();
    do{
        szamok.add( Math.floor(Math.random()*91));
    }while(szamok.size!=5)
    let res = Array.from(szamok).sort((a,b)=>a-b);
    return res;
   
}

console.log(otoslotto());