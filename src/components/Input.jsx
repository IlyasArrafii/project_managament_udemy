export default function Input({ label, textarea, ...props }) {
    const classes = 'w-full rounded-md border-black bg-stone-200 p-1 text-black';

    return (
        <p className="my-4 flex flex-col gap-1">
            <label className="text-lg font-bold uppercase text-black">{label}</label>
            {textarea ? (
                <textarea className={classes} {...props} />
            ) : (
                <input className={classes} {...props} />
            )}
        </p>
    );
}
