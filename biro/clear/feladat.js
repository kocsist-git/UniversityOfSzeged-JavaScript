function clear(tomb){
    if(tomb == undefined) return 0; 
    let eredmeny = [];
    for (elem of tomb){
       
        if(typeof elem == "number" || (typeof elem == "string" && elem.length > 0)){
            
            if (typeof elem == "string"){
                eredmeny.push(elem[0].toUpperCase()+elem[1].toUpperCase())
            }else{
                eredmeny.push(elem);
            }

        }
    }
    return eredmeny.reverse();
}