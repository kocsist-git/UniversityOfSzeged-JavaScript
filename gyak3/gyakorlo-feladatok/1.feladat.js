function szamokatKivalogat(tomb){
    let eredmeny = [];
    for (let ertek of tomb){
        if(typeof(ertek)=="number"){
            eredmeny.push(ertek);
        }
    }
    return eredmeny;
}

console.log(szamokatKivalogat(['kecske', true, '42', 32, -1, undefined, 3.14, ['alma', 'banan',1]]));