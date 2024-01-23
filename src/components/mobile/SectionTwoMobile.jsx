import CardTwoMobile from "./CardTwoMobile";

export default function SectionTwoMobile() {
    return (
        <section className="flex flex-col justify-center items-center gap-10 py-[5%] bg-LightGrayishBlue w-full h-[100%]">
            <div className="flex flex-col justify-center items-center gap-7">
                <h2 className="text-DarkBlue text-5xl text-center font-PublicSans font-[400]">Why choose <br /> Easybank?</h2>
                <p className="text-GrayishBlue text-lg text-center font-PublicSans font-[300]">We leverage Open Banking to turn your bank <br />
                account into your financial hub. Control your <br />
                finances like never before.</p>
            </div>
            <div className="flex flex-col justify-center items-center gap-7 w-full">
                <CardTwoMobile image={`./src/assets/icons/icon-online.svg`}
                title={`Online Banking`}
                paragraph={<>Our modern web and mobile applications allow <br />
                you to keep track of your finances wherever you <br />
                are in the world.</>} />
                <CardTwoMobile image={`./src/assets/icons/icon-budgeting.svg`}
                title={`Simple Budgeting`}
                paragraph={<>See exactly where your money goes each month. <br />
                Receive notifications when you're close to your <br />
                hitting limits.</>} />
                <CardTwoMobile image={`./src/assets/icons/icon-onboarding.svg`}
                title={`Fast Onboarding`}
                paragraph={<>We don't do branches. Open your account in <br />
                minutes online and start taking control of your <br />
                finances right away.</>} />
                <CardTwoMobile image={`./src/assets/icons/icon-api.svg`}
                title={`Open API`}
                paragraph={<>Manage your savings, investments, pension, and <br />
                much more from one account. Tracking your <br />
                money has never been easier.</>} />
            </div>        
        </section>
    );
}