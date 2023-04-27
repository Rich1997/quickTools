import { useState } from 'react';
import { TbRefresh } from 'react-icons/tb';
import ActionButton from '../components/ActionButton';
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

    const factor = (
        lengths[firstUnit].factor / lengths[secondUnit].factor
    ).toString();

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
            <div className="text-lg font-bold tracking-tight pb-8">
                Length Converter
            </div>
            <div className="laptop:p-12 px-6 py-12 bg-base-200 rounded-lg text-base-content">
                <div className="flex tablet:items-center justify-between gap-6 tablet:flex-row flex-col w-full pb-8">
                    <div className="flex flex-col">
                        <Selector
                            name="From"
                            default={firstUnit}
                            data={lengths}
                            onChange={handleFirstUnitChange}
                        />
                        <input
                            type="number"
                            className="w-full rounded-none rounded-b-md p-4 text-base-content text-sm focus:shadow-[0_0_0_2px] focus:shadow-base-content focus:relative outline-none bg-base-100 border-x border-y border-base-content/20"
                            placeholder="0"
                            value={firstValue}
                            onChange={(e) =>
                                handleFirstInputChange(e.target.value)
                            }
                        />
                    </div>
                    <ActionButton
                        action="Reset"
                        clickHandler={() => {
                            setFirstValue('');
                            setSecondValue('');
                        }}
                    >
                        <TbRefresh strokeWidth={3} />
                    </ActionButton>
                    <div className="flex flex-col">
                        <Selector
                            name="To"
                            default={secondUnit}
                            data={lengths}
                            onChange={handleSecondUnitChange}
                        />
                        <input
                            type="number"
                            className="w-full rounded-none rounded-b-md p-4 text-base-content text-sm focus:shadow-[0_0_0_2px] focus:shadow-base-content focus:relative outline-none bg-base-100 border-x border-y border-base-content/20"
                            placeholder="0"
                            value={secondValue}
                            onChange={(e) =>
                                handleSecondInputChange(e.target.value)
                            }
                        />
                    </div>
                </div>
                {Number(firstValue) && Number(secondValue) !== 0 ? (
                    <>
                        <div className="flex gap-4 text-sm items-center pb-4">
                            <div className="px-2 py-0.5 bg-success text-success-content rounded-md">
                                Result
                            </div>
                            <div className="break-all">
                                {firstValue + ' ' + firstUnit} ={' '}
                                {secondValue + ' ' + secondUnit}
                            </div>
                        </div>
                    </>
                ) : (
                    ''
                )}
                <div className="flex gap-4 text-sm items-center">
                    <div className="px-2 py-0.5 bg-accent text-accent-content rounded-md">
                        Formula
                    </div>
                    <div className="break-all">
                        multiply the length value by {Number(factor)}
                    </div>
                </div>
            </div>
        </>
    );
};

export default LengthConverter;
