import ClassesCard from "./ClassesCard";
import SectionTitle from "../../components/SectionTitle";
import { useEffect, useState } from "react";
import Spinner from "../../components/Spinner";

const Classes = () => {
    const [classes, setClasses] = useState([]);
    const [spinner, setSpinner] = useState(true);

    useEffect( () => {
        fetch('http://localhost:5000/classes/approved')
         .then(res => res.json())
         .then(data => {
            setClasses(data);
            setSpinner(false);
        })
    }, [])

    return (
        <section className="my-container">
            <SectionTitle heading="All Classes" subHeading="Effective Classes" />
            { spinner && <Spinner /> }
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-8 mt-6 lg:mt-12">
                {
                    classes.map(item=> <ClassesCard key={item._id} item={item} />)
                }
            </div>
        </section>
    );
};

export default Classes;