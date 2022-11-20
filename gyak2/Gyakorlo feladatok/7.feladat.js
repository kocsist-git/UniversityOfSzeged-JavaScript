function tevetIgenyel(teveNeve, teveHivo){
    if (teveHivo.length<6) {
        return "Tul rovid hivojel!";
    } else if(teveHivo==teveNeve){
        return "Tul nyilvanvalo hivojel!";
    }else if(teveHivo.toLowerCase().indexOf("teve")!=-1){
        return "Tiltott szoveg a hivojelben!";
    }else{
        return "Sikeres teveigenyles!";
    }
}

console.log(tevetIgenyel('MyEpicCamel', 'epicTeve20'));
console.log(tevetIgenyel('Leenhurbertindrund', 'sivatag4life'));
console.log(tevetIgenyel('Leenhurbertindrund', 'si'));
console.log(tevetIgenyel('Leenhurbertindrund', 'Leenhurbertindrund'));

