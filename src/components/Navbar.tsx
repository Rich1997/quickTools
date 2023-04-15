import * as Dialog from '@radix-ui/react-dialog';
import { DotsVerticalIcon, GitHubLogoIcon } from '@radix-ui/react-icons';
import ThemeSelector from './ThemeSelector';
import ThemeSelectorMobile from './ThemeSelectorMobile';

const Navbar = () => {
    return (
        <div className="fixed top-0 w-full border-b border-base-content/20 h-16 bg-base-100">
            <div className="flex items-center justify-between gap-4 flex-wrap text-base-content py-4 px-6 max-w-6xl mx-auto">
                <div className="tracking-tight text-2xl">
                    <span className="font-black italic ital">quick</span>
                    <span className="font-light">Tools</span>
                </div>
                <div className="items-center gap-6 tablet:flex hidden">
                    <div className="flex items-center gap-6">
                        <span className="text-sm">Docs</span>
                        <span className="text-sm">About</span>
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
                        <Dialog.Content className="block tablet:hidden overflow-auto data-[state=open]:animate-contentShow fixed min-[0px]:top-[246px] max-[346px]:top-[246px] min-[347px]:top-[222px] left-[50%] max-h-[85vh] w-[90vw] translate-x-[-50%] translate-y-[-50%] focus:outline-none bg-base-100 rounded d-b">
                            <div className="flex flex-col gap-6 p-8">
                                <div>Docs</div>
                                <div>About</div>
                                <div>GitHub</div>
                            </div>
                            <div className="p-8 flex gap-6 flex-wrap items-center border-t border-base-content/10">
                                <div>Select theme</div>
                                <ThemeSelectorMobile />
                            </div>
                        </Dialog.Content>
                    </Dialog.Portal>
                </Dialog.Root>
            </div>
        </div>
    );
};

export default Navbar;
