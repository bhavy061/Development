// console.log("Hello world");

// const p1 = fetch("https://jsonplaceholder.typicode.com/posts/1");
// const p2 = p1.then((response)=>{
//     return response.json();
// })

// p2.then((response)=>{
//     console.log(response);
// });

//create promise
// const p1 = new Promise((resolve,reject)=>{
//     resolve("Hello");
// })
// p1.then((response)=>{
//     console.log(response);
// })
// .catch((error)=>{
//     console.log(error);
// })
// fetch("https://api.github.com/users")
// .then((response)=>{
//    console.log(response);
//    if(!response.ok)
//    {
//     throw new Error("Data is not present in server");
//    }
//    return response.json();
// })

// .then((data)=>{
//     const parent = document.getElementById("first");
//     for(let i = 0;i<data.length;i++)
//     {
//         const image = document.createElement('img');
//         image.src = data[i].avatar_url;
//         image.style.height = "40px";
//         image.style.width = "50px";
//         parent.append(image);
//     }
// })
// .catch((error)=>{
//     const parent = document.getElementById("first");
//     parent.textContent = error.message;
// })

const orderDetails = {
    orderid : 12345,
    food : ["Pizza","biriyani","coke"],
    cost : 620,
    cost_name:"Rohit",
    cust_loc:"Dwarka",
    restaurant:"Delhi"
}
function placedorder(orderDetails){
    console.log(`${orderDetails.cost} Payment is in progress`);
    
    return new Promise((resolve,reject)=>{
         setTimeout(()=>{
        console.log("Payment is received and order get placed"); 
         resolve(orderDetails);   
    },3000);

    });
    
}

function preporder(orderDetails)
{
    console.log("Food prep is statrted");
    return new Promise((resolve,reject)=>{
         setTimeout(()=>{
        console.log("order is prepared");
        resolve(orderDetails);
    },3000)
   
    });
}

function pickup()
{
    console.log("Delievery boy is on the way");
    return new Promise((resolve,reject)=>{
         setTimeout(()=>{
        console.log("picked the order");
        resolve(orderDetails);
    },3000)

    });
}

placedorder(orderDetails)
.then((orderDetails) =>preporder(orderDetails))
.then((orderDetails)=>pickup(orderDetails))
.then((orderDetails)=>{
    console.log(orderDetails);
})
.catch((error)=>{
    console.log("Error" , error.message);
})
.finally(()=>{
    console.log("I am doing cleanup");
})