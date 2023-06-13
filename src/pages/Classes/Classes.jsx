import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import ClassesCard from "./ClassesCard";
import SectionTitle from "../../components/SectionTitle";

const Classes = () => {
    const [axiosSecure] = useAxiosSecure();
    const { data: classes = [] } = useQuery(["classes"], async () => {
      const res = await axiosSecure.get("/classes");
      return res.data;
    });

    return (
        <section className="my-container">
            <SectionTitle heading="All Classes" subHeading="Effective Classes" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-8 mt-6 lg:mt-12">
                {
                    classes.map(item=> <ClassesCard key={item._id} item={item} />)
                }
            </div>
        </section>
    );
};

export default Classes;