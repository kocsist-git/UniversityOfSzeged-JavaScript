let szemely = {
    nev: "Béla",
    eletkor: 30,
    bemutatkozik: function() {
        // az objektumon belül a property-ket a this kulcsszóval érhetjük el
        console.log("Szia! " + this.nev + " vagyok, " + this.eletkor + " éves.");
    }
};

for (let [kulcs, ertek] of Object.entries(szemely)) {
    if (typeof ertek === "function") {  // ha a property-hez tartozó érték függvény, hívjuk meg
        // ertek();             // nem jó! (az adattagok értéke undefined lesz)
        ertek.apply(szemely);   // így már jó lesz
    }
}

szemely.bemutatkozik.apply(szemely);