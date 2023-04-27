import { ReactNode } from 'react';

const ActionButton = (props: {
    children: ReactNode;
    action: string;
    clickHandler: () => void;
}) => {
    return (
        <div className="flex justify-center">
            <button
                className="tablet:tooltip pt-1"
                data-tip={props.action}
                onClick={props.clickHandler}
            >
                <div className="p-4 rounded-full bg-accent text-accent-content transform active:scale-75 transition-transform cursor-pointer rotate-90 tablet:rotate-0">
                    {props.children}
                </div>
            </button>
        </div>
    );
};

export default ActionButton;
