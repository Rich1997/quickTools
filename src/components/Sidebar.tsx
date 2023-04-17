import {
    CounterClockwiseClockIcon,
    CubeIcon,
    DashboardIcon,
    StarIcon,
} from '@radix-ui/react-icons';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
    const sidebarOptions = [
        {
            value: 'dashboard',
            option: 'Dashboard',
            icon: <DashboardIcon />,
            path: '/',
        },
        {
            value: 'recents',
            option: 'Recents',
            icon: <CounterClockwiseClockIcon />,
            path: 'recents',
        },
        {
            value: 'favorites',
            option: 'Favorites',
            icon: <StarIcon />,
            path: '/ggg',
        },
        {
            value: 'tools',
            option: 'Tools',
            icon: <CubeIcon />,
            path: '/whatever',
        },
    ];

    return (
        <div className="fixed top-16 bottom-0 hidden tablet:flex flex-col gap-1 min-w-[160px] w-48 border-r border-base-content/20 bg-base-100 overflow-auto py-12 px-3 select-none">
            {sidebarOptions.map((options, key) => (
                <NavLink
                    key={key}
                    to={options.path}
                    className={({ isActive }) =>
                        isActive
                            ? 'bg-primary text-primary-content rounded block'
                            : ''
                    }
                >
                    <div className="flex items-center gap-2 text-sm py-2 px-3 rounded hover:bg-base-content/20">
                        {options.icon} {options.option}
                    </div>
                </NavLink>
            ))}
        </div>
    );
};

export default Sidebar;
