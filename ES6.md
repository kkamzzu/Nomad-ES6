# ES6 

## `(1) Block scope`
- scope = bubble 이 버블이 변수들이 접근가능한지 아닌지를 감지해줌.
- 블록 안에서 선언하면 외부로 나가진 않음.
- 외부로 꺼내면 안에서도 그 값을 사용할 수 있음.
```js
let hello;
if(true){
    ///////////
    if(true){
        /////////////
    }
    
}
console.log(hello);
```

- const, let 모두 block scope 으로 되어있음.
- 그 block안에서만 존재한다는 뜻 -> { }
- 고로 block밖에서는 hello는 존재하지 않음.
- 하지만, var는 가능 (var는 block scope가지지 않음!)
- var는 function scope을 갖고있음 -> var가 function안에서 접근할 수 있다는 뜻.
- 블록 안에서는 외부로 접근할 수 있지만, 외부에서는 블록으로 접근 어려움.
- var stop being use!

## `(2) arrow function  =>`


```js
const names = ['kkamzzu','barnes','sojin'];


const hearts = names.map(function(item){
    return item + "*";
});

console.log(hearts)
```

```js 
//same1
const names = ['kkamzzu','barnes','sojin'];


const hearts = names.map((item, index) =>{ 
    console.log("we are on ", index);
        return item + "*";
});

console.log(hearts)
```

```js
//same2
//자바스크립트에서 함수의 모습을 개선한 것
const names = ['kkamzzu','barnes','sojin'];
const hearts = names.map(item => item + "*");
console.log(hearts)
```

- this 사용시, arrow function을 사용안됨.

```js
const button = document.querySelector("button");

button.addEventListener("click", () => {
    console.log(this);
    this.style.backgroundColor = 'red';
});
//error
```
- rule of arrow function
- arrow function 안에 있는 this는 window를 참조함.

## `(3) array operation`

1. find
:제공되는 텍스트 조건을 만족하는 첫번 째 엘리먼트 값을 리턴하는 함수.

```js
const email = [
    "kkam@df.com", 
    "naver@gmail.com", 
    "wlgus09@icloud,com",
    "nico@nomad.com"];

const foundMail = email.find(item => item.includes("@gmail.com"));

console.log(foundMail);
```

2. filter: 제공된 함수의 조건을 만족한 모든 엘리먼트로 새로운 array를 만듬.
```js
const emails = [
    "kkam@df.com", 
    "naver@gmail.com", 
    "wlgus09@icloud,com",
    "nico@nomad.com",
    "kkamzzu@gmail.com"
];
// potato가 gmail을 갖고있지 않다면 출력
const noGmail = emails.filter(potato => !potato.includes("@gmail"))
console.log(noGmail);
```
3. forEach()
```js
const emails = [
    "kkam@df.com", 
    "naver@gmail.com", 
    "wlgus09@icloud,com",
    "nico@nomad.com",
    "kkamzzu@gmail.com"
];

const cleaned = emails.map((email, index) => ({username:email.split("@")[0], index}));
 
console.log(cleaned);
```
4. dafault value: 뭐든 될 수 있음.

``` js
const DEFAULT = "dfdfds";

const sayHi = (aName = DEFAULT) => "hello" + aName;

console.log(sayHi());
```

## `(4) temple literal (``)`

```js
// const DEFAULT = "dfdfds";
// // string을 계속 +로 추가해야하는 번거로움.
// const sayHi = (aName = DEFAULT) => "hello " + aName + " have a nice day";
// console.log(sayHi());
```
```js
const DEFAULT = "kkamzzu";
const sayHi = (aName = DEFAULT) => `hello ${aName} have a nice day`;
console.log(sayHi());

console.log(`Hello how are u ${1203*45} `)

console.log(`Hello how are u ${() => 1203*45} `) //function 은 안됨.


// string애서의 function 실행
const add = (a,b) => a + b;
console.log(`Hello how are u ${add(6, 6)} `)
```

## `(5) styled components :리액트를 위한 라이브러리, 패킷`

- js 에서 css를 쓸 수 있고, htmldmf 얻을 수 있음.
- styled component가 동작하는 방식.
- 함수 호출시, string들은 arguments로 들어가게 됨.

```js
// 해야할 것 : functiond 안에 function을 리턴 하는 것.

const styled = aElement => {
    const el = document.createElement(aElement);
    return args => {
        const styles = args[0];
        el.style = styles;
        return el;
    }
};

// whatever i want ex) div, span,,,

const title = styled("h1")`
    background-color: red;
    color: blue;
