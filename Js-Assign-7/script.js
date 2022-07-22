let count = 0;
function addItem(e){

    let item = document.getElementById("input1").value;
    if(item.trim() == "" || item.trim() == null){
        alert("Please enter the value ");
        return false;
    }else{
        document.getElementById("input1").value = "";
    }
    let p = document.createElement("p");
    
    p.setAttribute("key", count);
    p.innerText = item;
    
    p.addEventListener("click", removeItem);

    count++;

    let div = document.getElementById("taskList");

    div.appendChild(p);
}
function removeItem(e){
    let div = document.getElementById("taskList");
    div.removeChild(e.target);
}
