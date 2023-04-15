import { ReactNode } from 'react';

const ToolSpace = (props: { children: ReactNode }) => {
    return (
        <div className="tracking-tight w-full p-6 max-w-2xl break-words">
            {props.children}
        </div>
    );
};

export default ToolSpace;