`;

const subtitle = styled("span")`
    color: green;
`
console.log(title);

title.innerText = "We just cloned";
subtitle.innerText = "Styled Components"

document.body.append(title, subtitle);
```

## `(6) include, repeat, startsWith, endsWith`

###  include
- 내가 찾고 싶은 문자가 있는지 확인해줌.

```js
const isEmail = (email) => email.includes("@");

console.log(isEmail("kkamzzu@gmail.com")); //true
```

### repeat
- 원하는 어떤 글자든 반복할 수 있음. 더 간단해짐.
```js
const CC_NUMBER = "6060";

const displayName = `   
${"*".repeat(10)}%{CC_NUMBER}
`
console.log(displayName);
```

### startsWith, endsWith (ex:.com)

```js
const nameOf = "Ms.Kkamzzu";

console.log(nameOf.startsWith("Ms")); //true


const nameE = "Ms.Kkamzzu";

console.log(nameE.endsWith("Kkamzzu")); //true (10.js)
```

## `(7) array method(of,from)`

- Array.of : 어떤 것을 array를 만들고 싶을 때 사옹함. (element가 많을 때 사용하기 좋음.)
```js
const friends = Array.of("kkamzzu", "barnes", "dlthwls", "yezi");

console.log(friends);
```

- Array.from: array-like object로 부터 array를 만드는 메소드

```js
const buttons = document.getElementsByClassName("btn");
 //HTML Collection array-like object

Array.from(buttons).forEach(button => {
    button.addEventListener("click", () => console.log("I ve been clicked"))
 });
 ```

 or

 ```js
 const buttons = document.getElementsByClassName("btn");

const ar = Array.from(buttons);

ar.forEach(button => {
    button.addEventListener("click", () => console.log("I ve been clicked"))
 });
```

## `(8) find, findIndex`

- find

```js
const friends =[
    "kkamzzu@gmail.com",
    "nico@nate.com",
    "hohoho@icloud.com",
    "wlgus@yahoo.com",
    "zzu@naber.com",]
    // true를 return하면 첫번 째가 나옴.
    const target = friends.find(friend => true)
    console.log(target);

```
- findIndex: 어디있는지 모를 걸 수정해야할 때 

```js
let target = 
console.log(target);

// const target = friends.findIndex(friend => friend.includes("@naver.com"))
// console.log(target);

const username = friends[target].split("@")[0];

const email = "yahoo.com";

console.log(username, email);
```

## `(9) Object Destructuring(비구조화)`

- destructuring은 object나 array, 그 외 요소들 안의 변수를 바깥으로 끄집어 내서 사용할 수 있도록 하는 것.
```js
const settings = {
    // notifications: {
    //     // follow: true,
    //     alerts: true,
    //     unfollw: false
    // },
    color: {
        theme: "dark"
    }
};
```
- before (문제: 보기싫다,follow값이 아예 없을 수 있다는 것.)

```js
if(settings.notification.follow) {
    //send email
}
```
- setting안의 notifications으로부터 follow 가져오기.
- notifications 안으로 접근하고, 그건 settings안에 있는데, follow만 가져온다.
- settings안의 notificatins 안으로 가서 follow가 있는지 찾아본 다음에 follow가 없으면 follow = false라고 선언해줌.

```js
const {notifications: {follow = false} ={} 
 //여기엔 무슨 값이든 넣을 수 있음
} = settings; //error 
//(이 경우엔notifications은 변수가 아님)

console.log(follow) //이런 방식은 큰 오브젝트에서 특정변수나 그 안에 속한 작은 오브젝트에 접근할 수 있도록 해줌
```
same code

```js
const {
    notifications
} = settings;

//2
const notifications = settings.notifications; 

notifications object가 통채로 없다면?
notifications default 값을 설정
const {notifications: {follow = false} ={} //여기엔 무슨 값이든 넣을 수 있음
} = settings;
```

## `(10) array destructuring: 가져온 정보를 조작하지 않을 때 쓰기 좋음.`

```js
const days = () => ["Mon", "Tue", "Wed"];

// array 요소들한테는 이름이 없음(object에는 각 요소별로 key 값이 있음), (array에는 포지션 값만 있음)

// 원본데이터는 요소가 3개밖에 없는데 4번 째 요소를 호출하고 거기에 대한 기본값을 선않가능 
const [mon, tue, wed, thu ="Thu" ] = days();

console.log(mon,tue,wed,thu); //super simple
```

