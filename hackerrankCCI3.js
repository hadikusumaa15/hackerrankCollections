// link : https://www.hackerrank.com/challenges/ctci-making-anagrams/problem

process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();    
});

function readLine() {
    return input_stdin_array[input_currentline++];
}

/////////////// ignore above this line ////////////////////

function main() {
    var a = readLine().split("");
    var al = a.length
    var b = readLine().split("");
    var bl = b.length
    
var c = al+bl;
    
    var xxx=0;
    for(var tt = 0; tt< al; tt++){
        for(var mm= 0; mm< bl; mm++){
            if(a[tt]===b[mm]){
                b.splice(mm,1);
                xxx=xxx+2;
                break;
            }
        }
    }
    console.log(c-xxx);
}
