import { NavLink } from 'react-router-dom';
import {
    MdOutlineSpaceDashboard,
    MdHistory,
    MdOutlineFavoriteBorder,
} from 'react-icons/md';

import { TbTools } from 'react-icons/tb';

const BottomNav = () => {
    const sidebarOptions = [
        {
            value: 'dashboard',
            option: 'Dashboard',
            icon: <MdOutlineSpaceDashboard size={24} />,
            path: '/',
        },
        {
            value: 'recents',
            option: 'Recents',
            icon: <MdHistory size={24} />,
            path: 'recents',
        },
        {
            value: 'favorites',
            option: 'Favorites',
            icon: <MdOutlineFavoriteBorder size={24} />,
            path: '/ggg',
        },
        {
            value: 'tools',
            option: 'Tools',
            icon: <TbTools size={24} />,
            path: '/whatever',
        },
    ];

    return (
        <div className="fixed bottom-0 flex tablet:hidden w-full h-fit justify-between py-3 px-6 border-t border-base-content/10 overflow-auto bg-base-100">
            {sidebarOptions.map((options, key) => (
                <NavLink
                    key={key}
                    to={options.path}
                    className={({ isActive }) =>
                        isActive
                            ? 'bg-primary text-primary-content rounded-md flex'
                            : 'flex'
                    }
                >
                    <div
                        key={key}
                        className="flex items-center justify-center py-3 w-14 text-xs rounded-md hover:bg-base-content/20"
                    >
                        <div>{options.icon}</div>
                    </div>
                </NavLink>
            ))}
        </div>
    );
};

export default BottomNav;
