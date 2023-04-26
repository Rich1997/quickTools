export const themes = [
    { value: 'system', option: 'System' },
    { value: 'light', option: 'Light' },
    { value: 'dark', option: 'Dark' },
    { value: 'neon', option: 'Neon' },
    { value: 'cupcake', option: 'Cupcake' },
    { value: 'bumblebee', option: 'Bumblebee' },
    { value: 'emerald', option: 'Emerald' },
    { value: 'corporate', option: 'Corporate' },
    { value: 'synthwave', option: 'Synthwave' },
    { value: 'retro', option: 'Retro' },
    { value: 'cyberpunk', option: 'Cyberpunk' },
    { value: 'valentine', option: 'Valentine' },
    { value: 'halloween', option: 'Halloween' },
    { value: 'garden', option: 'Garden' },
    { value: 'aqua', option: 'Aqua' },
    { value: 'lofi', option: 'Lofi' },
    { value: 'pastel', option: 'Pastel' },
    { value: 'fantasy', option: 'Fantasy' },
    { value: 'wireframe', option: 'Wireframe' },
    { value: 'black', option: 'Black' },
    { value: 'dracula', option: 'Dracula' },
    { value: 'cmyk', option: 'Cmyk' },
    { value: 'autumn', option: 'Autumn' },
    { value: 'business', option: 'Business' },
    { value: 'acid', option: 'Acid' },
    { value: 'lemonade', option: 'Lemonade' },
    { value: 'night', option: 'Night' },
    { value: 'coffee', option: 'Coffee' },
    { value: 'winter', option: 'Winter' },
];

interface Lengths {
    [key: string]: {
        factor: number;
    };
}

export const lengths: Lengths = {
    Meters: { factor: 1 },
    Kilometers: { factor: 1000 },
    Centimeters: { factor: 0.01 },
    Millimeters: { factor: 0.001 },
    Micrometers: { factor: 0.000001 },
    Nanometers: { factor: 0.000000001 },
    Miles: { factor: 1609.344 },
    Yards: { factor: 0.9144 },
    Feet: { factor: 0.3048 },
    Inches: { factor: 0.0254 },
    'Nautical miles': { factor: 1852 },
};
