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
    var proses = [];
    var i = 0;
    var kowe = 0;
    var nol = 0;
    var j = 0;
    
    for(i=0; i<a.length; i++){
    kowe = a.length + i;
    var jinem = kowe-k;
    if(kowe>=k && nol<=kowe && kowe-k < a.length){
    hasil.push(a[jinem]);
    }
    // else if(kowe-k >= a.length){
    //     for(j = 0; j<=k; j++){  
    
    //         if(kowe-k >= a.length){ 
    //         jinem = jinem - a.length
    //         }
    //         else
    //         hasil.push(a[jinem-a.length]);
            
    //         }
    // }
}
        
    return hasil
    
    }
    
    console.log(rotation([3,8,9,7,6], 1));
    
