import Button from "./Button.jsx";

export default function SectionOne() {
    return (
        <section className="relative flex justify-between items-center bg-VeryLightGray w-full h-[90vh] z-[100]">
            <div className="flex flex-col justify-start items-start gap-8 w-[60%] ml-[10%]">
                <h1 className="text-black text-5xl font-PublicSans font-[400]">Next generation <br /> digital banking</h1>
                <p className="text-GrayishBlue text-base font-PublicSans font-[300]">Take your financial life online. Your Easybank account <br />
                    will be a one-stop-shop for spending, saving, <br />
                    budgeting, investing, and much more.</p>
                <div className={`bg-gradient-to-r from-LimeGreen to-BrightCyan text-center py-3 rounded-full w-[30%] cursor-pointer hover:brightness-[110%]`}>
                    <a className="text-White text-base font-PublicSans font-[700]" href="#">Request Invite</a>
                </div>
            </div>
            <div className="flex flex-col w-[60%]">
                <img className="absolute -top-[35%] -right-[12%] z-0 w-[70%]" src="./src/assets/images/desktop/bg-intro-desktop.svg" alt="Image Intro" />
                <img className="absolute -top-[25%] -right-10 z-[100] w-[50%]" src="./src/assets/images/desktop/image-mockups.png" alt="Image Mockups" />
            </div>
        </section>
    );
}