## `(11) Renaming`

```js
const settings = {
    color: {
        chosen_color: "dark"
    }
};

let chosenColor = "blue";

console.log(chosenColor);

// 새 변수를 생성하는 대신에 let 변수인 chosenColor를 업데이트 하는 것.
({
    color: {chosen_color: chosenColor = "light"}
} = settings); //괄호로 감싸준다

console.log(chosenColor) //rename을 해줬기 떄문에 가능
```

## `(12) function destructuring`
```js
function saveSettings({notifications, color: {theme}}) {
    console.log(theme);
}

saveSettings({
    notifications: {
        follow: true,
        alert: true,
        mkt: false
    },
    color: {
        theme: "blue"
    }
})
```

## `(13) value Shortthands(변수명 단축)`
- 변수 이름을 똑같이 하고싶다면 단축속성명을 사용할 수 있음. (follow:follow -> follow)

```js
const follow = checkFollow();
const alert = checkAlert();

const settings = {
    notifications: {
        follow
    }
};
```

## `(14) swapping and skipping`

```js
//swapping
let mon = "Sat";
let sat = "Mon"; 

//교환
[sat, mon] = [mon, sat];

//omitting (생략하는 방법)

const days = ["Mon", "tue", "wed", "thu", "fri"];

//,,,으로 변수생략
const [,,,thu, fri] = days;

console.log(thu, fri)
```

## `(15) spread (...)`
 :변수를 가져와서 풀어헤치고 전개하는 것.

```js
const friends = [1, 2, 3, 4];

console.log(friends)

//friends array 안의 1,2,3,4 라는 값을 풀어 해칠거야.
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
```

## `(15 - 1) spread_2`

- friends에 push 한게 아니고 newFriends에다가 넣기.
- 기존 데이터를 복사해서 새로운 데이터를 만들고 싶을 때 사용가능.

```js
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
```

## `(16) conditinal (조건부)`
- 조건부로 last name 추가하기
```js
const lastName = prompt("Last name");

const user = {
    username: "kkamzzu",
    age: 24,
    // 둘다 true여야만 함.  spread로 전개하려면 데이터가 object여야 하므로 중괄호로 감싸
    ...(lastName !== "" && {lastName})
    // lastName 이 빈칸이면 undefined
    
};

console.log(user); 
```

## `(17) rest parameters`

- parameter(매개변수): 우리가 함수에게 전다랗는 인자들을 이야기 하는 것.
- ...spread :풀어놓기.
- rest: 축소(contract) : 모든 값을 하나의 변수로 축소 시켜주는 것.

```js
// 전부다 kimchi 라고 불리는 변수 안에 넣자 라는 뜻.
const infinitArgs = (...kimchi) => console.log(kimchi); //입력한 인자들이 전부 모임. : rest

infinitArgs("1", 2, true, "kkamzzu", [1, 2, 3, 4],"koko","dkgkhdk");
```
- rest 는 array를 만든다.
- parameter 부분에 들어가면 rest

```js
const bestFriendMaker = (firstOne, ...rest) => {
    console.log(`My best frined is ${firstOne}`);
    console.log(rest) //array
}

bestFriendMaker("nico", "kkamzuu", "barnes", "ehit");
```

## `(18) rest + spread + destructure magic`

- rest 의 훌륭한 첫번 째 예시는 특정속성(property)를 제외시키는 것.
```js
const user = {
    name: "kkamzzu",
    age: 25,
    password: 12345 //만약 패스워드를 제거하고 싶다면
};
// user["password"] = null;
// console.log(user) //하지만 아직 null로 남아있음
```
- better(1) object 정리하기
```js
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
```

## `(19) for of loop`

- 루프를 사용할 수 있게 해주고, 멈추고 싶을 때 멈출 수 있게 해줌.
- loop:기본적으로 같은 일을 반복적으로 하는 것.

```js
const friends = ['Kkamzzu','Nik','Barnes','sojin','jan','hidj','dkjal','djghda'];
```
- forEach는 addHeart를 호출하는데, current item과 함께 호출함. current item이 함수의 첫 번째 인자가 될거임.
- 그리고 current item말고 index를 붙여서 함수를 호출할 수 있음. index를 두 번째 인자로 받을 수 있음.
- 세 번째 인자는 current array임.
- (인자1: current item, 인자2: index, 인자3: current array)

