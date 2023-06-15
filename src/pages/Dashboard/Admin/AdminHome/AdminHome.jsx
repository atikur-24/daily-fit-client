import AnimatedSlider from "../../../../components/AnimatedSlider";
import SectionTitle from "../../../../components/SectionTitle";

const AdminHome = () => {
    return (
        <section>
            <div className="my-5">
                <SectionTitle heading="Admin Home Dashboard" subHeading="super power" />
            </div>
            <AnimatedSlider />
        </section>
    );
};

export default AdminHome;