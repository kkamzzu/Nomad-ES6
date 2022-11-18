// conditional(조건부)

// 조건부로 last name 추가하기
const lastName = prompt("Last name");

const user = {
    username: "kkamzzu",
    age: 24,
    // 둘다 true여야만 함.  spread로 전개하려면 데이터가 object여야 하므로 중괄호로 감싸
    ...(lastName !== "" && {lastName})
    // lastName 이 빈칸이면 undefined
    
};

console.log(user); 