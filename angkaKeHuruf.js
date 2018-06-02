function numberToWords(number) {
    // Your code here
    var arr = []
    var x = number.toString();
    arr = x.split("")
    var i = 0;
    var hasil = [];
    var huruf = [" ", "satu", "dua", "tiga", "empat", "lima", "enam", "tujuh", "delapan", "sembilan"];
    var milyar = [" ", "puluh", "ratus", "ribu", "juta", "milyar", "triliun"];
    for(i = 0; i<arr.length; i++){
      hasil.push(huruf[Number(arr[i])]);
    }
var ratus = [];
var ribu = [];
var juta = [];
var milyar = [];
var triliun = [];

var stribu = [];
var stjuta = [];
var stmilyar = [];
var sttriliun = [];

//problem 0 dan 1 dikarenakan adanya syarat khusus untuk penulisannya
// angka 1 jadi se
// sebelas satu belas
//RATUSAN
if (hasil.length<=3){
for(i = hasil.length-1; i>=0; i--)
{ratus.splice(0,0,hasil[i])}
if (ratus.length===2){
  ratus.splice(1, 0, 'puluh');
  ////se dan belas
  if(ratus[0]==="satu" && ratus[2]===" "){
    ratus[0]="se";
  }
  else if(ratus[0]==="satu" && ratus[2]==="satu"){
    ratus.splice(0,3,"se");
    ratus.push("belas")
  }
  else if(ratus[0]==="satu" && ratus[2]!=" "&& ratus[2]!="satu"){
    ratus.splice(0,2);
    ratus.push("belas")
  }
  ////se dan belas
}
else if (ratus.length===3){
  ratus.splice(2, 0, 'puluh'); 
  ratus.splice(1, 0, 'ratus'); 
  if(ratus[0]==="satu"){
    ratus[0]="se";
  }
   ////se dan belas
   if(ratus[2]==="satu" && ratus[4]===" "){
    ratus[0]="se";
  }
  if(ratus[2]==="satu" && ratus[4]==="1"){
    ratus.splice(2,2);
    ratus.push("sebelas")
  }
  else if(ratus[2]==="satu" && ratus[4]!=" "){
    ratus.splice(2,2);
    ratus.push("belas")
  }
  ////se dan belas
  }
}

//RIBUAN
else if (hasil.length>3 && hasil.length<=6){
  stribu.push(" ribu ");
  for(i = hasil.length-1; i>=hasil.length-3; i--)
  {ratus.splice(0,0, hasil[i])}
  if (ratus.length===2){
    ratus.splice(1, 0, 'puluh');
  }
  else if (ratus.length===3){
    ratus.splice(2, 0, 'puluh'); 
    ratus.splice(1, 0, 'ratus'); 
  }

  for(i = hasil.length-4; i>=0; i--)
  {ribu.splice(0,0, hasil[i])}
  if (ribu.length===2){
    ribu.splice(1, 0, 'puluh');
  }
  else if (ribu.length===3){
    ribu.splice(2, 0, 'puluh'); 
    ribu.splice(1, 0, 'ratus'); 
  }
  }
////JUTAAN
  else if (hasil.length>6 && hasil.length<=9){
    stribu.push(" ribu ");
    stjuta.push(" juta ");
    for(i = hasil.length-1; i>=hasil.length-3; i--)
    {ratus.splice(0,0, hasil[i])}
    if (ratus.length===2){
      ratus.splice(1, 0, 'puluh');
    }
    else if (ratus.length===3){
      ratus.splice(2, 0, 'puluh'); 
      ratus.splice(1, 0, 'ratus'); 
    }
  
    for(i = hasil.length-4; i>=hasil.length-6; i--)
    {ribu.splice(0,0, hasil[i])}
    if (ribu.length===2){
      ribu.splice(1, 0, 'puluh');
    }
    else if (ribu.length===3){
      ribu.splice(2, 0, 'puluh'); 
      ribu.splice(1, 0, 'ratus');
    }
    for(i = hasil.length-7; i>=0; i--)
    {juta.splice(0,0, hasil[i])}
    if (juta.length===2){
      juta.splice(1, 0, 'puluh');
    }
    else if (juta.length===3){
      juta.splice(2, 0, 'puluh'); 
      juta.splice(1, 0, 'ratus');
    }
  }

  ////MILYARAN
  else if (hasil.length>9 && hasil.length<=12){
    stribu.push(" ribu ");
    stjuta.push(" juta ");
    stmilyar.push(" milyar ");
    for(i = hasil.length-1; i>=hasil.length-3; i--)
    {ratus.splice(0,0, hasil[i])}
    if (ratus.length===2){
      ratus.splice(1, 0, 'puluh');
    }
    else if (ratus.length===3){
      ratus.splice(2, 0, 'puluh'); 
      ratus.splice(1, 0, 'ratus'); 
    }
  
    for(i = hasil.length-4; i>=hasil.length-6; i--)
    {ribu.splice(0,0, hasil[i])}
    if (ribu.length===2){
      ribu.splice(1, 0, 'puluh');
    }
    else if (ribu.length===3){
      ribu.splice(2, 0, 'puluh'); 
      ribu.splice(1, 0, 'ratus');
    }
    for(i = hasil.length-7; i>=hasil.length-9; i--)
    {juta.splice(0,0, hasil[i])}
    if (juta.length===2){
      juta.splice(1, 0, 'puluh');
    }
    else if (juta.length===3){
      juta.splice(2, 0, 'puluh'); 
      juta.splice(1, 0, 'ratus');
    }

    for(i = hasil.length-10; i>=0; i--)
    {milyar.splice(0,0, hasil[i])}
    if (milyar.length===2){
      milyar.splice(1, 0, 'puluh');
    }
    else if (milyar.length===3){
      milyar.splice(2, 0, 'puluh'); 
      milyar.splice(1, 0, 'ratus');
    }
  }

    ////TRILIUNAN
    else if (hasil.length>12 && hasil.length<=15){
      stribu.push(" ribu ");
      stjuta.push(" juta ");
      stmilyar.push(" milyar ");
      sttriliun.push(" triliun ");
      for(i = hasil.length-1; i>=hasil.length-3; i--)
      {ratus.splice(0,0, hasil[i])}
      if (ratus.length===2){
        ratus.splice(1, 0, 'puluh');
      }
      else if (ratus.length===3){
        ratus.splice(2, 0, 'puluh'); 
        ratus.splice(1, 0, 'ratus'); 
      }
    
      for(i = hasil.length-4; i>=hasil.length-6; i--)
      {ribu.splice(0,0, hasil[i])}
      if (ribu.length===2){
        ribu.splice(1, 0, 'puluh');
      }
      else if (ribu.length===3){
        ribu.splice(2, 0, 'puluh'); 
        ribu.splice(1, 0, 'ratus');
      }
      for(i = hasil.length-7; i>=hasil.length-9; i--)
      {juta.splice(0,0, hasil[i])}
      if (juta.length===2){
        juta.splice(1, 0, 'puluh');
      }
      else if (juta.length===3){
        juta.splice(2, 0, 'puluh'); 
        juta.splice(1, 0, 'ratus');
      }
  
      for(i = hasil.length-10; i>=hasil.length-12; i--)
      {milyar.splice(0,0, hasil[i])}
      if (milyar.length===2){
        milyar.splice(1, 0, 'puluh');
      }
      else if (milyar.length===3){
        milyar.splice(2, 0, 'puluh'); 
        milyar.splice(1, 0, 'ratus');
      }

      for(i = hasil.length-13; i>=0; i--)
      {triliun.splice(0,0, hasil[i])}
      if (triliun.length===2){
        triliun.splice(1, 0, 'puluh');
      }
      else if (triliun.length===3){
        triliun.splice(2, 0, 'puluh'); 
        triliun.splice(1, 0, 'ratus');
      }

    }
    

    //hasil.length

    return triliun + sttriliun + milyar + stmilyar + juta + stjuta + ribu + stribu + ratus;

  };
  
  console.log(numberToWords(78239527662758));
  // Driver code
  // console.log(numberToWords(999999999999999));
  // console.log('###########################')
  // console.log(numberToWords(10000));
  // console.log('###########################')
  // console.log(numberToWords(9780375));
  // console.log('###########################')
  // console.log(numberToWords(25000));
  // console.log('###########################')
  // console.log(numberToWords(9));
  // console.log('###########################')
  // console.log(numberToWords(15));
  // console.log('###########################')
  // console.log(numberToWords(80));
  // console.log('###########################')
  // console.log(numberToWords(999999999999999));
  // console.log('###########################')
  // console.log(numberToWords(8090));
  // console.log('###########################')
  // console.log(numberToWords(12546));
  
  /*
  SEMBILAN RATUS SEMBILAN PULUH SEMBILAN TRILIUN SEMBILAN RATUS SEMBILAN PULUH SEMBILAN MILYAR SEMBILAN RATUS SEMBILAN PULUH SEMBILAN JUTA SEMBILAN RATUS SEMBILAN PULUH SEMBILAN RIBU SEMBILAN RATUS SEMBILAN PULUH SEMBILAN
  ###########################
  SEPULUH RIBU 
  ###########################
  SEMBILAN JUTA TUJUH RATUS DELAPAN PULUH  RIBU TIGA RATUS TUJUH PULUH LIMA
  ###########################
  DUA PULUH LIMA RIBU 
  ###########################
  SEMBILAN
  ###########################
  LIMA BELAS
  ###########################
  DELAPAN PULUH 
  ###########################
  SEMBILAN RATUS SEMBILAN PULUH SEMBILAN TRILIUN SEMBILAN RATUS SEMBILAN PULUH SEMBILAN MILYAR SEMBILAN RATUS SEMBILAN PULUH SEMBILAN JUTA SEMBILAN RATUS SEMBILAN PULUH SEMBILAN RIBU SEMBILAN RATUS SEMBILAN PULUH SEMBILAN
  ###########################
  DELAPAN RIBU SEMBILAN PULUH 
  ###########################
  DUA BELAS RIBU LIMA RATUS EMPAT PULUH ENAM
  */
  
  