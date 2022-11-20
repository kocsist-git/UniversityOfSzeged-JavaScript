function fajlokatRendszerez(fajlNevek) {
    let py = new Array();
    let js = new Array();
    let etc = new Array();

    for (let file of fajlNevek) {
        if (file.endsWith(".py") || file.endsWith(".js")) {
            if (file.endsWith(".py")) {
                py.push(file);
            }
            if (file.endsWith(".js")) {
                js.push(file);
            }
        }else{
            etc.push(file);
        }
    }
    let res = new Array();
    res.push(py);
    res.push(js);
    res.push(etc);
    return res;
}

console.log(fajlokatRendszerez(['gyak1.py', 'GYAKORLO.JS', 'feladat.pdf', 'elso.zh.py', 'riport.txt']));
console.log(fajlokatRendszerez( ['index.js', 'functions.strings.js', 'INDEX.HTML', 'test01.js']));