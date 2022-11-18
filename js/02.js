// arrow function  =>
// 자바스크립트에서 함수의 모습을 개선한 것

// const names = ['kkamzzu','barnes','sojin'];


// const hearts = names.map(function(item){
//     return item + "*";
// });

// console.log(hearts)

//same

// const names = ['kkamzzu','barnes','sojin'];


// const hearts = names.map((item, index) =>{ 
//     console.log("we are on ", index);
//         return item + "*";
// });

// console.log(hearts)

//same

const names = ['kkamzzu','barnes','sojin'];


const hearts = names.map(item => item + "*");


console.log(hearts)