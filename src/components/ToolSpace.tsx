import { ReactNode } from 'react';

const ToolSpace = (props: { children: ReactNode }) => {
    return (
        <div className="flex w-full h-full py-[5.5rem] px-6 tracking-tight break-words">
            {props.children}
        </div>
    );
};

export default ToolSpace;
