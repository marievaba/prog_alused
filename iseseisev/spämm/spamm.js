let suurus=prompt("Sisestage kirja suurus:");
let pealkiri=prompt("Sisestage kirja teema pealkiri");
let fail=prompt("Kas kirjaga on kaasas fail?");
if (suurus > 1 || pealkiri==="" || fail === "ei"){
    console.log("Kiri on spämm")
}else {
    console.log("Kiri ei ole spämm")
}