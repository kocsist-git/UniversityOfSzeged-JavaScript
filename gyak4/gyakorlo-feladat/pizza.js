class Etel {
    constructor(nev, kaloriaSzam){
        this.nev = nev; 
        this.kaloriaSzam = kaloriaSzam;
        this._fogyaszthato = true;
    }

    get kaloriaSzam(){
        return this._kaloriaSzam;
    }

    set kaloriaSzam(ujErtek){
        if(ujErtek>-1){
            this._kaloriaSzam=ujErtek;
        }else{
            this._kaloriaSzam=0;
        }
    }

    get fogyaszthato(){
        return this._fogyaszthato;
    }

    set fogyaszthato(ujErtek){
        if (ujErtek === true){
            this._fogyaszthato = true;
        }else{
            this._fogyaszthato = false;
        }
    }

    info(){
        return `${this.nev} (${this.kaloriaSzam} kaloria), fogyaszthato: ${this.fogyaszthato ? "igen" : "nem"} !`;
    }

}

class Pizza extends Etel{
    constructor(nev, kaloria, ar=1500){
        if(nev.endsWith("pizza") == false){
            nev = nev + " pizza";
        }
        super(nev,kaloria)
        this.ar = ar;
        this.feltetek = [];
    }
    get ar(){
        return this._ar;
    }
    set ar(ujErtek){
        if(ujErtek<0){
            this._ar = 1000;
        }else{
            this._ar=ujErtek;
        }
    }

    megromlik(){
        super.fogyaszthato=false;
        console.log("A pizza megromlott.")
    }

    feltetetFelvesz(pizzaObj){
        if(typeof pizzaObj != "object" || "nev" in pizzaObj != true || "kaloria" in pizzaObj != true ){
            console.log("HIBA! Nem egy feltét.");
        }else if(typeof(pizzaObj["nev"]) != "string" || typeof(pizzaObj["kaloria"]) != "number"){
            console.log("HIBA! Nem megfelelo tipus!");
        }else if (this.feltetek.includes(pizzaObj["nev"])){
            console.log("HIBA! Mar van ilyen feltet!");
        }else{
            this.feltetek.push(pizzaObj["nev"]);
            this.kaloriaSzam+=pizzaObj["kaloria"];
            this.ar=this.ar+100;
            console.log("Feltet felvetel sikeres!");
        }
    }
    info(){
        return `${this.nev} (${this.kaloriaSzam} kaloria), fogyaszthato: ${this.fogyaszthato ? "igen" : "nem"}, ar: ${this.ar} forint, feltetek: ${this.feltetek.join(",")}`;
    }
}

class Vasarlo{
    constructor(nev, penz){
        this.nev = nev;
        this.penz = penz;
        this.rendelesek = [];
    }
    pizzatRendel(pizza){
        if (pizza instanceof Pizza == false){
            console.log("HIBA! Nem pizza!");
        }else  if (this.penz< pizza.ar){
            console.log("HIBA! Nincs eleg penz!");
        }else if (pizza.fogyaszthato == false){
            console.log("HIBA! Nem eheto pizza.");
        }else{
            this.penz=this.penz-pizza.ar;
            this.rendelesek.push(pizza.nev);
            console.log("Sikeres rendeles!");
        }
    }
    pizzakatListaz(){
        if(this.rendelesek.length<1) return "Nincs rendeles!";
        let lista = {};
        for (let pizza of this.rendelesek){
            if(pizza in lista){
                lista[pizza]++;
            }else{
                lista[pizza]=1;
            }
        }

        let res=[];
        for (let key in lista){
            res.push(`${lista[key]} darab ${key}`);
        }
        return res.join(", ");
    }
    
}

const etel1 = new Etel('alma', 70);
const etel2 = new Etel('sajt', -100);
etel1.kaloriaSzam = 50;
etel2.fogyaszthato = false;

console.log(etel1);         // Etel { nev: 'alma', _kaloriaSzam: 50, _fogyaszthato: true }
console.log(etel2);         // Etel { nev: 'sajt', _kaloriaSzam: 0, _fogyaszthato: false }
console.log(etel1.info());  // 'alma (50 kaloria), fogyaszthato: igen'
console.log(etel2.info());  // 'sajt (0 kaloria), fogyaszthato: nem'
console.log('----------------------------------------------------------------------------------------------------');
const p1 = new Pizza('hawaii', 1000, 1800);
const p2 = new Pizza('sonkas-kukoricas pizza', 1000);
p1.ar = 2000;

p1.megromlik();                                       // 'A pizza megromlott.'
p1.feltetetFelvesz('sajt');                           // 'HIBA! Nem egy feltet!'
p1.feltetetFelvesz({nev: 'sajt'});                    // 'HIBA! Nem egy feltet!'
p1.feltetetFelvesz({nev: 'sajt', kaloria: 'otven'});  // 'HIBA! Nem megfelelo tipus!'
p1.feltetetFelvesz({nev: 'sajt', kaloria: 50});       // 'Feltet felvetel sikeres!'
p1.feltetetFelvesz({nev: 'sajt', kaloria: 70});       // 'HIBA! Mar van ilyen feltet!'
p1.feltetetFelvesz({nev: 'sonka', kaloria: 120});     // 'Feltet felvetel sikeres!'
p1.feltetetFelvesz({nev: 'kukorica', kaloria: 30});   // 'Feltet felvetel sikeres!'

console.log(p1.info());  // 'hawaii pizza (1200 kaloria), fogyaszthato: nem, ar: 2300 forint, feltetek: sajt, sonka, kukorica'
console.log(p2.info());  // 'sonkas-kukoricas pizza (1000 kaloria), fogyaszthato: igen, ar: 1500 forint'
console.log('----------------------------------------------------------------------------------------------------');
const v1 = new Vasarlo('Sanyi', 5000);
const v2 = new Vasarlo('Bela', 10000);

v1.pizzatRendel('valami pizza');                        // 'HIBA! Nem pizza!'
v1.pizzatRendel(p1);                                    // 'HIBA! Nem eheto pizza!'
v1.pizzatRendel(p2);                                    // 'Sikeres rendeles!'
v1.pizzatRendel(new Pizza('negysajtos', 1200, 1200));   // 'Sikeres rendeles!'
v1.pizzatRendel(p2);                                    // 'Sikeres rendeles!'
v1.pizzatRendel(p2);                                    // 'HIBA! Nincs eleg penz!'

console.log(v1.penz);                               // 800
console.log(v2.penz);                               // 10000
console.log(v1.pizzakatListaz());                   // '2 darab sonkas-kukoricas pizza, 1 darab negysajtos pizza'
console.log(v2.pizzakatListaz());                   // 'Nincs rendeles!'