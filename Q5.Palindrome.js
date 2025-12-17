/*5.Write a function that:
   a)reverses a string
   b)checks if it is a palindrome*/
function check(str){
   let reverse_string = str.split("").reverse().join("");
   return str === reverse_string;}

let word="madam";

document.getElementById("task5").innerHTML="Reverse:"+
word.split("").reverse().join("")+
"|Palindrome:"+check(word);


