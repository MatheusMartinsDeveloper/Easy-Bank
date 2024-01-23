
export default function Header() {
    return (
        <header className="relative flex justify-around items-center py-5 w-full z-[100]">
            <div>
                <img src="./src/assets/icons/logo.svg" alt="Icon Logo" />
            </div>
            <div>
                <nav>
                    <ul className="flex justify-center items-center gap-5">
                        <li className="relative"><a className="text-GrayishBlue text-base font-PublicSans font-[300] link-animate" href="#">Home</a></li>
                        <li className="relative"><a className="text-GrayishBlue text-base font-PublicSans font-[300] link-animate" href="#">About</a></li>
                        <li className="relative"><a className="text-GrayishBlue text-base font-PublicSans font-[300] link-animate" href="#">Contact</a></li>
                        <li className="relative"><a className="text-GrayishBlue text-base font-PublicSans font-[300] link-animate" href="#">Blog</a></li>
                        <li className="relative"><a className="text-GrayishBlue text-base font-PublicSans font-[300] link-animate" href="#">Careers</a></li>
                    </ul>
                </nav>
            </div>
            <div className={`bg-gradient-to-r from-LimeGreen to-BrightCyan text-center py-3 rounded-full w-[15%] cursor-pointer hover:brightness-[110%]`}>
                <a className="text-White text-base font-PublicSans font-[700]" href="#">Request Invite</a>
            </div>
        </header>
    );
}