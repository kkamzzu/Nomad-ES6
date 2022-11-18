// find


const friends =[
    "kkamzzu@gmail.com",
    "nico@nate.com",
    "hohoho@icloud.com",
    "wlgus@yahoo.com",
    "zzu@naber.com",
]
// true를 return하면 첫번 째가 나옴
// const target = friends.find(friend => true)
// console.log(target);

// findIndex : 어디있는지 모를 때 수정해야할 때 
let target = 
console.log(target);

// const target = friends.findIndex(friend => friend.includes("@naver.com"))
// console.log(target);

const username = friends[target].split("@")[0];

const email = "yahoo.com";

console.log(username, email);

