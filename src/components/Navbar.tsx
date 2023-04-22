import * as Dialog from '@radix-ui/react-dialog';
import { RxDotsVertical, RxGithubLogo } from 'react-icons/rx';
import Anchor from './Anchor';
import ThemeSelector from './ThemeSelector';
import ThemeSelectorMobile from './ThemeSelectorMobile';

const Navbar = () => {
    const menuItems = [{ item: 'Docs' }, { item: 'About' }, { item: 'GitHub' }];
    return (
        <div className="fixed top-0 w-full border-b border-base-content/20 h-16 bg-base-100 select-none">
            <div className="flex items-center justify-between gap-4 flex-wrap text-base-content pb-4 pt-[15px] px-6 max-w-6xl mx-auto">
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
                        <Anchor
                            href="https://github.com/Rich1997/quickTools"
                            hoverColor={true}
                        >
                            <RxGithubLogo size={14} />
                        </Anchor>
                    </div>
                </div>
                <Dialog.Root>
                    <Dialog.Trigger asChild>
                        <div className="tablet:hidden block cursor-pointer p-2 d-s">
                            <RxDotsVertical size={14} strokeWidth={2} />
                        </div>
                    </Dialog.Trigger>
                    <Dialog.Portal>
                        <Dialog.Overlay className="data-[state=open]:animate-overlayShow fixed inset-0" />
                        <Dialog.Content className="block tablet:hidden overflow-auto data-[state=open]:animate-contentShow fixed min-[0px]:top-[246px] max-[346px]:top-[246px] min-[355px]:top-[222px] left-[50%] max-h-[85vh] w-[90vw] translate-x-[-50%] translate-y-[-50%] focus:outline-none bg-base-100 rounded-md d-b">
                            <div className="flex flex-col gap-2 p-4">
                                {menuItems.map((options, key) => (
                                    <Anchor href="" key={key}>
                                        <div className="py-2 px-4 rounded-md hover:bg-base-content/20">
                                            {options.item}
                                        </div>
                                    </Anchor>
                                ))}
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
