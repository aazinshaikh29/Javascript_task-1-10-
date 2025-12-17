async function fetchData(){
    try{
        var response=await fetch("https://jsonplaceholder.typicode.com/users");
    
    var data=await response.json();
    var list=document.getElementById("userList");
    list.innerHTML="";
    data.forEach(function(user){
        var li=document.createElement("li");
        li.innerHTML=user.name;
        list.appendChild(li);
    })
}
catch(error){
    document.getElementById("error").innerHTML="Error file fatching the data"
}
}