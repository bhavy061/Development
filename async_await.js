//async await
//async function always return a promise
// async function greet()
// {
//     return "Rohit";
// }

// const response = greet();
// console.log(response);

// response.then((data)=>{
//     console.log(data);
// });

// const response = await fetch("https://api.github.com/users")
// const data = await response.json();
// console.log(data);

async function github()
{
    console.log("Hello World");
    const response = await fetch("https://api.github.com/users");
    const data = await response.json();

    const parent = document.getElementById("first");

    for(let user of data)
    {
       const element =  document.createElement("div");
       element.classList.add("user");

       const img = document.createElement('img');
       img.src = user.avatar_url;

       const username =  document.createElement('h2');
       username.textContent = user.login;

       const anchor  = document.createElement('a');
       anchor.href = user.html_url;
       anchor.textContent = "Visit Profile";

       element.append(img,username,anchor);
       parent.append(element);

    }
}
github();