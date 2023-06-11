import DynamicTitle from "../../../components/DynamicTitle";
import Banner from "../Banner/Banner";
import PopularClasses from "../PopularClasses/PopularClasses";

const Home = () => {
    return (
        <>
            <DynamicTitle>Home</DynamicTitle>
            <Banner />
            <PopularClasses />
        </>
    );
};

export default Home;