let a; // let hanya nongol saat didefinisikan di suatu tempat, kalau di dalam function ada let di luar gak kedetect
let hm;

function x(c){
function yy(){
    if (a===hm){
    a= 0;}
}
yy();
a= a+c+1;
return a;

}

console.log(x(10));
console.log(x(10));
console.log(x(10));
console.log(x(10)); //tebak outputnya apa

// console.log(a);