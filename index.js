class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

let person = new Person("John", 45);
console.log(`${person.name} is ${person.age} years old.`);