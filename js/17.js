//rest & spread

//spread: 변수를 가져와서 풀어헤치고 전개하는 것

const friends = [1, 2, 3, 4];

console.log(friends )

//friends array 안의 1,2,3,4 라는 값을 풀어 해칠거야
console.log(...friends);

const kkamzzu = [1, 2, 3, 4];
const famiy = ["a", "b", "c"];

console.log([...kkamzzu,...famiy]);


const sexy = {
    name:"kkamzzu",
    age:25
};

const hello = {
    sexy:true,
    hello:"hello"
}
console.log({...sexy, ...hello})