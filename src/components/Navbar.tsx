import { GitHubLogoIcon, HamburgerMenuIcon } from '@radix-ui/react-icons';
import ThemeSelector from './ThemeSelector';

const Navbar = () => {
    return (
        <div>
            <div className="flex items-center justify-between gap-4 flex-wrap text-base-content py-4 px-6 w-full">
                <div className="flex gap-4 items-center">
                    <div className="tracking-tight text-2xl">
                        <span className="font-black italic ital">quick</span>
                        <span className="font-light">Tools</span>
                    </div>
                </div>
                {/* <div className="tablet:hidden block rounded cursor-pointer d-s">
                    <HamburgerMenuIcon />
                </div> */}
                <div className="flex items-center gap-4 tablet:flex ">
                    <ThemeSelector />
                    <GitHubLogoIcon />
                </div>
            </div>
            <div className="tablet:hidden block"></div>
        </div>
    );
};

export default Navbar;
