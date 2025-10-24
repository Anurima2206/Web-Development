let a = 300
if (true) {
    let a = 10//var doesnt work for scopes so not use
    const b = 20
    console.log("INNER: ", a);
    
}
console.log(a);
console.log(b);

function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    //console.log(website); not possible outside scope

     two()

}

one()

if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        console.log(username + website);
    }
    // console.log(website); not possible
}

// console.log(username);


// ++++++++++++++++++ interesting ++++++++++++++++


console.log(addone(5))
function addone(num){
    return num + 1
} // can use the function addone if also called before declaration


console.log(addTwo(5))
const addTwo = function(num){
    return num + 2
}// cannot use the function addtwo if called before declaration as the function has been declared in a variable and variable cannot be used before declaration