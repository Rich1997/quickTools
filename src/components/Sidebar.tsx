import { NavLink } from 'react-router-dom';
import {
    MdOutlineSpaceDashboard,
    MdHistory,
    MdOutlineFavoriteBorder,
} from 'react-icons/md';
import { TbTools } from 'react-icons/tb';

const Sidebar = () => {
    const sidebarOptions = [
        {
            value: 'dashboard',
            option: 'Dashboard',
            icon: <MdOutlineSpaceDashboard size={16} />,
            path: '/',
        },
        {
            value: 'recents',
            option: 'Recents',
            icon: <MdHistory size={16} />,
            path: 'recents',
        },
        {
            value: 'favorites',
            option: 'Favorites',
            icon: <MdOutlineFavoriteBorder size={16} />,
            path: '/ggg',
        },
        {
            value: 'tools',
            option: 'Tools',
            icon: <TbTools size={16} />,
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
                            ? 'bg-primary text-primary-content rounded-md block'
                            : ''
                    }
                >
                    <div className="flex items-center gap-2 text-sm py-2 px-3 rounded-md hover:bg-base-content/20">
                        {options.icon} {options.option}
                    </div>
                </NavLink>
            ))}
        </div>
    );
};

export default Sidebar;
