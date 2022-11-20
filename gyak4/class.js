class Jarmu {
    constructor(marka, sebesseg=0){
        this._marka = marka;
        this._sebesseg = sebesseg;
        this.utasok = [];
    }

    info() {
        console.log(`${this._marka} márkájú jármű, melynek sebessége ${this._sebesseg} km/h, és ${this.utasok.length} utast szállít.`);
    }

    utastFelvesz(utasNeve) {
        console.log("Az új utasunk: " + utasNeve);
        if (typeof utasNeve === "string"){
            this.utasok.push(utasNeve);
        }
    }

    get sebesseg(){
        return this._sebesseg
    }

    get marka(){
        return this._marka
    }

    set sebesseg(ujSebesseg){
        if (typeof ujSebesseg === "number" && ujSebesseg>-1){
            this._sebesseg = ujSebesseg;
        }else {
            console.log("A sebesség értéke csak nemnegatív szám lehet");
        }
        
    }

    set marka(ujMarka){
        if (typeof ujMarka === "string" && ujMarka!= ""){
            this._marka = ujMarka;
        }else {
            console.log("A márka csak karakter tipusu nem ures valami lehet");
        }
        
    }

}

class Auto extends Jarmu{
    constructor (marka, sebesseg=0, onvezeto=false){
        super(marka,sebesseg);
        this.onvezeto=onvezeto;
    }
    info() {                    // overriding: az ősből örökölt info() metódus felüldefiniálása
        console.log(`${this.marka} autó, (sebesség: ${this.sebesseg} km/h), utasok száma: ${this.utasok.length}, önvezető: ${this.onvezeto ? "igen" : "nem"}`);
    }

    dudal() {                   // új metódus definiálása
        console.log("TÜTŰŰŰ!");
    }
}

const jarmu1 = new Jarmu("Škoda", 90);
const jarmu2 = new Jarmu("Ikarus");     // a sebesség a default 0-s értéket veszi fel

jarmu1.utastFelvesz("Pista bácsi");
jarmu1.info();
jarmu2.info();

const jarmu = new Jarmu("Lada", 50);
jarmu.sebesseg = 60;            // setter hívás
jarmu.sebesseg = -100;          // setter hívás (hibás adat)
console.log(jarmu.sebesseg);    // getter hívás
console.log(jarmu.marka);    // getter hívás
jarmu.marka="Tesla";
console.log(jarmu.marka);    // getter hívás

const auto1 = new Auto("Trabant", 40, false);
const auto2 = new Auto("Tesla", 130, true);

auto2.utastFelvesz("Elon Musk");    // ez a metódus az ősosztályból jön
auto2.utastFelvesz("Bill Gates");

auto1.dudal();
auto1.info();
auto2.info();

console.log(jarmu instanceof Jarmu);        // true
console.log(auto1 instanceof Jarmu);         // true
console.log(jarmu instanceof Auto);         // false