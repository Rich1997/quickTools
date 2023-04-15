import Selector from '../components/Selector';
import { themes } from '../utils/Constants';

const LengthConverter = () => {
    return (
        <>
            <div className="text-lg font-bold pb-4">Length Converter</div>
            <Selector name="length converter" default="system" data={themes} />
        </>
    );
};

export default LengthConverter;
