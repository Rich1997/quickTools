import { ReactNode } from 'react';

interface AnchorProps {
    href: string;
    children: ReactNode;
    hoverColor?: boolean;
}

const Anchor = ({ href, children, hoverColor }: AnchorProps) => {
    return (
        <a
            className={`${hoverColor && 'hover:text-primary'}`}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
        >
            {children}
        </a>
    );
};

export default Anchor;
