function fullStack(front, back){
    let full = [];
    front=front.split(";");
    back=back.split(";");
    for (let nev of front){
        if (back.indexOf(nev)>-1){
            full.push(nev);
        }
    }
    return full;
}

console.log(fullStack('Zsiros B. Odon;Koaxk Abel;Heu Reka;Riz Otto', 'Riz Otto;Rabsz Olga;Trab Antal;Koaxk Abel;Winch Eszter'));
console.log(fullStack('Citad Ella;Techno Kolos', 'Git Aron;Teask Anna'));