/*6.Given an array of numbers:
   a)remove duplicates
   b)return a new array with squared values*/
let arr = [1, 2, 2, 3, 4, 4];

let uniqueArr = [...new Set(arr)];
let squaredArr = uniqueArr.map(n => n * n);

document.getElementById("task6").innerText =
    "Unique: " + uniqueArr + " | Squared: " + squaredArr;


