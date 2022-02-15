import React, { useState } from "react";
import Timer from "./Timer";

export default function Projects() {
  const [projectListState, setProjectList] = useState([]);
  const [projectName, setProjectName] = useState("");

  const addProject = (e) => {
    setProjectName(e.target.value);
  };

  const submitProject = (e) => {
    const projectsList = [...projectListState];
    projectsList.push(projectName);
    setProjectList(projectsList);
  };

  return (
    <>
      <span>Enter your project </span>
      <input type="text" onChange={(e) => addProject(e)}></input>
      <button onClick={(e) => submitProject(e)}>Add Projects</button>
      {projectListState.map((e, idx) => {
        return (
          <>
            <li idx={idx}>{e}</li>
            <Timer />
          </>
        );
      })}
    </>
  );
}
