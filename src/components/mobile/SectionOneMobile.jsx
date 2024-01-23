import ButtonMobile from "./ButtonMobile.jsx";

export default function SectionOneMobile() {
    return (
        <section className="relative flex flex-col justify-center items-center gap-[20%] mt-[5%] w-full h-[100vh] z-0 overflow-hidden">
            <div className="flex flex-col justify-center items-center">
                <img className="absolute -top-[10%] z-0 w-full" src="./src/assets/images/mobile/bg-intro-mobile.svg" alt="Image Intro" />
                <img className="absolute -top-[16%] z-[20] w-[90%]" src="./src/assets/images/desktop/image-mockups.png" alt="Image Mockups" />
            </div>
            <div className="flex flex-col justify-center items-center gap-8">
                <h1 className="text-DarkBlue text-5xl font-PublicSans font-[400]">Next generation <br /> digital banking</h1>
                <p className="text-GrayishBlue text-lg font-PublicSans font-[300]">Take your financial life online. Your Easybank <br />
                account will be a one-stop-shop for spending, <br />
                saving, budgeting, investing, and much more.</p>
                <ButtonMobile content={`Request Invite`} />
            </div>
        </section>
    );
}