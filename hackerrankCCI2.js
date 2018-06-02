var grades = [14, 32, 44, 15, 9];


    /*
     * Write your code here.
     */
    var loli = [];
   function paijo(grades){

    var paijo;
    var tobey;
    for (var i = 0; i < grades.length; i++){
        
        paijo = grades[i].toString();
        tobey = paijo.split("").map(Number);
       
       
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
 
        }}
    
    }
    console.log(tobey);
}

paijo(grades);