import {
    CounterClockwiseClockIcon,
    CubeIcon,
    DashboardIcon,
    StarIcon,
} from '@radix-ui/react-icons';

const BottomNav = () => {
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
        <div className="flex tablet:hidden w-full justify-around p-3 border-t border-base-content/20 overflow-auto">
            {sidebarOptions.map((options, key) => (
                <div
                    key={key}
                    className="flex flex-col items-center justify-center gap-2 text-xs p-3 w-20 rounded hover:bg-base-content/20"
                >
                    <div>{options.icon}</div>
                </div>
            ))}
        </div>
    );
};

export default BottomNav;
