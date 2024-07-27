import { useProjects } from "../context/ProjectContextProvider";
import NewProject from '../components/NewProject.jsx'
import NoProject from '../components/NoProject.jsx'
import ProjectDetails from '../components/ProjectDetails.jsx'

export default function Content() {
  let { projectState } = useProjects()
  let content;

  if (projectState.SelectedProjectId === undefined) {
    content = <NoProject />;
  } else if (projectState.SelectedProjectId === null) {
    content = <NewProject/>
  } else {
    content = <ProjectDetails/>
  }


  return content;
}
