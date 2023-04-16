import {
    CheckIcon,
    ChevronDownIcon,
    ChevronUpIcon,
} from '@radix-ui/react-icons';
import * as Select from '@radix-ui/react-select';

const Selector = (props: {
    name: string;
    default: string;
    data: { value: string; option: string }[];
    onChange: (value: string) => void;
}) => {
    return (
        <>
            <div className="tablet:block hidden">
                <Select.Root
                    value={props.default}
                    onValueChange={props.onChange}
                >
                    <Select.Trigger className="text-sm leading-none text-base-content p-2 d-s d-s-h">
                        <div className="flex items-center justify-center gap-1">
                            <Select.Value aria-label={props.name}>
                                {props.default.charAt(0).toUpperCase() +
                                    props.default.slice(1)}
                            </Select.Value>
                            <Select.Icon>
                                <ChevronDownIcon />
                            </Select.Icon>
                        </div>
                    </Select.Trigger>
                    <Select.Portal>
                        <Select.Content
                            className="bg-base-100 text-sm rounded d-b"
                            side="bottom"
                        >
                            <Select.ScrollUpButton className="flex items-center justify-center h-6 cursor-default">
                                <ChevronUpIcon />
                            </Select.ScrollUpButton>
                            <Select.Viewport className="p-1">
                                {props.data.map((dataOption, key) => (
                                    <Select.Item
                                        key={key}
                                        value={dataOption.value}
                                        className="flex items-center h-6 px-6 relative select-none cursor-pointer data-[disabled]:text-primary data-[disabled]:bg-primary/50 data-[disabled]:pointer-events-none data-[highlighted]:outline-none data-[highlighted]:bg-primary data-[highlighted]:text-primary-content rounded text-base-content/70"
                                    >
                                        <Select.ItemIndicator className="absolute left-0 w-6 inline-flex items-center justify-center">
                                            <CheckIcon />
                                        </Select.ItemIndicator>
                                        <Select.ItemText className="border border-primary">
                                            {dataOption.option}
                                        </Select.ItemText>
                                    </Select.Item>
                                ))}
                            </Select.Viewport>
                            <Select.ScrollDownButton className="flex items-center justify-center h-6 cursor-default">
                                <ChevronDownIcon />
                            </Select.ScrollDownButton>
                        </Select.Content>
                    </Select.Portal>
                </Select.Root>
            </div>
            <div className="tablet:hidden block">
                <select
                    className="rounded pl-4 text-base-content leading-none text-sm select select-bordered select-sm w-32"
                    onChange={(e) => props.onChange(e.target.value)}
                    value={props.default}
                >
                    {props.data.map((dataOption, key) => {
                        return (
                            <option key={key} value={dataOption.value}>
                                {dataOption.option}
                            </option>
                        );
                    })}
                </select>
            </div>
        </>
    );
};

export default Selector;
