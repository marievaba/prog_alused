function promptUser() {
    let ainepunktidInput = window.prompt("Sisestage ainepunktide arv");
    let nadaladInput = window.prompt("Sisestage nädalate arv");

    let ainepunktid = parseInt(ainepunktidInput);
    let nadalad = parseInt(nadaladInput);

    let vastus;
    if (Number.isInteger(ainepunktid) && Number.isInteger(nadalad)) {
        let ajakulu = Math.trunc((ainepunktid * 26) / nadalad);
        vastus = "Ajakulu " + ajakulu + " tundi nädalas.";
    } else {
        vastus = "Kõik sisestatud andmed ei olnud täisarvud.";
    }
    console.log(vastus);
}
window.onload = function() {
    this.promptUser();
}
