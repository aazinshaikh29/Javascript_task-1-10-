//Print numbers from 1–100, but skip multiples of 5.
let num="";
for(var i=1;i<=100;i++){
    if(i%5!==0){
        num += i+ " ";
    }
    console.log(i);
}
document.getElementById("task4").innerHTML=num;