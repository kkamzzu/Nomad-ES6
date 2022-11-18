// Temporal dead myName
// similer let 

// console.log(myName);
// let myName = 'kkamzzu';

//undefined
// error: javascript something call hoisting
//hoisting: 자바스크립트가 프로그램을 실행하기 전에 이것들을 어딘가로 이동시킴
// 무조건 위에서 아래로 가는게 아님.

//let은 자바스크립트가 top으로 끌어올리지 않음 (죽은코드)
//let은 우리가 바보같은짓을 허락하지 않음.
//don't use var


//Block scope

// scope = bubble 이 버블이 변수들이 접근가능한지 아닌지를 감지해줌

// 블록 안에서 선언하면 외부로 나가진 않음.
// 외부로 꺼내면 안에서도 그 값을 사용할 수 있음

let hello;
if(true){
    ///////////
    if(true){
        /////////////
    }
    
}
console.log(hello);

