//settimeout
//  const id = setTimeout(() => {
//   console.log("Hello");
// }, 1000);

// console.log(id); 

//settime interval
let count = 1;

const intervalId = setInterval(() => {
  console.log(count);
  count++;

  if (count > 10) {
    clearInterval(intervalId);
  }
}, 1000);
console.log(intervalId);
