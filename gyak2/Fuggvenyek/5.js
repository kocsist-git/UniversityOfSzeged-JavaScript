function hello() {
    console.log("Hello!");
}

function hello(nev) {   // ezt fogjuk tudni meghívni
    console.log("Hello " + nev + "!");
}

hello();
hello("János");

// nincs funcion overload. Mindig a kesobb definiált fuggveny lesz meghivva. 

/*eredmeny
Hello undefined!
Hello János!
*/