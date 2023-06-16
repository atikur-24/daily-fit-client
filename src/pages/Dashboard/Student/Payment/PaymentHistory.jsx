import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../../hooks/useAuth";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import SectionTitle from "../../../../components/SectionTitle";

const PaymentHistory = () => {
    const { user, loading } = useAuth();
    const [axiosSecure] = useAxiosSecure();
  
    const { data: PaymentHistory = [] } = useQuery({
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
                <SectionTitle heading="Payment History" subHeading="check" />
            </div>
            <table className="table w-full">
                    {/* head */}
                <thead className="bg-purple-700 text-white">
                    <tr>

                        <th>Class name</th>
                        <th>Price</th>
                        <th>Transaction Id</th>
                        <th>Date</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {PaymentHistory?.map((enrolledProgram,) => (
                    <tr key={enrolledProgram._id} className="border-b-2">
 
                        <td>{enrolledProgram.name}</td>
                        <td>${enrolledProgram.price}</td>
                        <td>{enrolledProgram.transactionId}</td>
                        <td>{enrolledProgram.date}</td>
                        <td className="text-green-600 font-bold">Successful</td>
                    </tr>
                    ))}
                </tbody>
            </table>
        </section>
    );
};

export default PaymentHistory;