// kasutaja sisend
let ringid = prompt('Mitu ringi tuleb joosta');
let porgandid = 0;
// for tsükkel
let ring = 1;
while(ring <= ringid){
   if(ring % 2=== 0){
       porgandid = porgandid + ring;
   }
   ring++;
}
console.log('Porgandite koguarv on ' + porgandid)