import Input from './Input.jsx';

export default function NewProject() {
    return (
        <div className="w-[35rem] py-8">
            <menu className="my-4 flex items-center justify-end gap-4">
                <li>
                    <button className="hover:bg-gray-6800 rounded-md bg-gray-500 px-6 py-2 text-white">Cancel</button>
                </li>
                <li>
                    <button className="rounded-md bg-blue-500 px-6 py-2 text-white hover:bg-blue-600">Save</button>
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
