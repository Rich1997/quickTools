import { useState } from 'react';
import { TbArrowsShuffle2 } from 'react-icons/tb';
import Selector from '../components/Selector';
import { lengths } from '../utils/Constants';

const LengthConverter = () => {
    const [firstUnit, setFirstUnit] = useState('Feet');
    const [secondUnit, setSecondUnit] = useState('Inches');
    const [firstValue, setFirstValue] = useState(0);
    const [secondValue, setSecondValue] = useState(0);
    return (
        <>
            <div className="text-lg font-bold pb-8">Length Converter</div>
            <div className="flex tablet:items-center justify-between gap-6 tablet:flex-row flex-col w-full">
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
                        className="w-full rounded-none rounded-b-md bg-base-100 p-4 focus:shadow-[0_0_0_2px] focus:shadow-bg-content outline-none bg-base-content/20 d-b"
                        onChange={(e) => setFirstValue(Number(e.target.value))}
                    />
                    {firstValue}
                </div>
                <div className="flex justify-center">
                    <div className="p-4 rounded-full bg-accent text-accent-content">
                        <TbArrowsShuffle2 strokeWidth={2} />
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
                        className="w-full rounded-none rounded-b-md bg-base-100 p-4 focus:shadow-[0_0_0_2px] focus:shadow-bg-content outline-none bg-base-content/20 d-b"
                        onChange={(e) => setSecondValue(Number(e.target.value))}
                    />
                    {secondValue}
                </div>
            </div>
        </>
    );
};

export default LengthConverter;
