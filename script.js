 function bmi (weight,height){

    return weight / (height * height); 
    console.log=("bmi");
    
 }
   
function status (bmi){
   
if( bmi < 18.5){

return ("لديك نقص في الوزن")

}else if (bmi >= 18.5 && bmi < 25 ){

    return("وزنك صحي")

}else if (bmi >= 25 ) {

return("لديك زيادة في الوزن")

}

}

function calculate( ){
    let weight= document.getElementById("weight").value;
    let height = document.getElementById("height").value;
    let bmiresult = bmi ( weight,height);
    let desc =status( bmiresult)
    document.getElementById("result").innerText=bmiresult+":"+ desc;
}