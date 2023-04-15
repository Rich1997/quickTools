import { ReactNode } from 'react';

const ToolSpace = (props: { children: ReactNode }) => {
    return <div className="tracking-tight break-words">{props.children}</div>;
};

export default ToolSpace;
