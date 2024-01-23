
export default function CardTwoMobile({ image, title, paragraph }) {
    return(
        <div className="flex flex-col justify-center items-center gap-3">
            <img className="w-[20%]" src={ image } alt={`Image for ${ title }`} />
            <h3 className="text-DarkBlue text-2xl text-center font-PublicSans font-[400]">{ title }</h3>
            <p className="text-GrayishBlue text-xl text-center font-PublicSans font-[300]">{ paragraph }</p>
        </div>
    );
}