```js
const addHeart = (c,i,a) => console.log(c,i,a);
```

- arrow function으로도 변경가능
```js
friends.forEach(friend => console.log(friend))
```
```js
//i love kimchi가 20번 실행. 
//(i는 처음에 0 이고, i가 20보다 작은 한 이부분을 실행, 이후에 i에 1을 더해줌.그러면 i는 1이 되었다가, 2가 되었다가, 3,,4가 됨 )
for(let i = 0; i < 20; i++){
    console.log("i love kimchi")
}
```
```js
 for (let i =0; i < friends.length; i++) {
     console.log(`${i}i love kimchi`); 
    //이경우엔 4번 실행 
```
- 단지 friends의 각각을 위해 숫자를 세거나 무언가를 하고싶다면 ?
- forEach:배열에 있는 각각의 엘리먼트에 대해 특정한 액션을 실행함. 

```js
friends.forEach(addHeart)
```
- for of.. (forEach와 차이점: let,const 어떤걸로 선언할지 선택가능 )
- array에서만 동작하는 것이 아니라, iterable한 모든 것에서 동작함.
- iterable: 루프가 가능하다는 뜻. (string가능)
- forEach를 사용하면 루프를 멈출 수 없지만 for it을 사용하면 중간에 멈추기 가능.

```js
for (const friend of friends){
    if(friend ==="jan"){
        break;
    }else{
        console.log(friend);
    }//stop loop
}
```

## `(20) Promises`
#### 참고자료: https://joshua1988.github.io/web-development/javascript/promise-for-beginners/

- 자바스크립트 비동기 처리에 사용되는 객체.
- 자바스크립트의 비동기 처리란 ‘특정 코드의 실행이 완료될 때까지 기다리지 않고 다음 코드를 먼저 수행하는 자바스크립트의 특성'을 의미.
- API가 실행되면 서버에다가 ‘데이터 하나 보내주세요’ 라는 요청을 보냄. 여기서 데이터를 받아오기도 전에 마치 데이터를 다 받아온 것 마냥 화면에 데이터를 표시하려고 하면 오류가 발생하거나 빈 화면이 뜸. 이와 같은 문제점을 해결하기 위한 방법 중 하나가 프로미스.
- 웹사이트에서 데이터를 가져오려면 fetch()

```js
const hello = fetch("google.com");

console.log("somthing");
console.log(hello);
```
 - 콘솔창에 구글패치 에러가 제일 마지막에 뜸. -> 자바스크립트의 비동기성(async)
 - 자바스크립트는 프로그램의 실행을 멈추지 않음.
 - 순차적으로 진행되는게 아니라 한꺼번에 진행됨.

 ## `(21) Creating Promises`
 
 - Pomise는 비동기 작업이 맞이할 미래의 완료 또는 실패와 그 결과 값을 나타냄.
 - so, promise를 만들 때는 실행할 수 있는 function을 넣어야함.
 ```js
 const amISexy = new Promise((resolve, reject) => {
    setTimeout( resolve, 3000, "Yes you are");
});

console.log(amISexy);

setInterval(console.log, 1000, amISexy)
```
- Promise 의 핵심은 아직 모르는 value와 함께 작업할 수 있게 해준다는 것.

## `(22) Using Promises`

- promise를 사용하려면 'then'이 필요함.
- promise가 끝이 났을 때, 값을 돌려달라고 명령어를 내림.

<Promise 3가지 상태>

- Pending(대기) : 비동기 처리 로직이 아직 완료되지 않은 상태.
#### 먼저 아래와 같이 new Promise() 메서드를 호출하면 대기(Pending) 상태가 됨.
```js
new Promise();
```
#### new Promise() 메서드를 호출할 때 콜백 함수를 선언할 수 있고, 콜백 함수의 인자는 resolve, reject.
```js
new Promise(function(resolve, reject) {

});
```

- Fulfilled(이행) : 비동기 처리가 완료되어 프로미스가 결과 값을 반환해준 상태.
#### 여기서 콜백 함수의 인자 resolve를 아래와 같이 실행하면 이행(Fulfilled) 상태가 됨.

