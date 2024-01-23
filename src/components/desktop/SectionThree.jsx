import Articles from "./Articles.jsx";

export default function SectionThree() {
    return(
        <section className="flex justify-center w-full h-[100vh] bg-VeryLightGray">
            <div className="flex flex-col justify-center items-start gap-9 w-[80%]">
                <h2 className="text-DarkBlue text-4xl font-PublicSans font-[400]">Latest Articles</h2>
                <div className="flex justify-start items-start gap-4 w-full">
                    <Articles image={`./src/assets/images/desktop/image-currency.jpg`}
                    author={`By Claire Robinson`}
                    title={<>Receive money in any <br /> currency with no fees</>}
                    paragraph={<>The world is getting smaller and <br />
                    we're becoming more mobile. So <br />
                    why should you be forced to only <br />
                    receive money in a single …</>} />
                    <Articles image={`./src/assets/images/desktop/image-restaurant.jpg`}
                    author={`By Wilson Hutton`}
                    title={<>Treat yourself without <br /> worrying about money</>}
                    paragraph={<>Our simple budgeting feature <br />
                    allows you to separate out your <br />
                    spending and set realistic limits <br />
                    each month. That means you …</>} />
                    <Articles image={`./src/assets/images/desktop/image-plane.jpg`}
                    author={`By Wilson Hutton`}
                    title={<>Take your Easybank card <br /> wherever you go</>}
                    paragraph={<>We want you to enjoy your travels. <br />
                    This is why we don't charge any <br />
                    fees on purchases while you're <br />
                    abroad. We'll even show you …</>} />
                    <Articles image={`./src/assets/images/desktop/image-confetti.jpg`}
                    author={`By Claire Robinson`}
                    title={<>Our invite-only Beta <br /> accounts are now live!</>}
                    paragraph={<>After a lot of hard work by the <br />
                    whole team, we're excited to launch <br />
                    our closed beta. It's easy to request <br />
                    an invite through the site ...</>} />
                </div>
            </div>
        </section>
    );
}