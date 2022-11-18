// include: 내가 찾고 싶은 문자가 있는지 확인해줌.
const isEmail = (email) => email.includes("@");

console.log(isEmail("kkamzzu@gmail.com")); //true

// repeat: 원하는 어떤 글자든 반복할 수 있음. 더 간단해짐
const CC_NUMBER = "6060";

const displayName = `   
${"*".repeat(10)}%{CC_NUMBER}
`
console.log(displayName);

// startsWith

const nameOf = "Ms.Kkamzzu";

console.log(nameOf.startsWith("Ms")); //true

// endsWith (ex:.com)

const nameE = "Ms.Kkamzzu";

console.log(nameE.endsWith("Kkamzzu")); //true
