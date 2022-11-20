let tomb1 = new Array(10);      // egy 10 elem tárolósára képes tömb létrehozása (üres értékek)
console.log(typeof(tomb1));
let tomb2 = new Array(10, 20);  // egy, a 10 és 20 elemeket tároló tömb létrehozása

let tomb3 = [];                 // üres tömb létrehozása
let tomb4 = [10, 20, 30, 40];   // szám adatokat tároló tömb létrehozása

let gyumolcsok = ["alma", "körte", "szilva", "barack"];
console.log(gyumolcsok.length); // 4

let macskak = ["Garfield", "Nermal", "Grumpy Cat", "Tom"];

console.log(macskak[0]);                        // a legelső elem
console.log(macskak[macskak.length - 1]);       // az utolsó elem
console.log(macskak[-1]);                       // ez JavaScriptben nem működik!
// undefined 

macskak[1] = "Szilveszter";
console.log(macskak);

for (let i = 0; i < macskak.length; i++) {
    console.log(macskak[i]);
}

console.log("----------------------------");

// listaszerű bejárás - a macska változó rendre felveszi a tömbelemek értékét

for (let macska of macskak) {
    console.log(macska);
}

/*
t.pop() törli (és visszaadja) az utolsó elemet a t tömbből
t.push(a, b, ...): beszúrja az a, b, ... elemeket a t tömb végére
t.shift(): törli (és visszaadja) a legelső elemet a t tömbből
t.unshift(a, b, ...): beszúrja az a, b, ... elemeket a t tömb elejére
t.sort(): rendezi a t tömb elemeit
t.indexOf(e): visszaadja az e elem legelső előfordulásának a kezdőindexét a t tömbön belül (-1-et ad vissza, ha nem szerepel benne)
t.slice(startIndex, endIndex): visszaadja a tömb startIndex és endIndex közötti elemeit
mindig egy új tömböt ad vissza (nem módosítja az eredeti tömböt)
az endIndex indexű elem már nem lesz benne a visszaadott tömbben
az endIndex paraméter elhagyható: ha nem adjuk meg, akkor startIndex-től kezdve a tömb összes "hátralévő" elemét kapjuk vissza
t.join(separator): egy stringgé egyesíti a tömböt, amiben a tömbelemek separator karakterrel lesznek elválasztva
*/
let bevasarlolista = ["tej", "tojás", "sajt", "üdítő"];

bevasarlolista.pop();                           // törlés a végéről
bevasarlolista.push("kenyér", "felvágott");     // beszúrás a végére
bevasarlolista.shift();                         // törlés az elejéről
bevasarlolista.unshift("kalkulus példatár");    // beszúrás az elejére

bevasarlolista.sort();                          // rendezés
let szovegkent = bevasarlolista.join("; ");     // egyesítés szöveggé
console.log("Ezeket kell megvennünk: " + szovegkent);

let fontos = bevasarlolista.slice(1, 3);        // "résztömb" lekérése
console.log("Minél hamarabb vegyük meg:");
console.log(fontos);

console.log(bevasarlolista instanceof Array);