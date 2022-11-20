function tokeletes(szam){
    let osszeg = 1;
    if(typeof szam == "number"){
        for (let i = 2; i<szam; i++){
            if (szam % i == 0){
                osszeg += i;
            }
        }
        return osszeg == szam ? true : false;
    }else{
        return false;
    }
}


class Webbongeszo{
   constructor(rendelkezesreAlloMemoria=8192){
    this.lapok=[];
    this.rendelkezesreAlloMemoria = rendelkezesreAlloMemoria;
    this._memoriafogyasztas=0;
   }

   get memoriafogyasztas(){
    return this._memoriafogyasztas;
   }

   set memoriafogyasztas(fogyasztas){
    if (fogyasztas>-1){
       if(fogyasztas>=this.rendelkezesreAlloMemoria){
        this._memoriafogyasztas=this.rendelkezesreAlloMemoria;
       }else{
        this._memoriafogyasztas = fogyasztas;
       }
    } 
   }

   ujLap(url){
    if(this.lapok.includes(url) == false){
        this.memoriafogyasztas+= Math.floor(Math.random()*1401)+100;
        this.lapok.push(url);
    }
   }
   lapBezar(){
    this.lapok.shift();
    this.memoriafogyasztas-=Math.floor(Math.random()*971)+30;
   }
   panik(){
    this.lapok = [];
    this.memoriafogyasztas=10;
   }
}