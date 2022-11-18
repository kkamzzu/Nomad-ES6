// default value (뭐든 될 수 있음)


// const DEFAULT = "dfdfds";

// const sayHi = (aName = DEFAULT) => "hello" + aName;

// console.log(sayHi());






//temple literal (``)


// const DEFAULT = "dfdfds";
// // string을 계속 +로 추가해야하는 번거로움
// const sayHi = (aName = DEFAULT) => "hello " + aName + " have a nice day";
// console.log(sayHi());



const DEFAULT = "kkamzzu";
const sayHi = (aName = DEFAULT) => `hello ${aName} have a nice day`;
console.log(sayHi());

console.log(`Hello how are u ${1203*45} `)

console.log(`Hello how are u ${() => 1203*45} `) //function 은 안됨


// string애서의 function 실행
const add = (a,b) => a + b;
console.log(`Hello how are u ${add(6, 6)} `)
 