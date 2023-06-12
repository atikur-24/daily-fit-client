import { useEffect, useState } from "react";
import PopularClassesCard from "./PopularClassesCard";
import SectionTitle from "../../../components/SectionTitle";
import Spinner from "../../../components/Spinner";

const PopularClasses = () => {
    const [classes, setClasses] = useState([]);
    const [spinner, setSpinner] = useState(true);

    useEffect( () => {
        fetch('http://localhost:5000/classes')
         .then(res => res.json())
         .then(data => {
            setClasses(data);
            setSpinner(false);
        })
    }, [])

    return (
        <section className="my-container">
            <SectionTitle heading="Popular Classes"  subHeading="Ultimate Fitness Destination" />
            {spinner && <Spinner />}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-8 mt-6 lg:mt-12">
                {
                    classes.map(item=> <PopularClassesCard key={item._id} item={item} />)
                }
            </div>
        </section>
    );
};

export default PopularClasses;