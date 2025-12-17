/*Create a student object with marks and:
    a)calculate total
    b)calculate average
    c)update one subject mark*/
let student = {
    marks:{
        java:70,
        python:65,
        dbms:80
    }
};
student.marks.java=90;
var total=student.marks.java+
          student.marks.python+
          student.marks.dbms;
var avg=total/3;
document.getElementById("task7").innerHTML =
    "Total: " + total + "<br>Average: " + avg;