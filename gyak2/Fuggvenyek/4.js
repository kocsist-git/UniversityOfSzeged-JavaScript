function koszon(nev) {
    if (nev === undefined) {        // ha a nev paramétert nem adták meg...
        console.log("Add meg annak a nevét, akinek köszönni szeretnél!");
    } else {
        console.log("Szia " + nev + "!");
    }
}

koszon();
koszon("János");

//Parameterek megletének ellenőrzése

/* Eredmeny
Add meg annak a nevét, akinek köszönni szeretnél!
Szia János!
*/