import SectionOne from "./SectionOne.jsx";
import SectionTwo from "./SectionTwo.jsx";
import SectionThree from "./SectionThree.jsx";

export default function Main() {
    return(
        <main className="relative z-[100] overflow-hidden">
            <SectionOne />
            <SectionTwo />
            <SectionThree />
        </main>
    );
}