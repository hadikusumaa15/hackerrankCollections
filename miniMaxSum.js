// link : https://www.hackerrank.com/challenges/mini-max-sum/problem

'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(str => str.trim());

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the miniMaxSum function below.
 */
function miniMaxSum(arr) {
    /*
     * Write your code here.
     */
var arrc = arr.sort();
var hasil = 0;
var hasil2 = 0;
for(var i = 0; i<arrc.length; i++){
    hasil = hasil + arrc[i] ;
}
for(var j = 0; j<arrc.length; j++){
    hasil2 = hasil2 + arrc[j] ;
}
hasil = hasil - arr[(arrc.length) - 1];
hasil2 = hasil2 - arrc[0];

console.log(hasil+" "+hasil2);
}

function main() {
    const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));

    miniMaxSum(arr);
}