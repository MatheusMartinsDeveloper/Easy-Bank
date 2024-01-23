
export default function CardThreeMobile({ image, author, title, paragraph }) {
    return(
        <div className="flex flex-col justify-center items-center gap-10 pb-10 rounded-xl shadow-xl w-[90%]">
            <img className="w-full rounded-tl-xl rounded-tr-xl" src={ image } alt={`Image for ${ title }`} />
            <div className="flex flex-col flex-nowrap gap-5 pl-3 w-[100%]">
                <span className="text-GrayishBlue text-xl font-PublicSans font-[300]">{ author }</span>
                <h4 className="text-DarkBlue text-2xl font-PublicSans font-[400] text-nowrap">{ title }</h4>
                <p className="text-GrayishBlue text-xl font-PublicSans font-[300] text-nowrap">{ paragraph }</p>
            </div>
        </div>
    )
}