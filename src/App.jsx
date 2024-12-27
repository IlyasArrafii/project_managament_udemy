import { useState } from 'react';
import NewProject from './components/NewProject.jsx';
import NoProjectedSelected from './components/NoProjectedSelected.jsx';
import ProjectsSidebar from './components/ProjectsSidebar.jsx';

function App() {
    const [project, setProject] = useState({
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

    let content;

    if (project.selectedProjectId === null) {
        content = <NewProject />;
    } else if (project.selectedProjectId === undefined) {
        content = <NoProjectedSelected onStartAddProject={handleStartAddProject} />;
    }
    
    return (
        <main className="flex h-screen gap-8">
            <ProjectsSidebar onStartAddProject={handleStartAddProject} />
            {content}
        </main>
    );
}

export default App;
