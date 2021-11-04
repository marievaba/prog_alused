//kasutaja sisend
let poialpoisse = prompt('Mitu pöialpoissi tahab õunu?');
const ounad = 14;
let mituKokku = 0;
for (let step = 0; step < parseInt(poialpoisse); step++) {
    let mitu = Math.floor(Math.random() *2) + 1;
    console.log(mitu);
    mituKokku+=mitu;
}
console.log('Lumivalgekesele jäi ' + (ounad - mituKokku));