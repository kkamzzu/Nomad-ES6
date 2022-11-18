// array method

// Array.of : 어떤 것을 array를 만들고 싶을 때 사옹함.
// element가 많을 때 사용하기 좋음.

const friends = Array.of("kkamzzu", "barnes", "dlthwls", "yezi");

console.log(friends);


// Array.from: array-like object로 부터 array를 만드는 메소드

// const buttons = document.getElementsByClassName("btn");
//  //HTML Collection array-like object

// Array.from(buttons).forEach(button => {
//     button.addEventListener("click", () => console.log("I ve been clicked"))
//  });

//or

const buttons = document.getElementsByClassName("btn");

const ar = Array.from(buttons);

ar.forEach(button => {
    button.addEventListener("click", () => console.log("I ve been clicked"))
 });

 