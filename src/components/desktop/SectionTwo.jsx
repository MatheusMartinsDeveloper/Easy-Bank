import Card from "./Card.jsx";

export default function SectionTwo() {
    return (
        <section className="flex justify-center items-center w-full h-[100vh] bg-LightGrayishBlue">
            <div className="flex flex-col items-start gap-10 mt-[7%] w-[85%]">
                <div className="flex flex-col gap-3">
                    <h2 className="text-black text-4xl font-PublicSans font-[400]">Why choose Easybank?</h2>
                    <p className="text-GrayishBlue text-base font-PublicSans font-[300]">We leverage Open Banking to turn your bank account into your financial hub. <br />
                     Control your finances like never before.</p>
                </div>
                <div className="grid grid-cols-4 gap-4 w-[100%]">
                    <Card image={`./src/assets/icons/icon-online.svg`}
                    title={`Online Banking`}
                    paragraph={<>Our modern web and mobile <br />
                    applications allow you to keep <br />
                    track of your finances wherever you <br />
                    are in the world.</>} />
                    <Card image={`./src/assets/icons/icon-budgeting.svg`}
                    title={`Simple Budgeting`}
                    paragraph={<>See exactly where your money <br />
                    goes each month. Receive <br />
                    notifications when you're close to <br />
                    hitting your limits.</>} />
                    <Card image={`./src/assets/icons/icon-onboarding.svg`}
                    title={`Fast Onboarding`}
                    paragraph={<>We don't do branches. Open your <br />
                     account in minutes online and start <br />
                    taking control of your finances <br />
                    right away.</>} />
                    <Card image={`./src/assets/icons/icon-api.svg`}
                    title={`Open API`}
                    paragraph={<>Manage your savings, investments, <br />
                    pension, and much more from one <br />
                    account. Tracking your money has <br />
                    never been easier.</>} />
                </div>
            </div>
        </section>
    );
}