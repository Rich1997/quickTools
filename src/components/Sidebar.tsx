import {
    CounterClockwiseClockIcon,
    CubeIcon,
    DashboardIcon,
    StarIcon,
} from '@radix-ui/react-icons';

const Sidebar = () => {
    const sidebarOptions = [
        { value: 'dashboard', option: 'Dashboard', icon: <DashboardIcon /> },
        {
            value: 'recents',
            option: 'Recents',
            icon: <CounterClockwiseClockIcon />,
        },
        { value: 'favorites', option: 'Favorites', icon: <StarIcon /> },
        { value: 'tools', option: 'Tools', icon: <CubeIcon /> },
    ];

    return (
        <div className="h-full w-48 border-r border-base-content/20 overflow-auto py-6 px-3">
            {sidebarOptions.map((options, key) => (
                <div
                    key={key}
                    className="flex items-center gap-2 text-sm py-2 px-3 rounded hover:bg-primary hover:text-primary-content"
                >
                    {options.icon} {options.option}
                </div>
            ))}
        </div>
    );
};

export default Sidebar;
