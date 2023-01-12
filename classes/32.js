class User {
    constructor(name){
        this.username = name;
    }
    sayHello(){
        console.log(`hello, my name is ${this.username}`)
    }
}

const sexyUser = new User("kkamzzu");

sexyUser.sayHello();