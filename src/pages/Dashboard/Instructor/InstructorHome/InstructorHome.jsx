import AnimatedSlider from "../../../../components/AnimatedSlider";
import SectionTitle from "../../../../components/SectionTitle";

const InstructorHome = () => {
    return (
        <section>
            <div className="my-5">
                <SectionTitle heading="Instructor Home Dashboard" subHeading="Experience Fitness Excellence at Daily Fit" />
            </div>
            <AnimatedSlider />
        </section>
    );
};

export default InstructorHome;