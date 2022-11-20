function python(szoveg, index){
    if(Math.abs(index)>szoveg.length-1){
        return undefined;
    }
    if(index>=0){
        return szoveg[index];
    }else{
        return szoveg[szoveg.length-Math.abs(index)]
    }

}
console.log(python("Lehet-e a Pythonos indexelest JavaScriptben szimulalni?",0));
console.log(python("Lehet-e a Pythonos indexelest JavaScriptben szimulalni?",-1));
console.log(python("Lehet-e a Pythonos indexelest JavaScriptben szimulalni?",-45));
console.log(python("Lehet-e a Pythonos indexelest JavaScriptben szimulalni?",-2000));