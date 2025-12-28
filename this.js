//console.log(this)
  function greet(){
        console.log(this);
        console.log(`hii,${this.name}`);
    }
const user = {
    name:"Rohit",
    age:30,
}

const user2 = {
    name:"Mohit",
    age:30,
   
}
greet.call(user2)