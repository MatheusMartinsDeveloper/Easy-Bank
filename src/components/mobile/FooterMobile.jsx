import ButtonMobile from "./ButtonMobile.jsx";

export default function FooterMobile() {
    return(
        <footer className="flex flex-col justify-center items-center gap-[7%] mt-[10%] bg-DarkBlue w-full h-[60vh]">
            <div className="flex flex-col justify-center items-center gap-5 w-[45%]">
                <div className="relative w-[100%]">
                    <img className="w-[90%] z-0" src="./src/assets/icons/logo.svg" alt="Icon Logo" />
                    <span className="absolute -top-1 left-[25%] z-[100] text-White text-3xl font-PublicSans font-black">easybank</span>
                </div>
                <nav className="w-full">
                    <ul className="flex justify-center items-center gap-4 w-full">
                        <li className="w-full">
                            <a className="w-full" href="https://www.facebook.com">
                                <img className="w-[100%]" src="./src/assets/icons/icon-facebook.svg" alt="Icon Facebook" />
                            </a>
                        </li>
                        <li className="w-full">
                            <a className="w-full" href="https://www.youtube.com">
                                <img className="w-[100%]" src="./src/assets/icons/icon-youtube.svg" alt="Icon " />
                            </a>
                        </li>
                        <li className="w-full">
                            <a className="w-full" href="https://www.twitter.com">
                                <img className="w-[100%]" src="./src/assets/icons/icon-twitter.svg" alt="Icon " />
                            </a>
                        </li>
                        <li className="w-full">
                            <a className="w-full" href="https://www.pinterest.com">
                                <img className="w-[100%]" src="./src/assets/icons/icon-pinterest.svg" alt="Icon " />
                            </a>
                        </li>
                        <li className="w-full">
                            <a className="w-full" href="https://www.instagram.com">
                                <img className="w-[100%]" src="./src/assets/icons/icon-instagram.svg" alt="Icon " />
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
            <nav>
                <ul className="flex flex-col justify-center items-center gap-3">
                    <li><a className="text-White text-xl font-PublicSans font-[300]" href="#">About Us</a></li>
                    <li><a className="text-White text-xl font-PublicSans font-[300]" href="#">Contact</a></li>
                    <li><a className="text-White text-xl font-PublicSans font-[300]" href="#">Blog</a></li>
                    <li><a className="text-White text-xl font-PublicSans font-[300]" href="#">Careers</a></li>
                    <li><a className="text-White text-xl font-PublicSans font-[300]" href="#">Support</a></li>
                    <li><a className="text-White text-xl font-PublicSans font-[300]" href="#">Privacy Policy</a></li>
                </ul>
            </nav>
            <div className="flex flex-col justify-center items-center gap-4 w-[70%]">
                <ButtonMobile content={`Request Invite`} />
                <span className="text-GrayishBlue text-xl font-PublicSans font-[400]">© Easybank. All Rights Reserved</span>
            </div>
        </footer>
    );
}