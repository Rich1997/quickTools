import { ReactNode } from 'react';

const RelatedSpace = (props: { children: ReactNode }) => {
    return (
        <div className="fixed top-16 bottom-0 right-[max(0px,calc(50%-640px))] w-64 hidden laptop:block w-64 bg-base-100 px-6 py-12">
            {props.children}
        </div>
    );
};

export default RelatedSpace;
