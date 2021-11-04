//genereerimine
let soovitud_kord = window.prompt("Sisesta täringute arv: ");

let kord = 1;
while (kord <= soovitud_kord){
   let taring = Math.floor(Math.random() *6) + 1;
   console.log(taring);
   kord += 1;
}
