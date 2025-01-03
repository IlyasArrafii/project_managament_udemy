import { useState } from 'react';
import NewProject from './components/NewProject.jsx';
import NoProjectedSelected from './components/NoProjectedSelected.jsx';
import ProjectsSidebar from './components/ProjectsSidebar.jsx';
import SelectedProject from './components/SelectedProject.jsx';

function App() {
    const [projectState, setProject] = useState({
        selectedProjectId: undefined,
        projects: [],
        tasks: [],
    });

    //handle add task
    function handleAddTask(text) {
        setProject((prevState) => {
            const taskId = Math.random();
            const newTask = {
                text: text,
                projectId: prevState.selectedProjectId,
                id: taskId,
            };

            return {
                ...prevState,
                tasks: [...prevState.tasks, newTask],
            };
        });
    }

    //handle delete data task
    function handleDeleteTask(id) {
        setProject((prevState) => {
            return {
                ...prevState,
                tasks: prevState.tasks.filter((task) => task.id !== id),
            };
        });
    }

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

    //handle delete project
    function handleDeleteProject() {
        setProject((prevState) => {
            return {
                ...prevState,
                selectedProjectId: undefined,
                projects: prevState.projects.filter((project) => project.id !== projectState.selectedProjectId),
            };
        });
    }

    const selectedProject = projectState.projects.find((project) => project.id === projectState.selectedProjectId);

    //console.log(selectedProject);

    let content = (
        <SelectedProject
            project={selectedProject}
            onDelete={handleDeleteProject}
            onAddTask={handleAddTask}
            onDeleteTask={handleDeleteTask}
            tasks={projectState.tasks}
        />
    );

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
                selectedProjectId={projectState.selectedProjectId}
            />
            {content}
        </main>
    );
}

export default App;
