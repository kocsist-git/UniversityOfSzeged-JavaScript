let eletkor = 12;       // a felhasználó életkora

if (eletkor < 18) {
    console.log("Kiskorú vagy.");
    console.log("Még " + (18 - eletkor) + " év és nagykorú leszel.");
} else if (eletkor >= 20 && eletkor <= 29) {
    console.log("Huszonéves vagy.");
} else {
    console.log("Nagykorú vagy.");
}
