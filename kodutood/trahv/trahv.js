function promptUser() {
    let nimi = window.prompt("Sisestage nimi");
    let lubatudInput = window.prompt("Sisestage lubatud kiirus");
    let tegelikInput = window.prompt("Sisestage tegelik kiirus");

    let lubatudKiirus = parseInt(lubatudInput);
    let tegelikKiirus = parseInt(tegelikInput);

    let vastus;
    if (Number.isInteger(lubatudKiirus) && Number.isInteger(tegelikKiirus)) {
        let trahv;
        if (tegelikKiirus <= lubatudKiirus) {
            trahv = 0;
        } else {
            let vahe = tegelikKiirus - lubatudKiirus;
            trahv = Math.min(190, vahe * 3);
        }
        vastus = nimi + ", kiiruse ületamise eest on teie trahv " + trahv + " eurot."
    } else {
        vastus = "Kõik sisestatud andmed ei olnud korrektsed.";
    }
    console.log(vastus);
}

window.onload = function() {
    this.promptUser();
}
