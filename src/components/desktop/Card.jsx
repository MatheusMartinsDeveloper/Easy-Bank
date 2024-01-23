
export default function Card({ image, title, paragraph }) {
    return(
        <div className="w-[100%] shadow-lg rounded-lg py-2 px-3">
            <img src={ image } alt={`Image for ${ title }`} />
            <h4 className="text-black text-2xl font-PublicSans font-[400] mt-[5%]">{ title }</h4>
            <p className="text-GrayishBlue text-base font-PublicSans font-[300] mt-[5%]">{ paragraph }</p>
        </div>
    );
}