// link : https://www.hackerrank.com/challenges/staircase/problem

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
 * Complete the staircase function below.
 */
function staircase(n) {
    /*
     * Write your code here.
     */
     for (var i = 1; i <= n; i++) {
        var col = i;
        for(var j = 1; j <= n - col; j++) {
            process.stdout.write(' ');
        }
        for(var k = 1; k <= col; k++) {
            process.stdout.write('#');
        }
        process.stdout.write('\n');
    }

}

function main() {
    const n = parseInt(readLine(), 10);

    staircase(n);

}
