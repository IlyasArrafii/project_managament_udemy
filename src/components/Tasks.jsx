import Button from './Button.jsx';
import NewTask from './NewTask.jsx';

export default function Tasks({ tasks, onAdd, onDelete }) {
    return (
        <section>
            <h2 className="mb-4 text-2xl font-bold text-black">TASKS</h2>
            <NewTask onAdd={onAdd} />
            {tasks.length === 0 && <p className="my-4 text-black">This project doesnt have tasks</p>}
            {tasks.length > 0 && (
                <ul className="mt-8 rounded-md bg-stone-100 p-4">
                    {tasks.map((task) => (
                        <li key={task.id} className="my-4 flex justify-between">
                            <span>{task.text}</span>
                            <Button className="px-4 py-2 hover:bg-red-600 rounded-md hover:text-white bg-gray-500" onClick={() => onDelete(task.id)}>
                                Clear
                            </Button>
                        </li>
                    ))}
                </ul>
            )}
        </section>
    );
}
