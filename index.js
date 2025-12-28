const arr = [10,20,30,"Rohit",90]
sum = 0;
///forEach
// arr.forEach((number,idx,arr)=>{
//   sum +=number;
// });
// console.log(sum);

//filter

// const newarr = arr.filter((number)=> number > 25);
// console.log(newarr);

arr.filtering = function(compare){
    const ans = []
    for(let num of arr)
    {
        if(compare(num))
        {
            ans.push(num);
        }
    }
    return ans;
}
const newarr = arr.filtering((num)=> num >= 25)
console.log(newarr);
//reduce
