import React,{useState} from 'react';
import './App.css';
import ProjectList from './components/Project_list';
import Timer from './components/Timer';


function App() {
  const [inputValue, setInputValue]=useState('');
  const [project, setProject]= useState([]);
  
  let addProject = (event)=> {
    console.log('Enter value is',event.target.value);
    project.push(event.target.value)
    setProject(project);
  }

  let enteredInputValue = (value)=>{
   setInputValue(value);
  }

  return (
    <div>
        <div className='topbar'>
          <div style={{marginRight:20}}>FilterIcon</div>
          <div>Clockify</div>
        </div>
        <div style={{display:'flex', flexDirection:'row'}}>
          <div className='navbar'>
            <div style={{ marginBottom: 10}}>PROJECTS</div>
            <div style={{ marginBottom: 10}}>DASHBOARD</div>
            <div style={{ marginBottom: 10}}>REPORTS</div>
          </div>
          <div className='displayContent'>
            <input type='text' placeholder='Enter your project name' onChange={(event)=> enteredInputValue(event.target.value)}/>
            <button onClick={(event)=>addProject(event)} value={inputValue}>New Project</button>
            <ProjectList project={project}inputValue={inputValue} setProject={setProject}/>
            <Timer />
          </div>
        </div>
    </div>
  );
}

export default App;
