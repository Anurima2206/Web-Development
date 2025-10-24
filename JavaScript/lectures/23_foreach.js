const coding = ["js", "ruby", "java", "python", "cpp"]

//type 1 using functions
coding.forEach( function (val){
    console.log(val);
} )

//type 2 using arrow functions
coding.forEach( (item) => {
    console.log(item);
} )

//type 3
function printMe(item){
    console.log(item);
}

coding.forEach(printMe)

//can access multiple values
coding.forEach( (item, index, arr)=> {
    console.log(item, index, arr);
} )

//multiple objects can be accessed
const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]
myCoding.forEach( (item) => {
   console.log(item.languageName);
} )