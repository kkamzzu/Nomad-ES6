class User {
    constructor({username, lastName, email, password}){
        this.username = username;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
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
                            
const sexyUser = new User({
    username:"kkamzzu",
    lastName:"Byeon",
    email:"kkamzzu@gmail.com",
    password:"0203"});

class Admin extends User{
    constructor({username, lastName, email, password, superAdmin, isActive}){
        super({username, lastName, email, password});
        this.superAdmin = superAdmin;
        this.isActive = isActive;
    }
    deletWebsite(){
        console.log("Deleting the whole website....")
    }
}

const admin = new Admin({
    username:"kkamzzu",
    lastName:"Byeon",
    email:"kkamzzu@gmail.com",
    password:"0203",
    superAdmin: true,
    isActive: true
})