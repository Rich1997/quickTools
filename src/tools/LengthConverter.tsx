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
                <div className="flex flex-col">
                    <Selector
                        name="length converter"
                        default={firstUnit}
                        data={lengths}
                        onChange={(value: string) => setFirstUnit(value)}
                    />
                    <input
                        type="number"
                        placeholder="0"
                        className="w-full rounded-b bg-base-200 p-4 -mt-1 border-x border-b border-base-content/20"
                    />
                </div>
                <div className="flex justify-center">
                    <ShuffleIcon />
                </div>
                <div className="flex flex-col">
                    <Selector
                        name="length converter"
                        default={secondUnit}
                        data={lengths}
                        onChange={(value: string) => setSecondUnit(value)}
                    />
                    <input
                        type="number"
                        placeholder="0"
                        className="w-full rounded-b bg-base-200 p-4 -mt-1 border-x border-b border-base-content/20"
                    />
                </div>
            </div>
        </>
    );
};

export default LengthConverter;
