class User {
    constructor(name, lastName, email, password){
        this.username = name;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
    }
    sayHello (){
        console.log(`hello, my name is ${this.username}`)
    }
    getProfile(){
        console.log(`${this.username} ${this.email} ${this.password}`)
    }
    //function은 이전 password가 맞다면 newPassword로 바꿀 수 있게 해주기
    updatePassword(newPassword, currentPassword){
        if(currentPassword === this.password){
            this.password = newPassword;
        }else {
            console.log("Can't change password")
        }
    }
}
                            //constructor
const sexyUser = new User("kkamzzu","Byeon","kkamzzu@gmail.com","0203");

class Admin extends User{
    constructor(superAdmin){
        this.superAdmin = superAdmin
    }
    deletWebsite(){
        console.log("Deleting the whole website....")
    }
}

const sexyAdmin = new Admin("kkamzzu","Byeon","kkamzzu@gmail.com","0203", true);

sexyAdmin.deletWebsite();

console.log(sexyAdmin.email);