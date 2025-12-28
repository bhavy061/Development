// const obj = {
//     name:"Rohit",
//     age:38,
//     greet:function(){
//         console.log("Hello ji");
//     }
// };

// console.log(obj.hasOwnProperty("name"))
// const obj2 = {
//     account:30
// }
// obj2.__proto__ = obj;

// console.log(obj2.name)

class Person{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    sayHi()
    {
        console.log(`Hi ${this.name}`);
    }
}
const person1 = new Person("Rohit",20);
const person2 = new Person("Mohit",22);
console.log(person2.age);