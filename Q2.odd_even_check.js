//Convert string "25" to number, add 10, then check if the result is even or odd.
let strNum = "25";
let result = Number(strNum) + 10;

document.getElementById("task2").innerText =
    result + " is " + (result % 2 === 0 ? "Even" : "Odd");


