var input = prompt("Please enter the input"); //firstName,Karthik,lastName,R
var arr = input.split(",");//Array seperated by ","
var obj = {};
arr.forEach((CurrElem,i)=>{
    if(i%2==0){
        if(i+1>arr.length){
            obj[CurrElem] = "";
        }
        obj[CurrElem] = arr[i+1];
    }
})
console.log(obj);//output