var b = "";
if (window.localStorage.ITUser) {
    jUsers = window.localStorage.getItem("ITUser");
    Customers = JSON.parse(jUsers);
    for (i=0; i<Customers.alluser.length; i++){
        b += "<tr><td>" + (i+1)+ "</td><td>"+ Customers.alluser[i].name+ "</td><td>"+Customers.alluser[i].pwd+"</td><td><button onclick='remove("+i+")'>X</button></td><td><button onclick='update("+i+")'>i</button></td></tr>";
    }
    document.getElementById("l").innerHTML=b;
}
