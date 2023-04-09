import { DotsVerticalIcon, GitHubLogoIcon } from '@radix-ui/react-icons';
import { useState } from 'react';
import ThemeSelector from './ThemeSelector';
import ThemeSelectorMobile from './ThemeSelectorMobile';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            {' '}
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
                </div>
            </div>
            <div
                className={`absolute top-14 right-0 w-72 flex flex-col tablet:hidden mx-6 mt-0 d-s ${
                    isOpen ? '' : 'hidden'
                }`}
            >
                <div className="px-6 py-2">
                    <div className="py-2">About</div>
                    <div className="py-2">GitHub</div>
                </div>
                <div className="flex gap-4 flex-wrap items-center border-t border-base-content/20 py-4 px-6 bg-base-200">
                    <div>Select theme</div>
                    <ThemeSelectorMobile />
                </div>
            </div>
        </>
    );
};

export default Navbar;
