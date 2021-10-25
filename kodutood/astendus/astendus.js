function promptUser() {
    let alusInput = window.prompt("Sisestage astme alus");
    let astendajaInput = window.prompt("Sisestage astendaja");

    let alus = parseInt(alusInput);
    let astendaja = parseInt(astendajaInput);

    let vastus;
    if (Number.isInteger(alus) && Number.isInteger(astendaja)) {
        vastus = Math.pow(alus, astendaja);
    } else {
        vastus = "Kõik sisestatud andmed ei olnud täisarvud.";
    }
    console.log(vastus);
}

window.onload = function() {
    this.promptUser();
}