```js
new Promise(function(resolve, reject) {
  resolve();
});
```
#### 그리고 이행 상태가 되면 아래와 같이 then()을 이용하여 처리 결과 값을 받을 수 있음.
```js
function getData() {
  return new Promise(function(resolve, reject) {
    var data = 100;
    resolve(data);
  });
}

// resolve()의 결과 값 data를 resolvedData로 받음
getData().then(function(resolvedData) {
  console.log(resolvedData); // 100
})
```

- Rejected(실패) : 비동기 처리가 실패하거나 오류가 발생한 상태.
#### new Promise()로 프로미스 객체를 생성하면 콜백 함수 인자로 resolve와 reject를 사용할 수 있음. 여기서 reject를 아래와 같이 호출하면 실패(Rejected) 상태가 됨.

```js
new Promise(function(resolve, reject) {
  reject();
});
```
#### 그리고, 실패 상태가 되면 실패한 이유(실패 처리의 결과 값)를 catch()로 받을 수 있음.

```js
function getData() {
  return new Promise(function(resolve, reject) {
    reject(new Error("Request is failed"));
  });
}

// reject()의 결과 값 Error를 err에 받음
getData().then().catch(function(err) {
  console.log(err); // Error: Request is failed
});
```

- reject
```js
const amISexy = new Promise((resolve, reject) => {
    setTimeout( reject, 3000, "you are ugly");
});
```
- promises.html:1 Uncaught (in promise) you are ugly //error (에러를 잡지 못했기 때문에 에러가 뜸.) -> 이때 catch를 써줌.

- catch: then이랑 비슷하지만, 에러를 위해 쓰이는 것.
```js
amISexy
    .then(result => console.log(result))
    .catch(error => console.log(error));
```
- promise가 resolve 되면 then이 실행.
- promise가 reject 되면 catch가 실행.
- then이 먼저 실행되고 catch가 실행되는게 아니라, 이 두개는 각기 다른 상황에서 실행이 되는 것. 
- then이 실행되면 catch는 실행되지 않고, catch가 실행되면 then은 실행되지 않아.(순서대로 나열이 아님)

## `(23) Chaining Promises`
- 가끔 하나의 promise가 아닌 여러개를 사용해야 하는 경우도 있음.
```js
amISexy.then(number => {
    
}).then().then();
```
- then은 넣고싶은 만큼 넣어주면 됨. (이 모든 then은 순서가 끝나기만을 기다림)
- 시간이 조금 걸리는 단계를 만들어 줄 때, then을 써주면 좋음. -> 이렇게 하는 과정을 Chaining 이라고 함. 서로서로 연결되어 있음 마치 체인처럼.

```js

amISexy.then(number => {
    console.log(number * 2);
})
.then(otherNumber =>{
    console.log(otherNumber * 2)  //NaN 이 나옴.
    console.log(otherNumber) //undefined
});
```
- 이렇게 나온다는건 then이 제대로 작동이 안된다는 것.
- 작동이 안되는 이유는 promise들을 엮고 싶을 때는 기존의 then에서 return값이 있어야 하는 것.

```js
const amISexy = new Promise((resolve, reject) => {
    resolve(2);
});

amISexy.then(number => {
    console.log(number * 2);  //4
    return number * 2; 
})
.then(otherNumber =>{
    console.log(otherNumber * 2)  //8
    console.log(otherNumber)  //4
}); 
```
- 여러개의 then중에 error가 생기면 catch로 에러를 잡을 수 있음.
```js
const timeTwo = (number) => number * 2
amISexy
    .then(timeTwo)
    .then(timeTwo)
    .then(timeTwo)
    .then(timeTwo)
    .then(timeTwo)
    .then(lastNumber => console.log(lastNumber));
```
```js
const timeTwo = (number) => number * 2
amISexy
    .then(timeTwo)
    .then(timeTwo)
    .then(timeTwo)
    .then(timeTwo)
    .then(() => {
        throw Error("something is wrong");
    })
    .then(lastNumber => console.log(lastNumber));
```
- 새로고침 해주고 보면 last Number까지 진행되지 않음.(그전에 에러발생)
- 이 에러가 어떤건지 찾아낼 수 있음. (error-> catch)
```js
.catch(error => console.log(error))
```       

## `(24) Promise.all()`
- promise all = 주어진 모든 Promise를 실행한 후, 진행되는 하나의 Promise를 반환함.
- 가끔 하나의 API가 아닌 3개,4개의 API에서 값을 불러와야 할 때가 있음.
- 이럴 때 then을 여러개 넣기보다는 Promise.all()을 사용.
- Promise.all()은 한개의 Promise를 리턴값으로 주는데 모든 Promise가 전부 Resolve되고 나면 마지막 Promise를 리턴값으로 주는것.

