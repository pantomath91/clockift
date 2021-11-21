import React, { useState } from 'react'
import Timer from './Timer';

export default function Projects() {
    const [projectListstate, setProjectList] = useState([])
    const [projectName, setProjectName] = useState('');
    let value = 0;

    const addProject = (event) => {
        console.log(event.target.value);
        setProjectName(event.target.value);
    }

    const submitProject = (e) => {
        const projectsList = [...projectListstate]
        projectsList.push(projectName);
        setProjectList(projectsList);
    }

    return (
        <>
            <span>Enter your project</span>
            <input type="text" onChange={(e) => addProject(e)}></input>
            <button onClick={(e) => submitProject(e)}>Add Projects</button>
            {projectListstate.map((e, idx) => {
                return (<>
                    <li idx={idx}>{e}</li>
                    <Timer value={value} />
                </>)
            })}
        </>
    )
}
