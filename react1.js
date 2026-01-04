// const element1 =  document.createElement('h1');
// element1.textContent = "hello coder army";
// element1.className = 'element';
// element1.id = 'first';
// element1.style.fontSize = "30px";
// element1.style.color = "white";
// element1.style.backgroundColor = "orange";

// const element2 =  document.createElement('h2');
// element2.textContent = "strike is launch";
// element2.className = 'element';
// element2.id = 'second';
// element2.style.fontSize = "30px";
// element2.style.color = "white";
// element2.style.backgroundColor = "orange";



// const root =  document.getElementById('root');
// root.append(element1)

// attributes={
//     className:"element",
//     id:"first"
// }
// element={
//     tag:"h1",
//     textContent:"Hellooo",
//     className:"element",
//     id:"first"
// }
// function createElement(tag,attributes,children)
// {
//     const element =    document.createElement(tag);
//     element.textContent = children;
//     for(const key in attributes)
//     {
//         element[key] = attributes[key];
//     }
//     return element
// }
const el1 = React.createElement("h1",{className:"element",id:"first"},"Hello Coder Army");
const el2 = React.createElement("p",{className:"element2",id:"second"},"Bhavya chopra ");

const root = document.getElementById('root');
ReactDOM.render(el1,root);
ReactDOM.render(el2,root);