```js
const p1 = new Promise((resolve) => {
    setTimeout(resolve, 5000 ,"First"); //resolve
})

const p2 = new Promise((resolve) => {
    setTimeout(resolve, 1000 ,"Second"); //resolve
})

const p3 = new Promise((resolve) => {
    setTimeout(resolve, 3000 ,"Third"); //resolve
});

const motherPromise = Promise.all([p1, p2, p3]);

motherPromise.then(values => console.log(values));
```

- 즉, promise.all이 다른 promise들이 전부 진행될 때 까지 기다렸다가 진행되었다는 것.
- 이론상으론 p1이 제일 마지막에 나와야하는데 promise.al은 각각 언제 끝나는지는 상관이 없고, 순서에 맞춰서 값을 제공.
- 시간이 얼마나 걸리든 전부 끝났을 때 값을 순서대로 제공.
- 하나라도 reject가 되면 motherPromise도 reject 됨.

```js
const p1 = new Promise((resolve) => {
    setTimeout(resolve, 5000 ,"First");
});

const p2 = new Promise((resolve, reject) => {
    setTimeout(reject, 1000 ,"I hate Js");
});

const p3 = new Promise((resolve) => {
    setTimeout(resolve, 3000 ,"Third");
});

const motherPromise = Promise.all([p1, p2, p3]);

motherPromise
.then(values => console.log(values))
.catch(err => console.log(err));
```
- p2 promise가 거절을 당했단 이야기.
- 그리고 이후의 promise들은 진행이 되지않음. 이미 앞에서 에러가나서 소용 불가.
- 제대로 작동이 되는지 확인해 볼 때 굉장히 유용함!

## `(25) Promise.race()`
 - Promise.race()와 Promise.all()은 다르지만 사용법은 같음.
 - race()는 이 세 개 중에 하나라도 resolve가 되거나 reject가 되면 됨.(여기서 가장 빠른게 결과를 정함.)

 ```js
 const p1 = new Promise((resolve) => {
    setTimeout(resolve, 5000 ,"First");
});

const p2 = new Promise((resolve, reject) => {
    setTimeout(reject, 1000 ,"I hate Js");
});

const p3 = new Promise((resolve) => {
    setTimeout(resolve, 3000 ,"Third");
});

const motherPromise = Promise.race([p1, p2, p3]);

motherPromise
.then(values => console.log(values))
.catch(err => console.log(err));
```
- 여기선 p2가 가장 빠르기 때문에 "I hate Js"가 뜸. reject하는데 1초밖에 걸리지않음.
- 어느것이 먼저 되든지 상관 없을땐 "race"를 사용하면 됨.
- 기본적으로 가장 먼저 끝난 Promise가 부모 Promise를 resolve함.

## `(26) Promise Finally`

- Finally:
- 만약 에러가 뜨면 spinner를 멈추고 유저에게 에러를 해결하라고 보여주고,
- 업로드에 성공하면, spinner를 멈추게 함.
```js
const p1 = new Promise(resolve => {
    setTimeout(resolve, 5000 ,"First");
})
.then(value => console.log(value))
.finally(() => console.log("I'm done!"));
```

- 결과에 대해 신경쓰지 않아도 됨. finalize 하는데 성공,실패 상관없음.
- 보통 API를 호출 할 때 씀.(로딩할 때, 하나를 얻고 두개를 얻고 세 개를 얻고 마지막으로 데이터를 보여주거나, 로딩을 멈추거나, 뭔가를 하거나 할 때)

## `(27) Real world Promises`
- fetch()는 Promise를 retrun함. fetch가 하는 일은 뭔가를 가지고 오는일.

```js
fetch("http://127.0.0.1:5500/html/promises.html")
.then(response => console.log(response))
.catch(e => console.log(`x ${e}`));
// 동작되진 않지만, 이게 promise인건 알 수 있음.
```

