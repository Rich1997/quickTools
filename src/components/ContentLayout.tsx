import { ReactNode } from 'react';

const ContentLayout = (props: { children: ReactNode }) => {
    return (
        <div className="flex w-full h-full max-w-6xl mx-auto">
            {props.children}
        </div>
    );
};

export default ContentLayout;
