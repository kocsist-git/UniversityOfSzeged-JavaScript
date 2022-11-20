function kedves(nev){
    if (nev == undefined){
        return null;
    }else{
        if (nev == "Ferenc"){
            return true;
        }else{
            return false;
        }
    }
}

console.log(kedves("Ferenc"));
console.log(kedves("Bela"));
console.log(kedves());