import * as Dialog from '@radix-ui/react-dialog';
import {
    Cross2Icon,
    DotsVerticalIcon,
    GitHubLogoIcon,
} from '@radix-ui/react-icons';
import ThemeSelector from './ThemeSelector';
import ThemeSelectorMobile from './ThemeSelectorMobile';

const Navbar = () => {
    return (
        <div className="border-b border-base-content/20">
            <div className="flex items-center justify-between gap-4 flex-wrap text-base-content py-4 px-6 max-w-7xl mx-auto">
                <div className="tracking-tight text-2xl">
                    <span className="font-black italic ital">quick</span>
                    <span className="font-light">Tools</span>
                </div>
                <div className="items-center gap-6 tablet:flex hidden">
                    <div className="flex items-center gap-6">
                        <span className="text-sm font-bold">Docs</span>
                        <span className="text-sm font-bold">About</span>
                    </div>
                    <div className="flex items-center gap-6">
                        <ThemeSelector />
                        <GitHubLogoIcon />
                    </div>
                </div>
                <Dialog.Root>
                    <Dialog.Trigger asChild>
                        <div className="tablet:hidden block cursor-pointer p-2 d-s">
                            <DotsVerticalIcon />
                        </div>
                    </Dialog.Trigger>
                    <Dialog.Portal>
                        <Dialog.Content className="block tablet:hidden overflow-auto data-[state=open]:animate-contentShow fixed top-0 left-[50%] max-h-[85vh] w-full translate-x-[-50%] rounded focus:outline-none bg-base-100 border-b border-base-content/10">
                            <div className="py-4 px-6">
                                <div className="py-2">Docs</div>
                                <div className="py-2">About</div>
                                <div className="py-2">GitHub</div>
                            </div>
                            <div className="p-6 flex gap-6 flex-wrap items-center pt-6 border-t border-base-content/10 bg-base-200">
                                <div>Select theme</div>
                                <ThemeSelectorMobile />
                            </div>
                            <Dialog.Close asChild>
                                <button
                                    className="text-violet11 hover:bg-violet4 focus:shadow-violet7 absolute top-[10px] right-[10px] inline-flex h-[25px] w-[25px] appearance-none items-center justify-center rounded-full focus:shadow-[0_0_0_2px] focus:outline-none"
                                    aria-label="Close"
                                >
                                    <Cross2Icon />
                                </button>
                            </Dialog.Close>
                        </Dialog.Content>
                    </Dialog.Portal>
                </Dialog.Root>
            </div>
        </div>
    );
};

export default Navbar;
