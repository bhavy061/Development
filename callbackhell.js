const orderDetails = {
    orderid : 12345,
    food : ["Pizza","biriyani","coke"],
    cost : 620,
    cost_name:"Rohit",
    cust_loc:"Dwarka",
    restaurant:"Delhi"
}
function placedorder(orderDetails,Callback){
    console.log(
       `${orderDetails.cost} Payment is in progress`);

    setTimeout(()=>{
        console.log("Payment is received and order get placed");
        Callback();
    },3000);

}

function preporder(orderDetails,Callback)
{
    console.log("Food prep is statrted");
    setTimeout(()=>{
        console.log("order is prepared");
        Callback();
    },3000)
}

function pickup()
{
    console.log("Delievery boy is on the way");
    setTimeout(()=>{
        console.log("picked the order");
    },3000)
}

placedorder(orderDetails,(orderDetails)=>{
    preporder(orderDetails,()=>{
        pickup();
    });
});