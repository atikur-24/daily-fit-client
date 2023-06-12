import DynamicTitle from "../../../components/DynamicTitle";
import Banner from "../Banner/Banner";
import Offer from "../Offer/Offer";
import PopularClasses from "../PopularClasses/PopularClasses";
import PopularInstructors from "../PopularInstructors/PopularInstructors";

const Home = () => {
    return (
        <>
            <DynamicTitle>Home</DynamicTitle>
            <Banner />
            <PopularClasses />
            <PopularInstructors />
            <Offer />
        </>
    );
};

export default Home;