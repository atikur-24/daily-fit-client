import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../../hooks/useAuth";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import SectionTitle from "../../../../components/SectionTitle";

const EnrolledClasses = () => {
    const { user, loading } = useAuth();
    const [axiosSecure] = useAxiosSecure();
  
    const { data: enrolledClasses = [] } = useQuery({
      queryKey: ["payments", user?.email],
      enabled: !loading,
      queryFn: async () => {
        const res = await axiosSecure(`/payments/${user?.email}`);
        return res.data;
      },
    })

    return (
        <section>
            <div className="my-5">
                <SectionTitle heading="Your Enrolled Classes" subHeading="Let's enjoy" />
            </div>
            <table className="table w-full">
                    {/* head */}
                <thead className="bg-[#003a70] text-white">
                    <tr>
                        <th>Class image</th>
                        <th>Class name</th>
                        <th>Price</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {enrolledClasses?.map((enrolledProgram,) => (
                    <tr key={enrolledProgram._id} className="border-b-2">
                        <td>
                            <div className="flex items-center space-x-3">
                                <div className="avatar">
                                    <div className="mask mask-squircle w-16 h-16">
                                        <img src={enrolledProgram.image} alt="Name" />
                                    </div>
                                </div>
                                <div className="font-bold">{enrolledProgram.name}</div>
                            </div>
                        </td>
                        <td>{enrolledProgram.name}</td>
                        <td>${enrolledProgram.price}</td>
                        <td className="text-green-600 font-bold">{enrolledProgram?.status}</td>
                    </tr>
                    ))}
                </tbody>
            </table>
        </section>
    );
};

export default EnrolledClasses;