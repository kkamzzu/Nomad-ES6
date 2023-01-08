const p1 = new Promise((resolve) => {
    setTimeout(resolve, 5000 ,"First");
});

const p2 = new Promise((resolve, reject) => {
    setTimeout(reject, 5000 ,"I hate Js");
});

const p3 = new Promise((resolve) => {
    setTimeout(resolve, 3000 ,"Third"); //p3이 제일 빠름.
});

Promise.race([p1, p2, p3])
.then(values => console.log(values))
.catch(err => console.log(err));