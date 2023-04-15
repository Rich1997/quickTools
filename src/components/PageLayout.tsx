import { ReactNode } from 'react';

const PageLayout = (props: { children: ReactNode }) => {
    return <div className="max-w-6xl mx-auto">{props.children}</div>;
};

export default PageLayout;
