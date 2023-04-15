import { ReactNode } from 'react';

const ToolSpace = (props: { children: ReactNode }) => {
    return (
        <div className="w-full h-full py-[5.5rem] px-6 tracking-tight break-words selection:bg-secondary selection:text-secondary-content">
            {props.children}
        </div>
    );
};

export default ToolSpace;
