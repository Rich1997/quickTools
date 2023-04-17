import { ShuffleIcon } from '@radix-ui/react-icons';
import { useState } from 'react';
import Selector from '../components/Selector';
import { lengths } from '../utils/Constants';

const LengthConverter = () => {
    const [firstUnit, setFirstUnit] = useState('Inches');
    const [secondUnit, setSecondUnit] = useState('Feet');
    return (
        <>
            <div className="text-lg font-bold pb-8">Length Converter</div>
            <div className="flex tablet:items-center gap-6 tablet:flex-row flex-col w-full">
                <div className="flex flex-col gap-2">
                    <Selector
                        name="length converter"
                        default={firstUnit}
                        data={lengths}
                        onChange={(value: string) => setFirstUnit(value)}
                    />
                    <input
                        type="number"
                        placeholder="0"
                        className="w-full rounded-none rounded-b bg-base-100 p-4 focus:shadow-[0_0_0_2px] focus:shadow-bg-content outline-none d-b"
                    />
                </div>
                <div className="flex justify-center">
                    <div className="p-4 rounded-full bg-accent text-accent-content">
                        <ShuffleIcon />
                    </div>
                </div>
                <div className="flex flex-col gap-2">
                    <Selector
                        name="length converter"
                        default={secondUnit}
                        data={lengths}
                        onChange={(value: string) => setSecondUnit(value)}
                    />
                    <input
                        type="number"
                        placeholder="0"
                        className="w-full rounded-none rounded-b bg-base-100 p-4 focus:shadow-[0_0_0_2px] focus:shadow-bg-content outline-none d-b"
                    />
                </div>
            </div>
        </>
    );
};

export default LengthConverter;
