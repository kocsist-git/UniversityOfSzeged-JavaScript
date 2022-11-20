function isDisarium(szam){
    let eredmeny = 0;
    let elvart=szam;
    if(Number.isInteger(szam) && szam>-1){
        szam=szam.toString();
        for(let index = 0; index<szam.length;index++){
            eredmeny+=szam[index] ** (index+1);
        }
        return eredmeny==elvart ? true : false;
    }else{
        return undefined;
    }
}

function descarte(a,b){
    c = [];
    for (let betuA of a){
        for( let betuB of b){
            c.push(betuA + betuB);
        }
    }
    return c
}
function letterCombinations(szamok){

let szotar = {
        "2":"abc",
        "3":"def",
        "4":"ghi",
        "5":"jkl",
        "6":"mno",
        "7":"pqrs",
        "8":"tuv",
        "9":"wxyz"
    };
    let eredmeny = szotar[szamok[0]];
    if (szamok.length==1) {
        let res = [];
        res.push(eredmeny);
        return res;
    }
    for (let i=0; i<szamok.length-1;i++){
        eredmeny = descarte(eredmeny, szotar[szamok[i+1]]) ;
    }

    return eredmeny;
}

class Savanyusag{
    constructor(minosegetMegorzi, nyitva, hozzavalok){
        this.minosegetMegorzi = minosegetMegorzi;
        this.nyitva = nyitva;
        this.hozzavalok = hozzavalok;
        let halmaz = new Set();
        for (let hozzavalo of hozzavalok){
            halmaz.add(hozzavalo);
        }
        if(halmaz.length == hozzavalok.length){
            this._tipus=hozzavalok[0];
        }else{
            this._tipus="csalamade";
        }
        
    }

    get tipus(){
        return this._tipus;
    }

    set tipus(hozzavalo){
        if(this.hozzavalok.includes(hozzavalo)){
            this._tipus = hozzavalo;
        }
    }

    szavatos(ev,honap,nap){
        let Sdate = new Date(this.minosegetMegorzi[0],this.minosegetMegorzi[1],this.minosegetMegorzi[2]);
        let Mdate = new Date(ev,honap,nap);
        if(Sdate>Mdate){
            return true;
        }else{
            return false;
        }
    }

    fedeletElcsavar(){
        if(this.nyitva) {
            this.tipus.nyitva = false;
        }else{
            this.tipus.nyitva = true;
        }
    }

    osszeont(savanyusag){
        if(savanyusag instanceof Savanyusag){
            if(this.nyitva && savanyusag.nyitva){
                for(hozzavalo of savanyusag.hozzavalok){
                    this.hozzavalok.push(hozzavalo);
                }
            let Sdate = new Date(this.minosegetMegorzi[0],this.minosegetMegorzi[1],this.minosegetMegorzi[2]);
            let Mdate = new Date(savanyusag.minosegetMegorzi[0],savanyusag.minosegetMegorzi[1],savanyusag.minosegetMegorzi[2]);
            
            if(Sdate>Mdate){
                this.minosegetMegorzi=savanyusag.minosegetMegorzi;
            }

            this._tipus="csalamade";
            return "Savanyusagok osszeontve!";
            }else{
                return " HIBA! A savanyusag fedele zarva van!";
            }

        }else{
            return "HIBA! Nem savanyusag!";
        }
    }    

    info(){
        return `Savanyitott ${this.tipus}, aminek a fedele ${this.tipus.nyitva ? "nyitva" : "zarva"}`;
    }

    hozzavalokatTobbszoroz(szorzo){
        let ujTomb = [];
        for(hozzaval of this.hozzavalok){
            for(let i=0; i<szorzo; i++){
                ujTomb.push(hozzaval);
            }
        }
        this.hozzavalok = ujTomb;
    }

}