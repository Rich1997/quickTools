import {
    CounterClockwiseClockIcon,
    CubeIcon,
    DashboardIcon,
    StarIcon,
} from '@radix-ui/react-icons';
import { NavLink } from 'react-router-dom';

const BottomNav = () => {
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
        <div className="flex tablet:hidden w-full h-fit justify-around p-3 border-t border-base-content/20 overflow-auto relative">
            {sidebarOptions.map((options, key) => (
                <NavLink
                    key={key}
                    to={options.path}
                    className={({ isActive }) =>
                        isActive
                            ? 'bg-primary text-primary-content rounded flex'
                            : 'flex'
                    }
                >
                    <div
                        key={key}
                        className="flex items-center justify-center p-3 w-20 text-xs rounded hover:bg-base-content/20"
                    >
                        <div>{options.icon}</div>
                    </div>
                </NavLink>
            ))}
        </div>
    );
};

export default BottomNav;
