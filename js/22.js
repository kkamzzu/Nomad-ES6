// for of loop: 루프를 사용할 수 있게 해주고, 멈추고 싶을 때 멈출 수 있게 해줌.
// loop:기본적으로 같은 일을 반복적으로 하는 것.

const friends = ['Kkamzzu','Nik','Barnes','sojin','jan','hidj','dkjal','djghda'];

// forEach는 addHeart를 호출하는데, current item과 함께 호출함. current item이 함수의 첫 번째 인자가 될거임.
// 그리고 current item말고 index를 붙여서 함수를 호출할 수 있음. index를 두 번째 인자로 받을 수 있음.
// 세 번째 인자는 current array임.

// const addHeart = (c,i,a) => console.log(c,i,a); 
//arrow function으로도 변경가능
// friends.forEach(friend => console.log(friend))

//i love kimchi가 20번 실행. 
//(i는 처음에 0 이고, i가 20보다 작은 한 이부분을 실행, 이후에 i에 1을 더해줌.그러면 i는 1이 되었다가, 2가 되었다가, 3,,4가 됨 )
// for(let i = 0; i < 20; i++){
//     console.log("i love kimchi")
// }

// for (let i =0; i < friends.length; i++) {
    // console.log(`${i}i love kimchi`); //이경우엔 4번 실행 

    //freinds의 2번을 뽑으려면? but it's not sexy
    // console.log(friends[i]);}

    // 단지 friends의 각각을 위해 숫자를 세거나 무언가를 하고싶다면 ?
    // forEach:배열에 있는 각각의 엘리먼트에 대해 특정한 액션을 실행함. 
    // friends.forEach(addHeart)

    // for of.. (forEach와 다른점 let,const 어떤걸로 선언할지 선택가능 )
    // = array에서만 동작하는 것이 아니라, iterable한 모든 것에서 동작함.
    // iterable: 루프가 가능하다는 뜻. (string가능)
    // forEach를 사용하면 루프를 멈출 수 없지만 for it을 사용하면 중간에 멈추기 가능.
for (const friend of friends){
    if(friend ==="jan"){
        break;
    }else{
        console.log(friend);
    }//stop loop
}