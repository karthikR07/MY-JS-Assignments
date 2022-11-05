var array = [];
window.onload = async()=>{
    var response = await fetch("https://jsonplaceholder.typicode.com/todos",{method:"GET"});
    array = await response.json();
    showAll();
}
function showAll(){

    var h1 = document.querySelector("h1");
    h1.innerText = "Todo List - All";

    const para = document.querySelectorAll("p");
    // for(let i=0;i< para.length;i++){
    //     var ptag = para[i];
    //     document.body.removeChild(ptag);
    // }
    for(let i=0;i<array.length;i++){
        var obj = array[i];
        var p = document.createElement("p");
        if(obj.completed){
            p.style.color = "green";
        }else{
            p.style.color = "red";
        }
        p.innerText = obj.title;

        document.body.appendChild(p);

    }
}

function showCompleted(){
    var h1 = document.querySelector("h1");
    h1.innerText = "Todo List - Completed";

    const para = document.querySelectorAll("p");
    for(let i=0;i< para.length;i++){
        var ptag = para[i];
        document.body.removeChild(ptag);
    }

    for(let i=0;i<array.length;i++){
        var obj = array[i];
        var p = document.createElement("p");
        if(obj.completed){
            p.style.color = "green";
            p.innerText = obj.title;
            document.body.appendChild(p);
        }
    }
}

function showPending(){
    var h1 = document.querySelector("h1");
    h1.innerText = "Todo List - Pending";

    const para = document.querySelectorAll("p");
    for(let i=0;i< para.length;i++){
        var ptag = para[i];
        document.body.removeChild(ptag);
    }

    for(let i=0;i<array.length;i++){
        var obj = array[i];
        var p = document.createElement("p");
        if(!obj.completed){
            p.style.color = "red";
            p.innerText = obj.title;
            document.body.appendChild(p);
        }
    }
}
