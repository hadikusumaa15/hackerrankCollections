// link : https://www.hackerrank.com/challenges/grading/problem

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
 * Complete the gradingStudents function below.
 */
function gradingStudents(grades) {
    /*
     * Write your code here.
     */
   var loli = [];
    var paijo;
    var tobey;
    for (var i = 0; i < grades.length; i++){
        
        paijo = grades[i].toString();
        tobey = paijo.split("").map(Number);
       
       if(tobey.join("") >= 38){
           
       if (tobey[tobey.length - 1]<=5){
       if(5 - tobey[tobey.length - 1] < 3){
        tobey[tobey.length - 1] = 5
       }}

       if (tobey[tobey.length - 1]>5){
        if(tobey.length<2){
            tobey.unshift(0);
        }   
        if(10 - tobey[tobey.length - 1] < 3){
 
         tobey[tobey.length - 1] = 0;
         tobey[tobey.length - 2] = tobey[tobey.length - 2]+1;;
 
        }
       
       } }     var koplo = tobey.join("");
        loli.push(koplo)}
        

return loli
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    let grades = [];

    for (let gradesItr = 0; gradesItr < n; gradesItr++) {
        const gradesItem = parseInt(readLine(), 10);
        grades.push(gradesItem);
    }

    let result = gradingStudents(grades);

    ws.write(result.join("\n") + "\n");

    ws.end();
}