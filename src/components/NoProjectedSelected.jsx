import noProjectImage from '../assets/no-projects.png';
import Button from './Button.jsx';

export default function NoProjectedSelected({ onStartAddProject }) {
    return (
        <div className="mt-24 w-2/3 justify-center text-center">
            <img src={noProjectImage} alt="Empty List" className="mx-auto w-16 object-contain" />
            <h2 className="my-4 text-xl font-bold text-black">No Project Selected</h2>
            <p className="mb-4 text-black">Select project or get started with a new one</p>
            <p>
                <Button onClick={onStartAddProject}>Create New Project</Button>
            </p>
        </div>
    );
}
