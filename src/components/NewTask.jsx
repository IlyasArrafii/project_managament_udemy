import { useRef, useState } from 'react';
import Button from './Button.jsx';
import Modal from './Modal.jsx';

export default function NewTask({ onAdd }) {
    const modal = useRef();
    const [enteredTask, setEnteredTask] = useState('');

    function handleChange(event) {
        setEnteredTask(event.target.value);
    }

    function handleClick() {
        if (enteredTask.trim() === '') {
            modal.current.open();
            return;
        }
        onAdd(enteredTask);
        setEnteredTask('');
    }

    return (
        <>
            <Modal ref={modal} buttonCaption="Close">
                <h2 className="my-4 text-xl font-bold text-black">Invalid Input</h2>
                <p className="mb-4 text-black">Oopss... looks like you forgot entered invalid data</p>
                <p className="mb-4 text-black">Please try again!</p>
            </Modal>

            <div className="flex items-center gap-4">
                <input
                    type="text"
                    className="w-72 rounded-sm bg-stone-200 px-4 py-1"
                    onChange={handleChange}
                    value={enteredTask}
                />
                <Button onClick={handleClick}>Add Task</Button>
            </div>
        </>
    );
}
