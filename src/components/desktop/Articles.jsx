import { useState } from "react";

export default function Articles({ image, author, title, paragraph }) {
    const [event, setEvent] = useState(false);

    const activeHover = () => {
        setEvent(!event);
    }

    return(
        <div onMouseEnter={activeHover} onMouseLeave={activeHover} className="flex flex-col gap-5 shadow-xl rounded-md pb-1 w-[70%] h-[430px] cursor-pointer transition-all hover:-translate-y-5 hover:delay-[.1s]">
            <img className={`bg-center bg-cover rounded-tl-lg rounded-tr-md w-full h-[45%]`} src={ image } alt={`Image for ${ title }`} />
            <div className="flex flex-col justify-center items-start gap-3 pl-5 w-[100%]">
                <span className="text-GrayishBlue text-sm font-PublicSans font-[400]">{ author }</span>
                <h4 className={`text-DarkBlue text-xl font-PublicSans font-[300] ${event ? `hover:text-LimeGreen` : ``}`}>{ title }</h4>
                <p className="text-GrayishBlue text-sm font-PublicSans font-[400]">{ paragraph }</p>
            </div>
        </div>
    )
}