function haromszog(a,b,c){
    if(a<0 || b<0 || c<0 || a>=b+c || b>=a+c || c>=a+b){
        return "HIBA! Nem letezo haromszog!";
    }else{
        let s = (a+b+c)/2;
        let t = Math.sqrt(s*(s-a)*(s-b)*(s-c)); 
        return `Kerulet: ${(a+b+c).toFixed(2)} cm, terulet: ${t.toFixed(2)}`;
    }

}

console.log(haromszog(3, -1, 3));
console.log(haromszog(7, 4, 2));
console.log(haromszog(5, 4, 7));