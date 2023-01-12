const amISexy = new Promise((resolve, reject) => {
    setTimeout( reject, 3000, "you are ugly");
    // resolve("Yes u are"); //same
});


amISexy
    .then(result => console.log(result))
    .catch(error => console.log(error));