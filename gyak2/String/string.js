let dalszoveg = `Never gonna give you up
Never gonna let you down 
Never gonna run around
And desert you`

let szoveg = "Java" + "Script";
console.log(szoveg);

console.log(szoveg.length);

console.log("A 0. indexű karakter: " + szoveg[0]);
console.log("A 4. indexű karakter: " + szoveg[4]);
console.log("Az utolsó karakter: " + szoveg[szoveg.length - 1]);

console.log(szoveg[800]); // tulindex
console.log(szoveg[-1]); //alulindex

szoveg[0] = "f";                // ennek JavaScriptben nincs hatása!
// itt is Immutable, nem dob hibat 
console.log(szoveg);


let s = " Ez itt az  ";
s.toLowerCase()//: csupa kisbetűssé alakítja az s stringet
s.toUpperCase()//: csupa nagybetűssé alakítja az s stringet
s.startsWith(" ")//: igazat ad vissza, ha az s string a v értékkel kezdődik
s.endsWith("z")//: igazat ad vissza, ha az s string a v értékre végződik
s.substr(0, 3)//: visszaadja az s stringből egy részstringet, a start indexű karakterétől kezdve, length karakteren keresztül
s.indexOf("az")//: visszaadja a text szöveg legelső előfordulásának a kezdőindexét az s stringen belül (-1-et ad vissza, ha a keresett szöveg nem szerepel az s stringben)
s.replace("z", "z!")//: lecseréli az s stringben a legelső old részstringet a new szövegre
s.trim()//: eltávolítja a helyközöket az s string elejéről és végéről
s.split(" ")//: feldarabolja az s stringet delim karakterek mentén (egy tömböt ad vissza)

let szoveg2 = "    A citromos fagyi a legjobb fagyi        ";

szoveg2 = szoveg2.trim();     // helyközök eltávolítása a szöveg elejéről és végéről

console.log(szoveg2.toLowerCase());      // kisbetűsítés
console.log(szoveg2.toUpperCase());      // nagybetűsítés
console.log(szoveg2.endsWith("fagyi"));  // a "fagyi" stringre végződik-e a szöveg
console.log(szoveg2.substr(0, 8));       // az első 8 karakter
console.log(szoveg2.replace("fagyi", "süti"));   // részstring lecserélése (csak az első előfordulást!)

if (szoveg2.indexOf("fagyi") >= 0) {     // részstring előfordulásának vizsgálata
    console.log("Szerepel a szövegben fagyi!");
} else {
    console.log("A szövegben nem szerepel fagyi!");
}

const szavak = szoveg2.split(" ");       // feldarabolás szóközök mentén
console.log(szavak);

let nev = "Józsi", eletkor = 20, foglalkozas = "programozó";
console.log(`${nev} egy ${eletkor} éves ${foglalkozas}.`);  // ez talán így kényelmesebb :)
