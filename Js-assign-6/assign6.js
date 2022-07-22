function playWithArray(a,b,cb){
    var result = a+b
    return cb(result);
}
function cb(result){
    console.log(result);
}
playWithArray(5,8,cb);