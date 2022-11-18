console.log("Hello!");
console.log("Ez a konzolablakon fog megjelenni.");

let eletkor = 12;       // a felhasználó életkora

if (eletkor < 18) {
    console.log("Kiskorú vagy.");
    console.log("Még " + (18 - eletkor) + " év és nagykorú leszel.");
} else if (eletkor >= 20 && eletkor <= 29) {
    console.log("Huszonéves vagy.");
} else {
    console.log("Nagykorú vagy.");
}

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

//  ternary operátor
let szam = 42;
console.log(szam % 2 === 0 ? "Páros." : "Páratlan.");

// while-ciklus

let i = 1;
while (i <= 10) {
    console.log(i);
    i++;
}

// do while-ciklus

let j = 1;

do {
    console.log(j);
    j++
} while (j <= 10);

// for-ciklus

for (let i = 1; i <= 10; i++) {
    console.log(i);
}
