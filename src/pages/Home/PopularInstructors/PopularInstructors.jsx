import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle";
import PopularInstructorsCard from "./PopularInstructorsCard";
import Spinner from "../../../components/Spinner";

const PopularInstructors = () => {
    const [instructors, setInstructors] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect( () => {
        fetch('http://localhost:5000/instructors')
         .then(res => res.json())
         .then(data => {
            setInstructors(data)
            setLoading(false)
        })
    }, [])
    
    return (
        <section className="my-container">
            <SectionTitle heading="Popular Instructors" subHeading="Train With Experts" />
            {loading && <Spinner />}
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-5 mt-6 lg:mt-12">
                {
                    instructors.map(instructor => <PopularInstructorsCard key={instructor._id} instructor={instructor} /> )
                }
            </div>
        </section>
    );
};

export default PopularInstructors;