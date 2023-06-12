
import { HiMinus } from "react-icons/hi";

const SectionTitle = ( { heading, subHeading } ) => {
    return (
        <div className="text-center">
            <h2 className="text-[#29282D] tracking-wide text-3xl lg:text-5xl font-medium mb-3 lg:mb-5 lg:font-bold ">{heading}</h2>
            <h5 className="text-[#f34e3a] inline-flex items-center gap-2 lg:text-xl"><HiMinus /> {subHeading} <HiMinus /> </h5>
        </div>
    );
};
export default SectionTitle;