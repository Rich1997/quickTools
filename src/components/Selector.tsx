import { MdCheck } from 'react-icons/md';
import { RxChevronDown, RxChevronUp } from 'react-icons/rx';
import * as Select from '@radix-ui/react-select';

const Selector = (props: {
    name: string;
    default: string;
    data: {
        [unit: string]: {
            factor: number;
        };
    };
    onChange: (value: string) => void;
}) => {
    const lengthOptions = Object.entries(props.data).map(([unit]) => (
        <Select.Item
            key={unit}
            value={unit}
            className="flex items-center h-6 px-6 select-none cursor-pointer data-[disabled]:text-primary data-[disabled]:bg-primary/50 data-[disabled]:pointer-events-none data-[highlighted]:outline-none data-[highlighted]:bg-primary data-[highlighted]:text-primary-content rounded text-base-content/70"
        >
            <Select.ItemIndicator className="absolute left-0 w-6 inline-flex items-center justify-center">
                <MdCheck size={16} />
            </Select.ItemIndicator>
            <Select.ItemText className="border border-primary">
                {unit}
            </Select.ItemText>
        </Select.Item>
    ));
    const lengthOptionsMobile = Object.entries(props.data).map(([unit]) => (
        <option key={unit} value={unit}>
            {unit}
        </option>
    ));
    return (
        <>
            <div className="tablet:block hidden select-none">
                <Select.Root
                    value={props.default}
                    onValueChange={props.onChange}
                >
                    <Select.Trigger className="-mb-px relative text-sm w-full leading-none text-base-content px-4 py-2 bg-base-100 rounded-t-md focus:shadow-[0_0_0_2px] focus:shadow-base-content outline-none d-b d-s-h">
                        <div className="flex items-center justify-between gap-1">
                            <Select.Value aria-label={props.name}>
                                {props.default.charAt(0).toUpperCase() +
                                    props.default.slice(1)}
                            </Select.Value>
                            <Select.Icon>
                                <RxChevronDown size={16} />
                            </Select.Icon>
                        </div>
                    </Select.Trigger>
                    <Select.Portal>
                        <Select.Content
                            className="bg-base-100 text-sm rounded-md d-b"
                            side="bottom"
                        >
                            <Select.ScrollUpButton className="flex items-center justify-center h-6 cursor-default">
                                <RxChevronUp size={16} />
                            </Select.ScrollUpButton>
                            <Select.Viewport className="p-1">
                                {lengthOptions}
                            </Select.Viewport>
                            <Select.ScrollDownButton className="flex items-center justify-center h-6 cursor-default">
                                <RxChevronDown size={16} />
                            </Select.ScrollDownButton>
                        </Select.Content>
                    </Select.Portal>
                </Select.Root>
            </div>
            <div className="tablet:hidden block">
                <select
                    className="-mb-px rounded-t-md rounded-b-none pl-4 w-full text-base-content leading-none text-sm select select-bordered"
                    onChange={(e) => props.onChange(e.target.value)}
                    value={props.default}
                >
                    {lengthOptionsMobile}
                </select>
            </div>
        </>
    );
};

export default Selector;