#### body:ReadableStream 
- stream은 기본적으로 byte임. 0과 1.(우리는 그걸 읽을 수 있음.)
- body 를 json 으로 바꿔야함.
```js
.then(response => console.log(response.json()))
// promise rejeted
```
- 다른 프로미스를 console.log()한거.
- 왜냐 response거 Promise를 리턴하는 함수를 가지고 있기 때문.
```js
.then(response => (response.text()))
```
- api를 요청하면 api는 response줌.
- 그러면 그response를 텍스트로 변환하는걸 시도함.
- 이건 또 나에게 프로미스를 줘. (그럼 then을 써야한다는 뜻.)
```js
fetch("http://127.0.0.1:5500/html/promises.html")
.then(response => (response.text()))
.then(potato => console.log(potato))
.catch(e => console.log(`x ${e}`));
```

- 영화 목록 json (https://yts.mx/api#movie_details)
```js
fetch("https://yts.mx/api/v2/list_movies.json")
.then(response => {
    console.log(response);
    return response.json();
})
.then(json => console.log(json))
.catch(e => console.log(`x ${e}`));
// 우리는 Response를 얻고, 모든 영화들을 가져옴.
```


## `(28) Async Await`

- Async/ Await는 두 promise의 업데이트임.
- 보기좋은 코드를 만들기 위해서 만들어짐.(then,catch는 구식)
- 기본적으로 Async/ Await는 promise 밖에서 값을 가져올 수 있는 방법.(then, catch사용 없이)
- await는 단독사용 안됨 (async function안에서만 사용할 수 있음.)
- await는 성공을 기다려주는 게 아니라 promise가 끝나길 기다려 주는것. 

#### how to make async function

```js
const getMovies = async() => {
 // ...
}
```
#### or

```js
async function getMovies() {
// ...
}
```
- Compare promise, async
```js
//Promise
const getMoviesPromise = () => {
    fetch("https://yts.mx/api/v2/list_movies.json")
.then(response => {
    console.log(response);
    return response.json();
})
.then(json => console.log(json))
.catch(e => console.log(`x ${e}`));

}

//Async
const getMoviesAsync = async() => {

const response = await fetch("https://yts.mx/api/v2/list_movies.json");
const json = await response.json();
console.log(json)
}

getMoviesAsync();

```

## `(29) try catch finally`

```js
const getMoviesAsync = async() => {
    try{
        const response = await fetch("https://yts.mx/api/v2/listmovies.json");
        const json = await response.json();
        console.log(json)
    } catch(e) {
        console.log(e)
    }
};

getMoviesAsync();

//😞 TypeError: Failed to fetch
```
#### 훨씬 간소화 됨.

- json response가 error를 발생하면 어떻게 되는지 

```js
const getMoviesAsync = async() => {
    try{
        const response = await fetch("http://127.0.0.1:5500/html/promises.html");
        const json = await response.json();
        console.log(json)
    } catch(e) {
        console.log(`😞 ${e}`)
    }
};

getMoviesAsync();

// 😞 SyntaxError: Unexpected token 
```
### async await에서 일어나는 모든 에러를 잡아냄.

- finally async, await가 존재함.
```js
const getMoviesAsync = async() => {
    try{
        const response = await fetch("http://127.0.0.1:5500/html/promises.html");
        const json = await response.json();
        console.log(json)
    } catch(e) {
        console.log(`😞 ${e}`)
    } finally {
        console.log("We are done")
    }
};

getMoviesAsync();
```

```js
throw Error("I'm so busy")
``` 
- catch block이 await안에 있는 error만 잡는게 아니라, 밖에 있는 error까지 잡음.

## Async, Await 의 장점
#### 1. 간결하고 깔끔하다.
#### 2. catch를 사용한 error handling이 더 낫다.
#### 3. 구문적으로 혼잡한 것이 무엇인지 알려줌.


## `(30) Parallel Async Await`

- 비동기(Async )Parallel
- destructuring assignment (구조 분해 할당)

```js
        .then(values => );
        //이value는 이 두 promise의 결과값의 array임.
```

```js
const getMoviesAsync = async () => {
    try {
    const [moviesResponse, suggestionResponse] = await Promise.all([
    fetch("https://yts.mx/api/v2/list_movies.json"),
    fetch("https://yts.mx/api/v2/movie_suggestions.json?movie_id=100"),
    ]);
    
    const [movies, suggetions] = await Promise.all([
    moviesResponse.json(),
    suggestionResponse.json(),
    ]);
    
    console.log(movies, suggetions);
    } catch (e) {
    console.log(`😞 ${e}`);
    } finally {
    console.log("we are done");
    }
    };
    
    getMoviesAsync();

```