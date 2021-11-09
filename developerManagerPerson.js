function Person (name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.greet = function () {
    console.log(`Hi, I'm ${this.name} and I'm ${this.age} years old"`)
}

function Developer(name, age, skillset) {
    Person.call(this, name, age);
    this.skillset = skillset;
}

 Developer.prototype.__proto__ = Person.prototype;

 Developer.prototype.greet = function () {
    Developer.prototype.__proto__.greet.call(this)
    let skillsetStr = this.skillset.join(", ")
    
    console.log(`I know ${skillsetStr}`)
}

 function Manager(name, age, managed) {
    Person.call(this, name, age);
    this.managed = managed;
}

 Manager.prototype.__proto__ = Person.prototype;

 function developersToNamesString(managed) {
    let names = managed.map(function (developer) {
        return developer.name
    })
    return names.join(", ")
}

 Manager.prototype.greet = function () {
    Manager.prototype.__proto__.greet.call(this)
    console.log(`I manage ${developersToNamesString(this.managed)}`)
}

// Developer instances
let maria = new Developer('Maria Popova', 23, ['Python','Machine Learning']);
let pesho = new Developer('Petar Petrov', 19, ['JavaScript', 'Angular', 'React', 'Vue']);

// Manager instances
let gates = new Manager('Bill Gates', 43, [maria, pesho]);

/* ----------------------------- Use the objects ---------------------------- */
maria.greet();
pesho.greet();
gates.greet();