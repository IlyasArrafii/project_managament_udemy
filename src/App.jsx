import { useState } from 'react';
import NewProject from './components/NewProject.jsx';
import NoProjectedSelected from './components/NoProjectedSelected.jsx';
import ProjectsSidebar from './components/ProjectsSidebar.jsx';

function App() {
    const [projectState, setProject] = useState({
        selectedProjectId: undefined,
        projects: [],
    });

    function handleStartAddProject() {
        setProject((prevState) => {
            return {
                ...prevState,
                selectedProjectId: null,
            };
        });
    }

    function handleAddProject(projectData) {
        setProject((prevState) => {
            const projectId = Math.random();
            const newProject = {
                ...projectData,
                id: projectId,
            };

            return {
                ...prevState,
                selectedProjectId: undefined,
                projects: [...prevState.projects, newProject],
            };
        });
    }

    //console.log(projectState);

    let content;

    if (projectState.selectedProjectId === null) {
        content = <NewProject onAdd={handleAddProject} />;
    } else if (projectState.selectedProjectId === undefined) {
        content = <NoProjectedSelected onStartAddProject={handleStartAddProject} />;
    }

    return (
        <main className="flex h-screen gap-8">
            <ProjectsSidebar onStartAddProject={handleStartAddProject} projects={projectState.projects} />
            {content}
        </main>
    );
}

export default App;
