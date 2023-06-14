import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../../../../components/SectionTitle";
import useAuth from "../../../../hooks/useAuth";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { HiOutlinePencilAlt, HiTrash } from "react-icons/hi";
import Swal from "sweetalert2";

const MyAllClass = () => {
    const { user, loading } = useAuth();
    const [ axiosSecure ] = useAxiosSecure();

    const { data: classes = [], refetch } = useQuery({
        queryKey: [ 'classes', user?.email ],
        enabled: !loading,
        queryFn: async() => {
            const res = await axiosSecure(`/classes?email=${user?.email}`);
            return res.data;
        }
    })


    const handleDelete = id => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/users/${id}`, {
                    method: 'DELETE'
                })
                .then(res => res.json())
                .then(data => {
                    if(data.deletedCount > 0) {
                        refetch();
                        Swal.fire(
                            'Deleted!',
                            'User has been deleted.',
                            'success'
                          )
                    }
                })
              
            }
          })
        }
    
    
    return (
        <section>
            <div className="my-5">
                <SectionTitle heading="My All Classes" subHeading="Best Classes"  />
            </div>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    {/* head */}
                    <thead className="bg-[#003a70] text-white">
                        <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Enrolled Students</th>
                        <th>Status</th>
                        <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {classes.map((program, idx) => (
                        <tr key={program._id}>
                            <td>{idx + 1}</td>
                            <td>
                                <div className="flex items-center space-x-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={program.image} alt="Name" />
                                        </div>
                                    </div>
                                    <div className="font-bold">{program.name}y</div>
                                </div>
                            </td>
                            <td>0</td>
                            <td className={program.status === "approved" ? "text-green-600 font-bold" : " text-orange-600 font-bold"}>{program.status}</td>
                            <td>
                                <button className="btn btn-accent"><HiOutlinePencilAlt /></button>
                                <button onClick={ () => handleDelete(program._id)} className="btn btn-error ml-3"><HiTrash /> </button>
                            </td>
                        </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </section>
    );
};

export default MyAllClass;