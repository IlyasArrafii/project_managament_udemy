import Input from './Input.jsx';

export default function NewProject() {
    return (
        <div className='py-8'>
            <menu>
                <li>
                    <button>Cancel</button>
                </li>
                <li>
                    <button>Save</button>
                </li>
            </menu>
            <div>
                <Input label="Title" />
                <Input label="Description" textarea />
                <Input label="Due Date" />
            </div>
        </div>
    );
}
