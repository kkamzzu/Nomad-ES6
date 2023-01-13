const userObj = {
    username: "kkamzzu",
    age: 20,
    password: 1234
};

const userFilter = {
    get: (target, prop, carrot) => {
        return prop === "password" ? `${"*".repeat(5)}` : target[prop];
    },
    set: () => {
        console.log("Somebody wrote something")
    },
    deleteProtery: (target, prop) => {
        if(prop === "password"){
            return;
        } else {
            target[prop] = "DELETED"
        }
     },
};

const filteredUser = new Proxy(userObj,userFilter );

