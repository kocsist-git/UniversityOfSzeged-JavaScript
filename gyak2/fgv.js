function egyKlasszFuggveny() {
    var valamiValtozo = 10;
    let valamiMasikValtozo = 20;
}

// console.log(valamiValtozo);              // HIBA!!
// console.log(valamiMasikValtozo);         // SZINTÉN HIBA!!

function info(nev, eletkor) {
    console.log(nev + " " + eletkor + " éves.");
}

info("Józsi");          // eletkor értéke: undefined
// Józsi undefined éves.

function osszead(szam1, szam2) {
    return szam1 + szam2;
}

console.log(osszead(10, 20, 30, 40));   // a 30 és 40 paramétereket figyelmen kívül hagyjuk
// 30
//Nem kapunk hibat

function koszon(nev) {
    if (nev === undefined) {        // ha a nev paramétert nem adták meg...
        console.log("Add meg annak a nevét, akinek köszönni szeretnél!");
    } else {
        console.log("Szia " + nev + "!");
    }
}

koszon();
koszon("János");

function hello() {
    console.log("Hello!");
}

function hello(nev) {   // ezt fogjuk tudni meghívni
    console.log("Hello " + nev + "!");
}

hello();
hello("János");


function hello2(nev="Senki") {
    console.log("Hello " + nev + "!");
}

hello2();                // nev értéke: "Senki"
hello2("János");         // nev értéke: "János"

function info(nev, eletkor=20, foglalkozas="programozó") {
    console.log(nev + " " + eletkor + " éves és " + foglalkozas + ".");
}

info("Józsi");
info("Józsi", 50);
info("Józsi", 50, "asztronauta");

// ő lesz majd a callback függvényünk, amit meghívunk egy másik függvényben

function zenetJatszik() {
    console.log("Hadd szóljon a Rock and Roll!");
}

// egy függvény, amelynek a callback nevű paramétere szintén egy függvény lesz

function ejszakaNeZenelj(ora, callback) {
    if (ora >= 22 || ora <= 6) {
        console.log("Éjszaka van, alszanak a szomszédok!");
    } else {
        callback();     // callback függvény meghívása
    }
}

// függvényhívás: a callback függvény a zenetJatszik függvény lesz

ejszakaNeZenelj(5, zenetJatszik);

myFunction(myCallback);
function myCallback(param) {
    console.log("Callback függvény meghívva " + param + " paraméterrel.");
}

function myFunction(callback) {
    if (typeof callback === "function") {   // típusellenőrzés...
        callback("kiscica");
    }
}



let osszead2 = function (a, b) {return a + b;}


let osszeg = osszead2(10, 5);        // függvényhívás
console.log(osszeg);
// csak a fuggveny definialasa utan hivhato meg.
// a hagyomanyos esettel ellentetben hiszen ott a definialas elott is meghivhato a fgv

let koszon2 = () => { console.log("Hello World!"); }
let kedvencFagyi = iz => { console.log("A kedvenc fagyiízünk: " + iz); }
let osszead3 = (a, b) => { return a + b; }

koszon2();
kedvencFagyi("csokoládé");
console.log(osszead3(10, 5));
