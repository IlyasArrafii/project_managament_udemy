import Button from './Button.jsx';
import Tasks from './Tasks.jsx';

export default function SelectedProject({ project, onDelete, onAddTask, onDeleteTask, tasks }) {
    const formatDate = new Date(project.dueDate).toLocaleDateString('id-ID', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });

    return (
        <div className="mt-16 w-[35rem]">
            <header className="mb-4 border-b-2 border-stone-300 pb-4">
                <div className="flex items-center justify-between">
                    <h1 className="mb-2 text-2xl font-bold text-black">{project.title}</h1>
                    <Button className="rounded-md bg-red-500 px-4 py-2 hover:bg-red-600 text-white" onClick={onDelete}>Delete</Button>
                </div>
                <p className="mb-4 text-black">{formatDate}</p>
                <p className="whitespace-pre-wrap text-black">{project.description}</p>
            </header>
            <Tasks onAdd={onAddTask} onDelete={onDeleteTask} tasks={tasks}/>
        </div>
    );
}
