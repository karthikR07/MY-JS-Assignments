var license = prompt("You have driving license");
var tired = prompt("you are tired");
var sober = prompt("You are sober");
if(license =="true"&& !(tired=="true")&& sober == "true"){
    prompt("you can drive");
}else{
    prompt("you cannot drive");
}