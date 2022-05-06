import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Todo from './Todo';

function App() {
const[initial,final]=useState();
const[ini,fin]=useState([]);
const Input=(event)=>{
final(event.target.value);
}
const Output=()=>{
  fin( (a)=>{
   return[...a,initial]; 
  });
  final("");
}
const deleteitem=(id)=>{
   fin((a)=>{
     console.log("this is a",a);
     return a.filter((b,index)=>{
      return index!==id;
     })
   })
 }
  return (
    <div className="App">
     <div className="todo">
      <div className="main">
        <h1 className="adi">GOAL KEEPER</h1>
        {/* <h1><CancelIcon/></h1> */}
        <br/>
        <br/>
        <input type="text" placeholder="enter the goal" onChange={Input} value={initial}></input>
        <button onClick={Output}>+</button>
        <ul>
         { ini.map((v,index)=> {
            {/* return  <li>{v}</li> */}
            return <Todo  key={index} id={index} text= {v} onSelect={deleteitem} /> 
          })}
          {/* onSelect={deleteitem} */}
        </ul>
      </div>
     </div>
    </div>
  );
}

export default App;
