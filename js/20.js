//rest parameters: 
// parameter(매개변수): 우리가 함수에게 전다랗는 인자들을 이야기 하는 것.

// ...spread :풀어놓기
// rest: 축소(contract) : 모든 값을 하나의 변수로 축소 시켜주는 것.

// 전부다 kimchi 라고 불리는 변수 안에 넣자 라는 뜻.
const infinitArgs = (...kimchi) => console.log(kimchi); //입력한 인자들이 전부 모임. : rest

infinitArgs("1", 2, true, "kkamzzu", [1, 2, 3, 4],"koko","dkgkhdk");

//rest 는 array를 만든다.
// parameter 부분에 들어가면 rest


const bestFriendMaker = (firstOne, ...rest) => {
    console.log(`My best frined is ${firstOne}`);
    console.log(rest) //array
}

bestFriendMaker("nico", "kkamzuu", "barnes", "ehit");

// other rest case