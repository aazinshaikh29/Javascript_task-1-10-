/*6.Given an array of numbers:
   a)remove duplicates
   b)return a new array with squared values*/
var arr1 = [5,2,3,5,2,7,9];
var arr2 = [...new Set(arr1)];
var squared= arr2.map(n=>n*n);
document.getElementById("task6").innerHTML="Unique:"+arr1+
"|Squared"+arr2;

