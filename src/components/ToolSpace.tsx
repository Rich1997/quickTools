import { ReactNode } from 'react';

const ToolSpace = (props: { children: ReactNode }) => {
    return (
        <div className="w-full h-full min-h-screen tablet:py-[7rem] py-[5.5rem] tablet:pl-9 px-6 break-words selection:bg-secondary selection:text-secondary-content bg-base-100">
            {props.children}
        </div>
    );
};

export default ToolSpace;
