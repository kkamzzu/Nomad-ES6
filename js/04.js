//array operation

// find (제공되는 텍스트 조건을 만족하는 첫번 째 엘리먼트 값을 리턴하는 함수 )
// const email = [
//     "kkam@df.com", 
//     "naver@gmail.com", 
//     "wlgus09@icloud,com",
//     "nico@nomad.com"];

// const foundMail = email.find(item => item.includes("@gmail.com"));

// console.log(foundMail);


//filter (제공된 함수의 조건을 만족한 모든 엘리먼트로 새로운 array를 만듬)
// const emails = [
//     "kkam@df.com", 
//     "naver@gmail.com", 
//     "wlgus09@icloud,com",
//     "nico@nomad.com",
//     "kkamzzu@gmail.com"
// ];
// // potato가 gmail을 갖고있지 않다면 출력
// const noGmail = emails.filter(potato => !potato.includes("@gmail"))
// console.log(noGmail);


//forEach()
const emails = [
    "kkam@df.com", 
    "naver@gmail.com", 
    "wlgus09@icloud,com",
    "nico@nomad.com",
    "kkamzzu@gmail.com"
];

const cleaned = emails.map((email, index) => ({username:email.split("@")[0], index}));
 
console.log(cleaned);