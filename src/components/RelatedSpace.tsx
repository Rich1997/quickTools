import { ReactNode } from 'react';

const RelatedSpace = (props: { children: ReactNode }) => {
    return (
        <div className="fixed top-16 bottom-0 right-[max(0px,calc(50%-575px))] w-64 hidden laptop:block h-full w-64 border-l border-base-content/20 bg-base-100 p-6">
            {props.children}
        </div>
    );
};

export default RelatedSpace;
