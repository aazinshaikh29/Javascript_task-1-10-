/*Create a button that:
    a)increments a counter on click
    b)toggles text visibility*/

var count=0;
            function increment(){
                count++
                document.getElementById("count").innerText=count;
            }
            function toggleText(){
                var text=document.getElementById("text");
                text.style.display=
                text.style.display === "none" ? "block" : "none";
            }
