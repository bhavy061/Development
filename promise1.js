const j1 = {
    name:"Rohit",
    age :30,
    address : "dwarka"
}

const jsonFormat = JSON.stringify(j1);
console.log(jsonFormat);

const jsonFormat1 = {
    "name" : "Rohit",
    "age"  :30,
    "address" : "dwarka"
}  
const Jsobj = JSON.parse(jsonFormat);
console.log(Jsobj); 