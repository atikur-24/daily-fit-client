import AnimatedSlider from "../../../../components/AnimatedSlider";
import SectionTitle from "../../../../components/SectionTitle";

const StudentHome = () => {
    return (
        <section>
            <div className="my-5">
                <SectionTitle heading="Student Home Dashboard" subHeading="Empower Your Fitness Journey" />
            </div>
            <AnimatedSlider />
        </section>
    );
};

export default StudentHome;