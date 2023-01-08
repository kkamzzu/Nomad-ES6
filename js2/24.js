const amISexy = new Promise((resolve, reject) => {
    resolve(2);
});


const timeTwo = (number) => number * 2
amISexy
    .then(timeTwo)
    .then(timeTwo)
    .then(timeTwo)
    .then(timeTwo)
    .then(() => {
        throw Error("something is wrong");
    })
    .then(lastNumber => console.log(lastNumber))
    .catch(error => console.log(error));