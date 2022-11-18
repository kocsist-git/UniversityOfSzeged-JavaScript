let jegy = 5;           // a kérdéses jegy

switch (jegy) {
    case 1: console.log("Elégtelen"); break;
    case 2: console.log("Elégséges"); break;
    case 3: console.log("Közepes"); break;
    case 4: console.log("Jó"); break;
    case 5: console.log("Jeles"); break;

    // ha a fentiek közül egyik esetre sem illeszkedünk, akkor a default ág fut le...
    default: console.log("Érvénytelen érdemjegy!");
}
