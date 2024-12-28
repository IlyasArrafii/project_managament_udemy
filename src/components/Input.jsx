import { forwardRef } from 'react';

const Input = forwardRef(function Input({ label, textarea, ...props }, ref) {
    const classes = 'w-full rounded-md border-black bg-stone-200 p-1 text-black';

    return (
        <p className="my-4 flex flex-col gap-1">
            <label className="text-lg font-bold uppercase text-black">{label}</label>
            {textarea ? (
                <textarea ref={ref} className={classes} {...props} />
            ) : (
                <input ref={ref} className={classes} {...props} />
            )}
        </p>
    );
});

export default Input;
