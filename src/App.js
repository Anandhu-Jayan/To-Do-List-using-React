
import './App.css';
import {Taskrender } from './Task';
import { useState } from 'react';

// function App() {
//   const planets=[
//     {name:"Mars",isGas:false},
//     {name:"Earth",isGas:false},
//     {name:"Jupiter",isGas:true},
//     {name:"Venus",isGas:false},
//     {name:"Neptune",isGas:true},
//     {name:"Uranus",isGas:true},
//   ];
//   const [count,setcount]=useState(0);
//   return (
//     <div className="App">
//       {/* {
//         planets.map((planet)=>{
//           return (planet.isGas===true) && <Planetrender  name={planet.name}/>
//         })
//       } */}
//         <button onClick={()=>setcount(count+1)}>Increase</button>
//         <button onClick={()=>setcount(count-1)}>Decrease</button>
//         <button onClick={()=>setcount(0)}>Set to zero</button>
//         <p>{count}</p>
//     </div>
//   );
// }
// // const Jobcomponenet=(props)=>{
// //   return (
// //     <div>
// //       <h2>{props.salary}</h2>
// //       <h2>{props.postion}</h2>
// //       <h2>{props.company}</h2>

// //     </div>
// //   );
// // }

function App(){
  const [notes,setNotes]=useState([]);
  const [newnote,setNewnote]=useState("");
  const updateInput=(e)=>{
    setNewnote(e.target.value)
  }
  const updateNotes=()=>{
    const newtask={
      id:(notes.length===0)?1:notes.length+1,
      task:newnote,
      completed:false
    }
    setNotes(
     [...notes,newtask]
     
    )
  }
  const deleteNotes=(id)=>{
    setNotes(notes.filter((note)=>
      (note.id!==id) && (note)
    ))
  }
  const markCompleted=(id)=>{
    setNotes(notes.map((note)=>
      {
        if(note.id===id)
        {
            note.completed=!note.completed;
            return note
        }
        else 
          return note;
      }
    ))
  }
  return(

    <div className='App'>
      <div className='inputArea'>
        <input id='inputBox' placeholder="Eg Buy groceries" onChange={updateInput}></input>
        <button class="buttonGrpAdd" onClick={updateNotes}>Add</button>
      </div>
      <div className='viewArea'>
        <h1>Your Task</h1>
        {notes.map((note)=><Taskrender completed={note.completed} markCompleted={markCompleted} task={note.task} id={note.id} deleteNotes={deleteNotes}/>
        )}
      </div>
    </div>
  );
}


export default App;
