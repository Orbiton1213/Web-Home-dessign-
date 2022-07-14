
 //add eventers 
 document.getElementById("plus").addEventListener("click" , pluse() ,false);

 document.getElementById("minus").addEventListener("click" , minus(), false);

 document.getElementById("like").addEventListener("click", like , false);

//reset the counter and the number
 document.getElementById("num").innerHTML = "1";  
 var count = 1;

 
//calculate up
function pluse(){
   
    count = count + 1;
    document.getElementById("num").innerHTML = count;
    if(count >= 10){
        count = 10;
        document.getElementById("num").innerHTML = "10";  
    }
}
//calculate down
function minus(){
    count = count - 1;
    document.getElementById("num").innerHTML = count;
    if(count <= 1){
        count = 1;
        document.getElementById("num").innerHTML = "1";  
    }
}

//change the color but toggle
function like(){
    document.getElementById("like").classList.toggle("setRed");
  }





  




