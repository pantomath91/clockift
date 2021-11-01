import React,{useState} from 'react';

const ProjectList = (props)=>{
  


  let deleteProject = (event)=> {
    props.project.pop(event.target.value)
    const index = props.project.indexOf(event.target.value);
    if (index > -1) {
        props.project.splice(index, 1);
}
    props.setProject(props.project);
  }
return (
    <table className='table'>
        <tr>
            <th><div>Name</div></th>
            <th><div>Client</div></th>
            <th><div>Tracked</div></th>
            <th><div>Amount</div></th>
        </tr>
        {props.project.map(name=> 
        <>
        <div style={{display:'flex',flexDirection:'row'}}>
        <div><tr>{name}</tr></div>
        <button onClick={(event)=>deleteProject(event)} value={props.inputValue}>Delete Project</button>
        </div>
        </>
        )}
    </table>
)}

export default ProjectList;