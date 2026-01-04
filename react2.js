// //  const element = <h1 id="title">Helloo</h1>
// //  const root = ReactDOM.createRoot(document.getElementById('root'));
// //  root.render(element);

//  const element2 = (
//   <div> 
//     <h1>Helloo coderss</h1>
//     <h2>kaise ho</h2>
//    </div> 
//  )

//  function App(name)
//  {
//     return (
//         <h1>bye bye {name}</h1>
//     );
//  }
//  const age =10;
//  const el = <h1>hello coder {age > 8 ? "bhavya" : "rahul"} </h1>
//  //const ans = App("bhavya")
//  const root = ReactDOM.createRoot(document.getElementById('root'));
//  root.render(el);

// const courses = ["HTML","CSS","JS","REACT"]
// const el = (
//   <ul>
//     {courses.map(course=><li>{course}</li>)}
//   </ul>
// )
//  const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(el);

function App(props)
{
  return (
    <h1>hello{props.name}{props.age}</h1>
  )
}
const ans = <App name="rahul" age={40}></App>
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(ans);