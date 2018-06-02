// a = 'abc';
// a.
// b = 'cde';
// c = a-b;

// console.log(c);

// //res = res.filter(e => e !== 'c');
//     //console.log(res.length);
//     var  count = {};
//     res.forEach(function(i) { count[i] = (count[i]||0) + 1;});
//     var result = Object.keys(count).map(function(key) {
//     return count[key]; 
// });
    
// for(var tt=0; tt<result.length;  tt++){
//         if (result[tt]>1){
//             result = result.filter(e => e !== result[tt]);
//         }
//     }
// //console.log(result.length);

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

