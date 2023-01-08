const p1 = new Promise((resolve, reject) => {
    setTimeout(reject, 5000 ,"First");
})
.then(value => console.log(value))
.catch(e => console.log(`${e}error`))
.finally(() => console.log("I'm done!"));
