const user = {
    username: "Hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this); //this used to refer the current context
    }

}

user.welcomeMessage() //Hitesh, welcome to website
user.username = "Sam"
user.welcomeMessage()//Sam, welcome to website

console.log(this); //now in node environment and return {} empty as no current context in global but when same function run in browser doesn't return empty because in browser global variable is windows


//cannot be used in function, only used in object
function chai(){
    let username = "hitesh"
   console.log(this.username);
}
chai() 

const chai = function () {
     let username = "hitesh"
     console.log(this.username);
}
chai()

const chai =  () => {
    let username = "hitesh"
    console.log(this);
}
chai()
//above all methods will return undefined


//Arrow fucntions method 1 (Explicit return)
const addTwo = (num1, num2) => {
  return num1 + num2
}
console.log(addTwo(3, 4))

// Method 2(Implicit return)
const addTwo2 = (num1, num2) =>  (num1 + num2) 
console.log(addTwo2(3, 4))//automatically considers return will be done without using return word and parenthesis

// Method 3(Implicit return)
const addTwo3 = (num1, num2) => ({username: "hitesh"}) //in implicit return always keep the value to be retrned within parenthesis, otherwise it will not work


console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()