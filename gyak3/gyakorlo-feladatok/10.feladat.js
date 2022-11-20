function egyszamjatek(szamok){
  
    szamok = szamok.sort((a,b)=>b-a);
    
    while(szamok[0] == szamok[1]){
        szamok.shift();
        szamok.shift();
        if(szamok.length == 0) return -1;
    }
    return szamok[0];
}

console.log(egyszamjatek([100, 42, 92, 100, 81, 99, 100, 1, 99, 100]));
console.log(egyszamjatek([70, 90, 90, 80, 70, 80]));