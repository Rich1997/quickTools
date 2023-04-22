import { useState } from 'react';
import { TbArrowsRightLeft } from 'react-icons/tb';
import Selector from '../components/Selector';
import { lengths } from '../utils/Constants';

const LengthConverter = () => {
    const [firstValue, setFirstValue] = useState<string>('');
    const [secondValue, setSecondValue] = useState<string>('');
    const [firstUnit, setFirstUnit] = useState<string>('Feet');
    const [secondUnit, setSecondUnit] = useState<string>('Inches');

    const calculateLength = (
        value: number,
        fromUnit: string,
        toUnit: string
    ): number => {
        const fromFactor = lengths[fromUnit].factor;
        const toFactor = lengths[toUnit].factor;
        return (value * fromFactor) / toFactor;
    };

    const handleFirstInputChange = (value: string): void => {
        setFirstValue(value);
        setSecondValue(
            calculateLength(Number(value), firstUnit, secondUnit).toString()
        );
    };

    const handleSecondInputChange = (value: string): void => {
        setSecondValue(value);
        setFirstValue(
            calculateLength(Number(value), secondUnit, firstUnit).toString()
        );
    };

    const handleFirstUnitChange = (value: string): void => {
        setFirstUnit(value);
        setSecondValue(
            calculateLength(Number(firstValue), value, secondUnit).toString()
        );
    };

    const handleSecondUnitChange = (value: string): void => {
        setSecondUnit(value);
        setFirstValue(
            calculateLength(Number(secondValue), value, firstUnit).toString()
        );
    };

    return (
        <>
            <div className="text-lg font-bold pb-8">Length Converter</div>
            <div className="flex tablet:items-center justify-between gap-6 tablet:flex-row flex-col w-full">
                <div className="flex flex-col gap-2">
                    <Selector
                        name="From"
                        default={firstUnit}
                        data={lengths}
                        onChange={handleFirstUnitChange}
                    />
                    <input
                        type="number"
                        className="w-full rounded-none rounded-b-md bg-base-100 p-4 focus:shadow-[0_0_0_2px] focus:shadow-bg-content outline-none bg-base-content/20 d-b"
                        placeholder="0"
                        value={firstValue}
                        onChange={(e) => handleFirstInputChange(e.target.value)}
                    />
                </div>
                <div className="flex justify-center">
                    <div
                        className="tablet:tooltip tablet:tooltip-primary pt-1"
                        data-tip="Reset"
                    >
                        <div
                            className="p-4 rounded-full bg-accent text-accent-content transform active:scale-75 transition-transform cursor-pointer rotate-90 tablet:rotate-0"
                            onClick={() => {
                                setFirstValue('');
                                setSecondValue('');
                            }}
                        >
                            <TbArrowsRightLeft strokeWidth={3} />
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-2">
                    <Selector
                        name="To"
                        default={secondUnit}
                        data={lengths}
                        onChange={handleSecondUnitChange}
                    />
                    <input
                        type="number"
                        className="w-full rounded-none rounded-b-md bg-base-100 p-4 focus:shadow-[0_0_0_2px] focus:shadow-bg-content outline-none bg-base-content/20 d-b"
                        placeholder="0"
                        value={secondValue}
                        onChange={(e) =>
                            handleSecondInputChange(e.target.value)
                        }
                    />
                </div>
            </div>
        </>
    );
};

export default LengthConverter;
