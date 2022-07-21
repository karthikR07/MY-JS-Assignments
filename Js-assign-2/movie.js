const movie = [];
function addorRemove(input, moviename){
    if (input=="add"){
        movie.push(moviename);
    }else if (input == "remove"){
        movie.pop();
    }else{
        console.log("Invalid");
    }
    return movie;
}

console.log(addorRemove("add", "Lucy"));
console.log(addorRemove("add", "The God Father"));
console.log(addorRemove("remove", ""));