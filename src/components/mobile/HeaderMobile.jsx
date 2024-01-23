import { useState } from "react";

export default function HeaderMobile() {
    const [event, setEvent] = useState(false);

    const activeEvent = () => {
        setEvent(!event);
    }

    return(
        <header className="pt-10 w-full z-0">
            <div className="flex justify-around items-center w-full">
                <img className="w-[40%]" src="./src/assets/icons/logo.svg" alt="Icon Logo" />
                <img onClick={activeEvent} className="w-[8%]" src={event ? `./src/assets/icons/icon-close.svg` : `./src/assets/icons/icon-hamburger.svg`} alt="Icon Menu" />
            </div>
            <div className={`absolute top-[15%] left-[10%] flex justify-center items-cente shadow-2xl bg-White rounded-lg py-9 w-[85%] z-[100] transition-all translate-x-[110%] ${event ? `delay-[.3s] -translate-x-[0%]` : ``}`}>
                <nav>
                    <ul className="flex flex-col justify-center items-center gap-6">
                        <li><a className="text-DarkBlue text-2xl font-PublicSans font-[400]" href="#">Home</a></li>
                        <li><a className="text-DarkBlue text-2xl font-PublicSans font-[400]" href="#">About</a></li>
                        <li><a className="text-DarkBlue text-2xl font-PublicSans font-[400]" href="#">Contact</a></li>
                        <li><a className="text-DarkBlue text-2xl font-PublicSans font-[400]" href="#">Blog</a></li>
                        <li><a className="text-DarkBlue text-2xl font-PublicSans font-[400]" href="#">Careers</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}