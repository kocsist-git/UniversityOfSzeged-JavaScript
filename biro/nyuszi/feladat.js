class Nyuszi{
    vendegek = [];
    constructor(repa=0){
        this._repa = repa;
    }

    get repa(){
        return this._repa;
    }

    ultet(mennyiUltetett){
        if(mennyiUltetett == undefined) {
            this._repa++;
        }else{
            this._repa+=mennyiUltetett;
        }
    }

    vendeg(vendeg){
        if (typeof vendeg == "string"){
            this.vendegek.push(vendeg);
        }
        
    }

    etet(){
        if (this.vendegek.length>0){
            let repakSzama=this.repa;
            for (let i = 0; i<repakSzama;i++){
                if (this.vendegek.length>0){
                    this.vendegek.shift();
                    this._repa--;
                }
            }
        }
    }
}
