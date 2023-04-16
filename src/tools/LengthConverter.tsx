import { useState } from 'react';
import Selector from '../components/Selector';
import { themes } from '../utils/Constants';

const LengthConverter = () => {
    const [selectedValue, setSelectedValue] = useState('inches');
    const handleSelectorChange = (value: string) => {
        setSelectedValue(value);
    };
    return (
        <>
            <div className="text-lg font-bold pb-4">Length Converter</div>
            <Selector
                name="length converter"
                default={selectedValue}
                data={themes}
                onChange={handleSelectorChange}
            />
            {selectedValue}
        </>
    );
};

export default LengthConverter;
