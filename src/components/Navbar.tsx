import { DotsVerticalIcon, GitHubLogoIcon } from '@radix-ui/react-icons';
import { useState } from 'react';
import ThemeSelector from './ThemeSelector';
import ThemeSelectorMobile from './ThemeSelectorMobile';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="border-b border-base-content/20">
            <div className="flex items-center justify-between gap-4 flex-wrap text-base-content py-4 px-6 max-w-7xl mx-auto">
                <div className="tracking-tight text-2xl">
                    <span className="font-black italic ital">quick</span>
                    <span className="font-light">Tools</span>
                </div>
                <div className="items-center gap-4 tablet:flex hidden">
                    <ThemeSelector />
                    <GitHubLogoIcon />
                </div>
                <div
                    className="tablet:hidden block cursor-pointer p-2 d-s"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <DotsVerticalIcon />
                </div>
                <div className={`tablet:hidden flex items-center gap-4`}>
                    <ThemeSelectorMobile />
                </div>
            </div>
        </div>
    );
};

export default Navbar;
