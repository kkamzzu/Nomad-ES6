// spread(...)

// friends에 push 한게 아니고 newFriends에다가 넣기
//기존 데이터를 복사해서 새로운 데이터를 만들고 싶을 때 사용가능

const friends = ["nico","kkamzzu"];

// const newFriends = [...friends, "dal"];
const newFriends = ["dal",...friends];
console.log(newFriends);

//object도 가능
const kkamzzu = {
    username: "kkamzzu"
};

console.log({...kkamzzu, password:123})

const first =["mon", "tue", "wed"];

const weeked = ["sat", "sun"];

const fullWeek = [...first, "thu", "fri", ...weeked]

console.log(fullWeek)


