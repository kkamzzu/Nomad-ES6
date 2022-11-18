// rest + spread + destructure magic

// rest 의 훌륭한 첫번 째 예시는 특정속성(property)를 제외시키는 것.

const user = {
    name: "kkamzzu",
    age: 25,
    password: 12345 //만약 패스워드를 제거하고 싶다면
};
// user["password"] = null;
// console.log(user) //하지만 아직 null로 남아있음


//better(1) object 정리하기

const killPassword = ({password,...rest}) => rest; //rest 만 리턴.

// destructure: object를 열어서 우리가 원하는 것만 골라서 가져온다

const cleanUser = killPassword(user);
console.log(cleanUser); //password gone.
 
// better (2) 기본값 설정하기
const people = {
    name: "hi",
    age: 25,
    password: 12345 
};
                                                    //return
const setCountry = ({country = "KR", ...rest}) => ({country, ...rest});

console.log(setCountry(people)) //이제 people은 KR을 기본값으로 하는 country라는 속성을 가지고 있음.

// rename property(속성명 바꾸기)

const kkamzzu = {
    NAME: "hoh",
    age: 25,
    password: 12345 
};
const rename = ({NAME:name, ...rest }) => ({name, ...rest}) //소문자로 변경
console.log(rename(kkamzzu))