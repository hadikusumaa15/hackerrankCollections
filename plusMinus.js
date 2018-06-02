// link : https://www.hackerrank.com/challenges/plus-minus/problem

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
 * Complete the plusMinus function below.
 */
function plusMinus(arr, n) {
    /*
     * Write your code here.
     */
    var  arrs = [];
    var  arrn = [];
    var  arrz = [];
for(var xxx = 0; xxx< arr.length; xxx++){
    if (arr[xxx]>0){
        
       arrs.push((arr[xxx]))
    }
}
for( var xx = 0; xx< arr.length; xx++){
    if (arr[xx]<0){
        
       arrn.push((arr[xx]))
    }
    
}
    
for(var x = 0; x< arr.length; x++){
    if (arr[x]==0){
        
       arrz.push((arr[x]))
        
    }
    
}
    
    console.log(((arrs.length)/n).toPrecision(6));
    console.log(((arrn.length)/n).toPrecision(6));
    console.log(((arrz.length)/n).toPrecision(6));
}

function main() {
    const n = parseInt(readLine(), 10);

    const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));
    

    plusMinus(arr, n);
    
    

}
