import { createContext, useContext } from "react";
import { useState } from "react";

const projectContext = createContext({
  SelectedProjectId: undefined,
  projects: [],
  tasks: []
})


export default function ProjectContextProvider({ children }) {

  let initialState = JSON.parse(localStorage.getItem('projects'))
  console.log(initialState)
  
  if (!initialState) {
    initialState = {
      SelectedProjectId: undefined,
      projects: [],
      tasks: []
    }
  }

  const [projectState, setProjectState] = useState(initialState)

  localStorage.setItem('projects', JSON.stringify(projectState))

  function CreateProject(title, desc) {
    setProjectState((prev) => {
      let id = Math.random();
      return {
        ...prev,
        SelectedProjectId: id,
        projects: [
          ...prev.projects,
          {
            id: id,
            title: title,
            desc: desc,
          },
        ],
      };
    });
  }

  function SelectProject(id) {
    setProjectState(prev => {
      return {
        ...prev,
        SelectedProjectId: id,
      }
    })
  }

  return <projectContext.Provider value={{
    projectState,
    CreateProject,
    SelectProject,
    setProjectState
  }}>
    {children}
    </projectContext.Provider>
}

export const useProjects = () => {
  return useContext(projectContext)
}
