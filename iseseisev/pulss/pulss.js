//kasutaja sisend
let vanus = prompt('Sisesta oma vanus: ');
let sugu = prompt('Sisesta oma sugu (M või m) või (N või n): ');
let treening = prompt('Sisesta treeningutüüp (1, 2 või 3): ');
//tingimuslause
//sugu kontroll
let maxPulsisagedus;
if (sugu === 'M' || sugu === 'm'){
    maxPulsisagedus = 220 - vanus;
}
if (sugu === 'N' || sugu === 'n'){
    maxPulsisagedus = 206 - vanus * 0.88;
}
//treeningu kontroll
let maxPuls;
let minPuls;
if (treening === 1){
    minPuls = maxPulsisagedus * 0.5;
    maxPuls= maxPulsisagedus *0.7;
} else if (treening === 2){
    minPuls = maxPulsisagedus * 0.7;
    maxPuls= maxPulsisagedus *0.8;
} else if (treening === 3){
    minPuls = maxPulsisagedus * 0.7;
    maxPuls= maxPulsisagedus *0.87;
}
console.log('Pulsisagedus peaks olema vahemikus ' + Math.trunc(Math.round(minPuls)) + ' ja ' + Math.trunc(Math.round( maxPuls)));

