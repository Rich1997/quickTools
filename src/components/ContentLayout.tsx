import { ReactNode } from 'react';

const ContentLayout = (props: { children: ReactNode }) => {
    return (
        <div className="tablet:pl-52 laptop:pr-64 px-0 overflow-hidden">
            {props.children}
        </div>
    );
};

export default ContentLayout;
