//arrow function 을 사용하지 않아야할 때가 있음
// this
// const button = document.querySelector("button");

// button.addEventListener("click", () => {
//     console.log(this);
//     this.style.backgroundColor = 'red';
// });
// error




// const button = document.querySelector("button");

// const handleClick = () => {
//     console.log(this);
// };
// // window가 출력
// button.addEventListener("click", handleClick);



// const kkamzzu = {
//     name: "Kkamzzu",
//     age: 25,
//     addYear: () => {
//         this.age++;
//     }
// };//arrow function 때문에 나이가 안올라감
// console.log(kkamzzu);
// kkamzzu.addYear()
// kkamzzu.addYear()
// console.log(kkamzzu);

//solution
const kkamzzu = {
    name: "Kkamzzu",
    age: 25,
    addYear() {
        this.age++;
    }
};//arrow function 때문에 나이가 안올라감
console.log(kkamzzu);
kkamzzu.addYear()
kkamzzu.addYear()
console.log(kkamzzu);