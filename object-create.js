// 1.using object literal
const student = { name: 'sakib al hasan', job: 'crickter' }
//2. object constructor
const person = new Object();

// 3.
// const human = Object.create(null);
const human = Object.create(student)
// console.log(human.job);

// 4. from class create object
class People {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
const Peop = new People('manush', 12)
// console.log(Peop);

// 5.function 
function manush(name, age) {
    this.name = name
    this.age = age
}
const man = new manush('rahat', 54)
console.log(man);