# ES6 
## (1)

- const가 안전함.
- var는 큰 어플리케이션 사용 시 문제가 될 수 있음.

## (2) Block scope
- scope = bubble 이 버블이 변수들이 접근가능한지 아닌지를 감지해줌.
- 블록 안에서 선언하면 외부로 나가진 않음.
- 외부로 꺼내면 안에서도 그 값을 사용할 수 있음.
- const, let 모두 block scope 으로 되어있음.
- 그 block안에서만 존재한다는 뜻 -> { }
- 고로 block밖에서는 hello는 존재하지 않음.
- 하지만, var는 가능 (var는 block scope가지지 않음)
- var는 function scope을 갖고있음 -> var가 function안에서 접근할 수 있다는 뜻.
- 블록 안에서는 외부로 접근할 수 있지만, 외부에서는 블록으로 접근 어려움.
- var stop being use!

## (3) arrow function  =>
- 자바스크립트에서 함수의 모습을 개선한 것
```js
const names = ['kkamzzu','barnes','sojin'];


const hearts = names.map(item => item + "*");


console.log(hearts)
```

- arrow function을 사용하지 않아야 할 때가 있음.
- this
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

## (4) array operation

1. find
(제공되는 텍스트 조건을 만족하는 첫번 째 엘리먼트 값을 리턴하는 함수)

```js
const email = [
    "kkam@df.com", 
    "naver@gmail.com", 
    "wlgus09@icloud,com",
    "nico@nomad.com"];

const foundMail = email.find(item => item.includes("@gmail.com"));

console.log(foundMail);
```

2. filter (제공된 함수의 조건을 만족한 모든 엘리먼트로 새로운 array를 만듬)
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
4. dafault value (뭐든 될 수 있음)

``` js
const DEFAULT = "dfdfds";

const sayHi = (aName = DEFAULT) => "hello" + aName;

console.log(sayHi());
```

5. temple literal (``)

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

## (5) styled components :리액트를 위한 라이블러리, 패킷

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

## (6) include
- 내가 찾고 싶은 문자가 있는지 확인해줌.

```js
const isEmail = (email) => email.includes("@");

console.log(isEmail("kkamzzu@gmail.com")); //true
```

## (7) repeat
- 원하는 어떤 글자든 반복할 수 있음. 더 간단해짐.
```js
const CC_NUMBER = "6060";

const displayName = `   
${"*".repeat(10)}%{CC_NUMBER}
`
console.log(displayName);
```

## (8) startsWith, endsWith (ex:.com)

```js
const nameOf = "Ms.Kkamzzu";

console.log(nameOf.startsWith("Ms")); //true


const nameE = "Ms.Kkamzzu";

console.log(nameE.endsWith("Kkamzzu")); //true (10.js)
```

## (9) array method

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

## (10) find, findIndex

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
- findIndex: 어디있는지 모를 때 수정해야할 때 

```js
let target = 
console.log(target);

// const target = friends.findIndex(friend => friend.includes("@naver.com"))
// console.log(target);

const username = friends[target].split("@")[0];

const email = "yahoo.com";

console.log(username, email);
```

## (11) Object Destructuring(비구조화)

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
- notifications안으로 접근하고, 그건 settings안에 있는데, follow만 가져온다.

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

## (12) array destructuring: 가져온 정보를 조작하지 않을 때 쓰기 좋음.

```js
const days = () => ["Mon", "Tue", "Wed"];

// array 요소들한테는 이름이 없음(object에는 각 요소별로 key 값이 있음), (array에는 포지션 값만 있음)

// 원본데이터는 요소가 3개밖에 없는데 4번 째 요소를 호출하고 거기에 대한 기본값을 선않가능 
const [mon, tue, wed, thu ="Thu" ] = days();

console.log(mon,tue,wed,thu); //super simple
```

## (13) Renaming

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

## (14) function destructuring
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

## (15) value Shortthands(변수명 단축)

```js
const follow = checkFollow();
const alert = checkAlert();

//변수 이름을 똑같이 하고싶다면 단축속성명을 사용할 수 있음. (follow:follow -> follow)

const settings = {
    notifications: {
        follow
    }
};
```

## (16) swapping and skipping


```js
//swapping
let mon = "Sat";
let sat = "Mon"; 

//교환
[sat, mon] = [mon, sat];

//omitting (생략하는 방법)

const days = ["Mon", "tue", "wed", "thu", "fri"];

//,,으로 변수생략
const [,,,thu, fri] = days;

console.log(thu, fri)
```

## (17) spread 
- spread :변수를 가져와서 풀어헤치고 전개하는 것
```js
const friends = [1, 2, 3, 4];

console.log(friends )

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

## (18) spread_2

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

## (19) conditinal (조건부)
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