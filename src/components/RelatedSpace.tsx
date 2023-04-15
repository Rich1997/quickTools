import { ReactNode } from 'react';

const RelatedSpace = (props: { children: ReactNode }) => {
    return (
        <div className="fixed top-16 bottom-0 right-[max(0px,calc(50%-568px))] w-64">
            <div className="hidden laptop:block h-full min-w-[200px] w-64 border-l border-base-content/20 overflow-auto bg-base-100 p-6">
                {props.children}
            </div>
        </div>
    );
};

export default RelatedSpace;
