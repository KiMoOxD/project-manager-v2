import SideBar from "./components/SideBar";
import Loader from "./components/Loader";
import Content from "./components/Content";
import ProjectContextProvider from "./context/ProjectContextProvider";

function App() {
  return (
     <ProjectContextProvider>
      <Loader />
        <div className="flex">
          <SideBar  />
          <Content />
       </div>
    </ProjectContextProvider>
  );
}

export default App;
