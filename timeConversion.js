// link : https://www.hackerrank.com/challenges/time-conversion/problem

'use strict';

const fs = require('fs');

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
 * Complete the timeConversion function below.
 */
function timeConversion(s) {
    /*
     * Write your code here.
     */
    var lol = s.search("PM");
    
    
    if (lol>0){
    var z = s.replace('PM','');
    var zz = z.split(":").map(Number);
     zz[0]=zz[0]+12;
    }
    
    else if (lol<=0){
    var z = s.replace('AM','');
    var zz = z.split(":").map(Number);
    if (zz[0]===12){
        zz[0]=0;}
    }
    
    if (zz[0]<=9){
        zz[0]= "0"+zz[0];
    }
    if (zz[0]>=24){
        zz[0]= zz[0]-12;
    }
    if (zz[1]<=9){
        zz[1]= "0"+zz[1];
    }
    if (zz[2]<=9){
        zz[2]= "0"+zz[2];
    }
    
    return zz[0]+':'+zz[1]+':'+zz[2];
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    let result = timeConversion(s);
    
    ws.write(result + "\n");

    ws.end();
}