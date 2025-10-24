// for of

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5] //for array take for of loop

for (const num of arr) {
    console.log(num);
}

const greetings = "Hello world!" //for string take for of
for (const greet of greetings) {
    console.log(`Each char is ${greet}`)
}

// Maps

const map = new Map() 
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India") //will not show separately any value as map only works for unique objects

console.log(map);

for (const [key, value] of map) { //for map take for of loop 
    console.log(key, ':-', value);
}

const myObject = { //object not iterable so for of not works for object
    game1: 'NFS',
    game2: 'Spiderman'
}

for (const [key, value] of myObject) {
console.log(key, ':-', value);
}

const myObject1 = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}

for (const key in myObject1) { //for objects take for in loop as it is not directly iterable
    console.log(`${key} shortcut is for ${myObject1[key]}`);
}

const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    console.log(programming[key]); 
}

/*const map1 = new Map()
map1.set('IN', "India")
map1.set('USA', "United States of America")
map1.set('Fr', "France")
map1.set('IN', "India")

for (const key in map) { //will give error as map cannot be accessed by for in loop
    console.log(key);
}*/