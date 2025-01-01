import { useState } from 'react';
import NewProject from './components/NewProject.jsx';
import NoProjectedSelected from './components/NoProjectedSelected.jsx';
import ProjectsSidebar from './components/ProjectsSidebar.jsx';
import SelectedProject from './components/SelectedProject.jsx';

function App() {
    const [projectState, setProject] = useState({
        selectedProjectId: undefined,
        projects: [],
    });

    //Handle Select project by id
    function handleSelectProject(id) {
        setProject((prevState) => {
            return {
                ...prevState,
                selectedProjectId: id,
            };
        });
    }

    function handleStartAddProject() {
        setProject((prevState) => {
            return {
                ...prevState,
                selectedProjectId: null,
            };
        });
    }

    function handleCancelAddProject() {
        setProject((prevState) => {
            return {
                ...prevState,
                selectedProjectId: undefined,
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

    const selectedProject = projectState.projects.find((project) => project.id === projectState.selectedProjectId);

    console.log(selectedProject);

    let content = <SelectedProject project={selectedProject} />;

    if (projectState.selectedProjectId === null) {
        content = <NewProject onAdd={handleAddProject} onCancel={handleCancelAddProject} />;
    } else if (projectState.selectedProjectId === undefined) {
        content = <NoProjectedSelected onStartAddProject={handleStartAddProject} />;
    }

    return (
        <main className="flex h-screen gap-8">
            <ProjectsSidebar
                onStartAddProject={handleStartAddProject}
                projects={projectState.projects}
                onSelectProject={handleSelectProject}
            />
            {content}
        </main>
    );
}

export default App;
