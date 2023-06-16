import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../../../../components/SectionTitle";
import useAuth from "../../../../hooks/useAuth";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { HiOutlinePencilAlt, HiTrash } from "react-icons/hi";
import Swal from "sweetalert2";

const MyAllClass = () => {
  const { user, loading } = useAuth();
  const [axiosSecure] = useAxiosSecure();

  const { data: classes = [], refetch } = useQuery({
    queryKey: ["classes", user?.email],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure(`/classes/${user?.email}`);
      return res.data;
    },
  });

  // TODO: handle edit or update classes

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://daily-fit-server.vercel.app/classes/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              refetch();
              Swal.fire("Deleted!", "Class has been deleted.", "success");
            }
          });
      }
    });
  };

  return (
    <section>
      <div className="my-5">
        <SectionTitle heading="My All Classes" subHeading="Best Classes" />
      </div>
      <div className="overflow-x-auto">
                <table className="table w-full">
                    {/* head */}
                    <thead className="bg-[#003a70] text-white">
                        <tr>
                        <th>Name</th>
                        <th>Enrolled Students</th>
                        <th>Status</th>
                        <th>Actions</th>
                        <th>Feedback</th>
                        </tr>
                    </thead>
                    <tbody>
                        {classes.map((program,) => (
                        <tr key={program._id} className="border-b-2">
                            <td>
                                <div className="flex items-center space-x-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-16 h-16">
                                            <img src={program.image} alt="Name" />
                                        </div>
                                    </div>
                                    <div className="font-bold">{program.name}</div>
                                </div>
                            </td>
                            <td>{program.enrolled_students}</td>
                            <td className={program.status === "approved" ? "text-green-600 font-bold" : " text-orange-600 font-bold"}>{program.status}</td>
                            <td>
                                <button className="btn btn-accent"><HiOutlinePencilAlt /></button>
                                <button onClick={ () => handleDelete(program._id)} className="btn btn-error ml-3"><HiTrash /> </button>
                            </td>
                            <td>{program?.feedback}</td>
                        </tr>
                        ))}
                    </tbody>
                </table>
            </div>
    </section>
  );
};

export default MyAllClass;
// TODO: delete comment
    //   <div>
    //     {classes.map((program) => (
    //         <div
    //           key={program._id}
    //           className="card lg:card-side bg-base-200 border border-inherit lg:mb-10"
    //         >
    //           <figure>
    //             <img
    //             className="lg:w-[500px]"
    //               src={program.image}
    //               alt="class"
    //             />
    //           </figure>
    //           <div className="card-body">
    //             <h2 className="card-title">{program.name}</h2>
    //             <div className="my-3">
    //                 <p className="font-bold">Status: <span  className={program.status === "approved" ? "text-green-600" : " text-orange-600"}>{program.status}</span> </p>
    //                 <p className="my-3 text-gray-500"><span className="font-bold text-black">Enrolled Students:</span> {program?.enrolled_students}</p>
    //                 <button className="btn btn-accent btn-sm"><HiOutlinePencilAlt /></button>
    //                 <button onClick={ () => handleDelete(program._id)} className="btn btn-error btn-sm ml-5"><HiTrash /> </button>                          
    //             </div>
    //             <span className="border-2"></span>
    //             <div>
    //                 <p className="text-gray-500"><span className="font-bold text-black">Feedback:</span> {program?.feedback}</p>
    //             </div>
    //           </div>
    //         </div>
    //     ))}
    //   </div>