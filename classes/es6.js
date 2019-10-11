// parent class
class User {
    constructor(name, age, gender, email) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.email = email;
    }
    get Name() {
        return this.name;
    }
    set Name(name) {
        this.name = name;
    }

    get Age() {
        return this.age;
    }
    set Age(age) {
        this.age = age;
    }

    get Gender() {
        return this.gender;
    }
    set Gender(gender) {
        this.gender = gender;
    }

    get Email() {
        return this.gender;
    }
    set Email(email) {
        this.email = email;
    } 
 }
 // subclass
 class Worker extends User {
    constructor(name, age, gender, email, position) {
        super(name, age, gender, email);
        this.position = position;
    }
    get Position() {
        return this.position;
    }
    set Position(position) {
        this.position = position;
    } 
 }
 
 module.exports.User = User;
 module.exports.Worker = Worker;


 let user = new User("Polina", 20, "Female", "ps@mail.com");
 let worker = new Worker("Pasha", 20, "Male", "pd@mail.com", "Developer");

 console.log(user.toString());
 console.log(worker.toString());