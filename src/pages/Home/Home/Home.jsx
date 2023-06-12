import DynamicTitle from "../../../components/DynamicTitle";
import Banner from "../Banner/Banner";
import PopularClasses from "../PopularClasses/PopularClasses";
import PopularInstructors from "../PopularInstructors/PopularInstructors";

const Home = () => {
    return (
        <>
            <DynamicTitle>Home</DynamicTitle>
            <Banner />
            <PopularClasses />
            <PopularInstructors />
        </>
    );
};

export default Home;