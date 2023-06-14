import Swal from "sweetalert2";
import SectionTitle from "../../../../components/SectionTitle";
import useClasses from "../../../../hooks/useClasses";

const ManageClasses = () => {
    const [ classes, refetch ] = useClasses();

    const handleApproved = program => {
        fetch(`http://localhost:5000/classes/approved/${program._id}`, {
            method: 'PATCH',
        })
         .then(res => res.json())
         .then(data => {
            if(data.modifiedCount > 0) {
                refetch();
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: `${program.name} is approved`,
                    showConfirmButton: false,
                    timer: 1000
                  })
            }
         })
    }

    const handleDeny = program => {

    }

    const handleSendFeedback = program => {

    }

    return (
        <section className="mb-10">
            <div className="my-5">
                <SectionTitle heading="Manage Classes" subHeading="At a Glance"  />
            </div>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    {/* head */}
                    <thead className="bg-slate-500 text-white">
                        <tr>
                        <th>Image</th>
                        <th>name</th>
                        <th>Instructor Name</th>
                        <th>Instructor Email</th>
                        <th>Available Seats</th>
                        <th>Price</th>
                        <th>Status</th>
                        <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {classes.map((program) => (
                        <tr key={program._id} className="hover border-b-4">
                            <td>
                                <div className="avatar">
                                    <div className="mask mask-squircle w-14 h-14">
                                        <img src={program.image} alt="Name" />
                                    </div>
                                </div>
                            </td>
                            <td>{program.name}</td>
                            <td>{program.instructor_name}</td>
                            <td>{program.email}</td>
                            <td>{program.available_seats}</td>
                            <td>${program.price}</td>
                            <td className={program.status === "approved" ? "text-green-600 font-bold" : " text-orange-600 font-bold"}>{program.status}</td>
                            <td className="space-y-3">
                                <button disabled={program.status === "approved"} onClick={ () => handleApproved(program) } className="btn btn-xs btn-success">Approved</button> <br />
                                <button disabled={program.status === "approved"} onClick={ () => handleDeny(program) } className="btn btn-xs btn-error">Deny</button> <br />
                                <button onClick={ () => handleSendFeedback(program) } className="btn btn-xs btn-neutral">Feedback</button>
                            </td>
                        </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </section>
    );
};

export default ManageClasses;