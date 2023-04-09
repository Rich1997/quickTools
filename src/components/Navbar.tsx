import { DotsVerticalIcon, GitHubLogoIcon } from '@radix-ui/react-icons';
import { useState } from 'react';
import ThemeSelector from './ThemeSelector';
import ThemeSelectorMobile from './ThemeSelectorMobile';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div>
            <div className="flex items-center justify-between gap-4 flex-wrap text-base-content py-4 px-6 w-full">
                <div className="flex gap-4 items-center">
                    <div className="tracking-tight text-2xl">
                        <span className="font-black italic ital">quick</span>
                        <span className="font-light">Tools</span>
                    </div>
                </div>

                <div className="flex items-center gap-4">
                    <div
                        className={`tablet:flex items-center gap-4 ${
                            isOpen ? '' : 'hidden'
                        }`}
                    >
                        <ThemeSelector />
                        <GitHubLogoIcon />
                        <ThemeSelectorMobile />
                    </div>
                    <div
                        className="tablet:hidden block cursor-pointer p-2 d-s"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        <DotsVerticalIcon />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
