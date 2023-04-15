import { ReactNode } from 'react';

const ContentLayout = (props: { children: ReactNode }) => {
    return (
        <div className="tablet:pl-48 laptop:pr-64 px-0">{props.children}</div>
    );
};

export default ContentLayout;
