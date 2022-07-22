window.onload = ()=>{
    let myForm = document.getElementById("addForm1");
    
    let submit = document.getElementById("submit");

    let items = document.getElementById("items");

    let editedItem = null;

    myForm.addEventListener("submit", addItem);
    items.addEventListener("click", editOrRemoveItem);

}

function addItem(e){

    e.preventDefault();
    let item = document.getElementById("input1").value;
    if(submit.value != "Submit"){
        editedItem.target.parentNode.childNodes[0].data = item;
        document.getElementById("input1").value = "";
        submit.value = "Submit";
        return true;

    }


    if(item.trim() == "" || item.trim() == null){
        alert("Please enter the value ");
        return false;
    }else{
        document.getElementById("input1").value = "";
    }

    let li = document.createElement("li");
    li.innerText = item;

    let editButton = document.createElement("button");
    editButton.innerHTML = "Edit";

    let deleteButton = document.createElement("button");
    deleteButton.innerHTML = "Delete";

    li.appendChild(editButton);
    li.appendChild(deleteButton);

    items.appendChild(li);

}

function editOrRemoveItem(e){
    e.preventDefault();

    if(e.target.innerText == "Delete"){
        let li = e.target.parentNode;

        items.removeChild(li);
        return true;
    }

    console.log(e);
    document.getElementById("input1").value = e.target.parentNode.childNodes[0].data;
    editedItem = e;
    submit.value = "Edit";


}