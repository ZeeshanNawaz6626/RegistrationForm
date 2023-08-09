let btn = document.getElementById("btn1");
btn.addEventListener("click", add)
function add(e){
     e.preventDefault()
    let address = document.getElementById("address").value;
    let number = document.getElementById("number").value;
    let namename = document.getElementById("name").value;
    let date = document.getElementById("date").value;
    let text = document.getElementById("text").value;
  
let table =
       `<tr>
           <td>${address}</td>
           <td>${number}</td>
           <td>${namename}</td>
           <td>${date}</td>
           <td>${text}</td>
           </tr>`;
        
           document.getElementById("body1").innerHTML += table;
        //    console.log(table)

}







     
