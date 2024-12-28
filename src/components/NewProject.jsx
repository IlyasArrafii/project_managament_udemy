import { useRef } from 'react';
import Input from './Input.jsx';

export default function NewProject({ onAdd }) {
    const title = useRef();
    const description = useRef();
    const dueDate = useRef();

    function handleSave() {
        const enteredTitle = title.current.value;
        const enteredDescription = description.current.value;
        const enteredDueDate = dueDate.current.value;

        // Validation

        onAdd({
            title: enteredTitle,
            description: enteredDescription,
            dueDate: enteredDueDate,
        });
    }

    return (
        <div className="w-[35rem] py-8">
            <menu className="my-4 flex items-center justify-end gap-4">
                <li>
                    <button className="hover:bg-gray-6800 rounded-md bg-gray-500 px-6 py-2 text-white">Cancel</button>
                </li>
                <li>
                    <button
                        className="rounded-md bg-blue-500 px-6 py-2 text-white hover:bg-blue-600"
                        onClick={handleSave}
                    >
                        Save
                    </button>
                </li>
            </menu>
            <div>
                <Input type="text" ref={title} label="Title" />
                <Input ref={description} label="Description" textarea />
                <Input type="date" ref={dueDate} label="Due Date" />
            </div>
        </div>
    );
}
