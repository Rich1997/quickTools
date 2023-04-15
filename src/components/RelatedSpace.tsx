import { ReactNode } from 'react';

const RelatedSpace = (props: { children: ReactNode }) => {
    return (
        <div className="hidden laptop:block h-full min-w-[200px] w-54 border-l border-base-content/20 overflow-auto p-6">
            {props.children}
        </div>
    );
};

export default RelatedSpace;
