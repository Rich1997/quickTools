const Sidebar = () => {
    const themes = [
        { value: 'system', option: 'System' },
        { value: 'light', option: 'Light' },
        { value: 'dark', option: 'Dark' },
        { value: 'neon', option: 'Neon' },
        { value: 'cupcake', option: 'Cupcake' },
    ];

    return (
        <div className="h-full w-64 border-r border-base-content/20 overflow-auto p-6">
            {themes.map((options, key) => (
                <div className="text-base py-2 px-4 rounded hover:bg-primary hover:text-primary-content">
                    {options.option}
                </div>
            ))}
        </div>
    );
};

export default Sidebar;
