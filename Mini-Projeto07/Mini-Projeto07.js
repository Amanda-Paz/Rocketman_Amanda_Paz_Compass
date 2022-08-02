SomarAte (10);


function SomarAte (limite){
    let M3 = 0;
    let M5 = 0;
for ( i = 0; i <= limite; i++){
    if (i % 3 ===0)
    M3 += i;
    if ( i % 5 == 0)
    M5 += i;

}
console.log (M3 + M5)
}