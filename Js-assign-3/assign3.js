var license = prompt("You have driving license");
var tired = prompt("you are tired");
var sober = prompt("You are sober");
if(license =="true"&& !(tired=="true")&& sober == "true"){
    console.log("you can drive");
}else{
    console.log("you cannot drive");
}