import { useRef } from 'react';
import Input from './Input.jsx';
import Modal from './Modal.jsx';

export default function NewProject({ onAdd, onCancel }) {
    //Handle Modal
    const modal = useRef();

    const title = useRef();
    const description = useRef();
    const dueDate = useRef();

    function handleSave() {
        const enteredTitle = title.current.value;
        const enteredDescription = description.current.value;
        const enteredDueDate = dueDate.current.value;

        // Validation
        if (
            enteredTitle.trim() === '' ||
            enteredDescription.trim() === '' ||
            enteredDueDate.trim() === ''
        ) {
            modal.current.open();
            return;
        }

        onAdd({
            title: enteredTitle,
            description: enteredDescription,
            dueDate: enteredDueDate,
        });
    }

    return (
        <>
            <Modal ref={modal} buttonCaption="Close">
                <h2 className="my-4 text-xl font-bold text-black">Invalid Input</h2>
                <p className="mb-4 text-black">Oopss... looks like you forgot entered invalid data</p>
                <p className="mb-4 text-black">Please try again!</p>
            </Modal>
            <div className="w-[35rem] py-8">
                <menu className="my-4 flex items-center justify-end gap-4">
                    <li>
                        <button className="hover:bg-gray-6800 rounded-md bg-gray-500 px-6 py-2 text-white" onClick={onCancel}>
                            Cancel
                        </button>
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
        </>
    );
}
