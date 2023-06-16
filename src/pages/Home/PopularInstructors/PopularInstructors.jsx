import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle";
import PopularInstructorsCard from "./PopularInstructorsCard";
import Spinner from "../../../components/Spinner";

const PopularInstructors = () => {
    const [instructors, setInstructors] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect( () => {
        fetch('https://daily-fit-server.vercel.app/users/instructor')
         .then(res => res.json())
         .then(data => {
            setInstructors(data.slice(0, 6))
            setLoading(false)
        })
    }, [])
    
    return (
        <section className="my-container">
            <SectionTitle heading="Popular Instructors" subHeading="Train With Experts" />
            {loading && <Spinner />}
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-5 mt-6 lg:mt-12">
                {
                    instructors.map(instructor => <PopularInstructorsCard key={instructor._id} instructor={instructor} /> )
                }
            </div>
        </section>
    );
};

export default PopularInstructors;