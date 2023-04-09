import * as Dialog from '@radix-ui/react-dialog';
import {
    Cross2Icon,
    DotsVerticalIcon,
    GitHubLogoIcon,
} from '@radix-ui/react-icons';
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
                        <Dialog.Root>
                            <Dialog.Trigger asChild>
                                <DotsVerticalIcon />
                            </Dialog.Trigger>
                            <Dialog.Portal>
                                <Dialog.Overlay className="bg-blackA9 data-[state=open]:animate-overlayShow fixed inset-0" />
                                <Dialog.Content className="block tablet:hidden overflow-auto data-[state=open]:animate-contentShow fixed top-44 left-[50%] max-h-[85vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none d-s">
                                    <div className="py-4 px-6">
                                        <div className="py-2">About</div>
                                        <div className="py-2">GitHub</div>
                                    </div>
                                    <div className="p-6 flex gap-6 flex-wrap items-center pt-6 border-t border-base-content/20 bg-base-200">
                                        <div>Select theme</div>
                                        <ThemeSelectorMobile />
                                    </div>
                                </Dialog.Content>
                            </Dialog.Portal>
                        </Dialog.Root>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;
