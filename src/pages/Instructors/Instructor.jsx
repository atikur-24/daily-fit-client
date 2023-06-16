import { useEffect, useState } from "react";
import SectionTitle from "../../components/SectionTitle";
import Spinner from "../../components/Spinner";
import InstructorsCard from "./InstructorsCard";

const Instructors = () => {
    const [instructors, setInstructors] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect( () => {
        fetch('https://daily-fit-server.vercel.app/users/instructor')
         .then(res => res.json())
         .then(data => {
            setInstructors(data)
            setLoading(false)
        })
    }, [])
    
    return (
        <section className="my-container">
            <SectionTitle heading="All Expert Instructors" subHeading="Train With Experts" />
            {loading && <Spinner />}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-5 mt-6 lg:mt-12">
                {
                    instructors.map(instructor => <InstructorsCard key={instructor._id} instructor={instructor} /> )
                }
            </div>
        </section>
    );
};

export default Instructors;