
export const Taskrender=(props)=>{
    return(
    <div  key={props.id}>
            <h2 class="taskText" style={{color:props.completed && "#90EE90",fontWeight:300}}>{props.task}</h2>
            <button className="buttonGrp" onClick={()=>props.deleteNotes(props.id)}>X</button>
            <button className="buttonGrp" onClick={()=>props.markCompleted(props.id)}>Completed</button>
            
    </div>
    );
}