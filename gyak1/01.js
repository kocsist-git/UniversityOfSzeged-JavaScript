// egysoros komment 

/* 
    tobb
    soros
    komment
*/

alert("Hello! Én egy felugro ablak vagyok.")

document.write("Hello! Én a weboldalon fogok megjelenni.");

console.log("Hello! Én a konzolon jelenek meg.");

console.log("almás" + "pite");

console.log(typeof 42);                         // "number"
console.log(typeof 42 === "number");            // true

let n = false;

const konstans = 'Nincs kérdés';

let val;            // val típusa: undefined
console.log(val);

val = 42;           // val típusa: number
console.log(val);

val = "Béla";       // val típusa: string
console.log(val);

"2" + 5;        // "2" + "5" = "25"
2.0 + "5";      // "2" + "5" = "25"

"2" * 5         // 2 * 5 = 10
"sajt" * 5      // NaN

let a = Number("3.14");         // 3.14
let b = Number("101 kiskutya"); // NaN (Not a Number)
let c = parseInt(3.14);         // 3
let d = String(42);             // "42"

// number -> boolean konverzió esetén: 0 -> false, minden más -> true
let e = Boolean(0);             // false

console.log(42 == "42"); // true
console.log(42 === "42"); // false

document.getElementById() //: megkeresi az adott id értékkel rendelkező elemet
document.getElementsByTagName() //: megkeresi az adott tagnévvel rendelkező elemeket (egy indexelhető kollekciót ad vissza)
document.getElementsByClassName() //: megkeresi az adott class értékkel rendelkező elemeket (egy indexelhető kollekciót ad vissza).

innerText //: egy objektum szöveges tartalma
innerHTML //: egy objektum HTML tartalma.

