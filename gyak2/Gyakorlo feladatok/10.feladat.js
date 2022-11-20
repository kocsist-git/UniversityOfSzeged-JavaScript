function konvertel(hexakod){
    let r = parseInt(hexakod[1]+hexakod[2],16);
    let g = parseInt(hexakod[3]+hexakod[4],16);
    let b = parseInt(hexakod[5]+hexakod[6],16);
    return `rgb(${r},${g},${b})`;
}

console.log(konvertel("#FF0077"));
console.log(konvertel("#06C2E9"));