const input = prompt("Please enter the array with comma seperated values");
const arr = input.split(",");
const n = prompt("Enter the value");

function getEven (){
    const evenArr = arr.filter((currElem,i)=>{
        return currElem%2==0;
    });
    console.log(evenArr);
}

function multi (){
    const multi = arr.map((currElem)=>{
        return currElem*n;
    });
    console.log(multi);
}
getEven();
multi();
arr.splice(n,1);
console.log(arr);