let ures1 = new Object();
let ures2 = {};

let szemely = {
    nev: "Béla",
    eletkor: 30,
    foglalkozas: "programozó",
    hazas: false
};

console.log(szemely.nev);       // . operátor
console.log(szemely["nev"]);    // [] operátor

let nev = "eletkor";
console.log(szemely.nev); // Nem a valtozo erteket hasznalja, hanem a nevet
console.log(szemely[nev]); // A valtozo erteket hasznalja

if (szemely.foglalkozas !== undefined) {
    console.log("Van foglalkozas nevű property-nk!");
    console.log("Értéke: " + szemely.foglalkozas);
}

if ("foglalkozas" in szemely) {
    console.log("Van foglalkozas nevű property-nk!");
}

// ertek modositasa

szemely.foglalkozas = "asztronauta";  // szemely["foglalkozas"] = "asztronauta" is helyes
console.log(szemely.nev + " munkát váltott, mától " + szemely.foglalkozas + "!");

// uj property-ertek beszurasa
szemely.kedvencSzin = "átlátszó";
console.log(szemely);

//property-ertek par torlese
delete szemely.foglalkozas;
console.log(szemely);

// objektumok bejarasa
console.log("-------------------------------------");
for (let kulcs in szemely) {
    console.log(kulcs + " értéke: " + szemely[kulcs]);
}
console.log("-------------------------------------");
for (let kulcs of Object.keys(szemely)) {
    console.log(kulcs + " értéke: " + szemely[kulcs]);
}
console.log("-------------------------------------");
for (let [kulcs, ertek] of Object.entries(szemely)) {
    console.log(kulcs + " értéke: " + ertek);
}
