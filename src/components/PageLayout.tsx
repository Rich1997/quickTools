import { ReactNode } from 'react';

const PageLayout = (props: { children: ReactNode }) => {
    return (
        <div className="flex flex-col w-full h-full flex">{props.children}</div>
    );
};

export default PageLayout;
