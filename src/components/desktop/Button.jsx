
export default function Button({ width }) {
    return (
        <div className={`bg-gradient-to-r from-LimeGreen to-BrightCyan text-center py-3 rounded-full w-${ width } cursor-pointer hover:brightness-[110%]`}>
            <a className="text-White text-base font-PublicSans font-[700]" href="#">Request Invite</a>
        </div>
    )
}