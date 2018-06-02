/*
Diberikan sebuah array A yang berisi N integers.
Dilakukan rotasi dimana setiap elemen berpindah ke arah kanan sebanyak satu index. Dan element di index terakhir dipindahkan ke elemen pertama.

Contoh:
Rotasi array A = [3,5,7,2] adalah [2,3,5,7].

Tujuannya adalah untuk merotasi array A sebanyak K kali.

Tulis fungsi

 function solution (A,K);

Param:
A adalah array yang berisi N intergers dan K adalah integers

Return:
Arrray A berotasi K kali

Contoh array A =[3,8,9,7,6] dan K=3, fungsi tersebut semestinya memberikan hasil [9,7,6,3,8]

Anggap bahwa:

N and K adalah integers dalam range [0...100];
Tiap element array adalah integer dalam rentang [-1000...1000].
*/


function rotation(a, k){
    var hasil = [];
    var i = 0;
    for(i=0; i<a.length; i++){
        var jinem = i+k;
    if(jinem>=k && 0<=jinem && jinem < a.length){
    hasil.push(a[jinem-1]);
    }
    else {
    var x = Math.floor(jinem/a.length)
    if (jinem-(a.length*x)-1 >= 0){
    hasil.push(a[jinem-(a.length*x)-1]);
    }
    else{
    hasil.push(a[a.length-1]);
    }    
    }
}
    return hasil
    }
    
    console.log(rotation([3,8,9,7,6,17,44,55], 2))
    
    
    /*
    function rotation(a, k){
        let result = [];
        for(let i = 1; i < k; i++){
          result.push(a.shift())
        }
        return a.concat(result)
    }
    
    console.log(rotation([3,8,9,7,6], 3))
    */