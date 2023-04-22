import { ReactNode } from 'react';

const ToolSpace = (props: { children: ReactNode }) => {
    return (
        <div className="w-full h-full min-h-screen py-[7rem] px-6 break-words selection:bg-secondary selection:text-secondary-content bg-base-100">
            {props.children}
        </div>
    );
};

export default ToolSpace;
