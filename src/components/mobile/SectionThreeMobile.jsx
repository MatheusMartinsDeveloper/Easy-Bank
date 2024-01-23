import CardThreeMobile from "./CardThreeMobile.jsx";

export default function SectionThreeMobile() {
    return(
        <section className="flex flex-col justify-center items-center gap-8 mt-[15%] w-full h-[100%]">
            <div>
                <h2 className="text-DarkBlue text-5xl text-center font-PublicSans font-[400]">Latest Articles</h2>
            </div>
            <div className="flex flex-col justify-center items-center gap-20">
                <CardThreeMobile image={`./src/assets/images/desktop/image-currency.jpg`}
                author={`By Claire Robinson`}
                title={<>Receive money in any currency with <br />
                no fees</>}
                paragraph={<>The world is getting smaller and we're <br />
                becoming more mobile. So why should you be <br />
                forced to only receive money in a single …</>} />
                <CardThreeMobile image={`./src/assets/images/desktop/image-restaurant.jpg`}
                author={`By Wilson Hutton`}
                title={<>Treat yourself without worrying <br />
                about money</>}
                paragraph={<>Our simple budgeting feature allows you to <br />
                separate out your spending and set realistic <br />
                limits each month. That means you …</>} />
                <CardThreeMobile image={`./src/assets/images/desktop/image-plane.jpg`}
                author={`By Wilson Hutton`}
                title={<>Take your Easybank card wherever <br />
                you go</>}
                paragraph={<>We want you to enjoy your travels. This is <br />
                why we don't charge any fees on purchases <br />
                while you're abroad. We'll even show you …</>} />
                <CardThreeMobile image={`./src/assets/images/desktop/image-confetti.jpg`}
                author={`By Claire Robinson`}
                title={<>Our invite-only Beta accounts are <br />
                now live!</>}
                paragraph={<>After a lot of hard work by the whole team, <br />
                we're excited to launch our closed beta. It's <br />
                easy to request an invite through the site ...</>} />
            </div>
        </section>
    );
}