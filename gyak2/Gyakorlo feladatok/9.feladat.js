function cenzura(uzenet){
    let cenzurazottUzenett = "";
    for (let i = 0; i<uzenet.length; i++){
        if(uzenet[i].toLowerCase()=="e" || uzenet[i].toLowerCase()=="i" || uzenet[i].toLowerCase()=="o" || uzenet[i].toLowerCase()=="u" || uzenet[i].toLowerCase()=="a"){
            cenzurazottUzenett+="*";
        }else{
            cenzurazottUzenett+=uzenet[i];
        }
    }
    return cenzurazottUzenett;
}

console.log(cenzura('He, miert igy jelennek meg az uzeneteim?'));
console.log(cenzura('Elhagyom ezt a csoportot, mert serto az elmult tobb mint 10 eves Discordos tapasztalatom es multammal szemben.'));
