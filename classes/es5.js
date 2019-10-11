/////ES5/////

function User(name) {
    this.name = name;
}
User.prototype.describe = function() {
    return "My name is "+this.name;
};

// Subclass
function Worker(name, position) {
    User.call(this, name);
    this.position = position;
}
Worker.prototype = Object.create(User.prototype);
Worker.prototype.constructor = Worker;
Worker.prototype.describe = function() {
    return User.prototype.describe.call(this)+" ("+this.position+")";
};


var user = new User("Polina");
var worker = new Worker("Pasha", "Developer");

console.log(user.describe());
console.log(worker.describe());

