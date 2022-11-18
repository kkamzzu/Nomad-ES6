// swapping and skipping

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