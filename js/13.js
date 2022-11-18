// array destructuring: 가져온 정보를 조작하지 않을 때 쓰기 좋음.

const days = () => ["Mon", "Tue", "Wed"];

// array 요소들한테는 이름이 없음(object에는 각 요소별로 key 값이 있음), (array에는 포지션 값만 있음)

// 원본데이터는 요소가 3개밖에 없는데 4번 째 요소를 호출하고 거기에 대한 기본값을 선않가능 
const [mon, tue, wed, thu ="Thu" ] = days();

console.log(mon,tue,wed,thu); //super simple


//Renaming

const settings = {
    color: {
        chosen_color: "dark"
    }
};

let chosenColor = "blue";

////////

console.log(chosenColor);

// 새 변수를 생성하는 대신에 let 변수인 chosenColor를 업데이트 하는 것.
({
    color: {chosen_color: chosenColor = "light"}
} = settings); //괄호로 감싸준다


console.log(chosenColor) //rename을 해줬기 떄문에 가능