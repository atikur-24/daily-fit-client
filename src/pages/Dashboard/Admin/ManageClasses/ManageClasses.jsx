import Swal from "sweetalert2";
import SectionTitle from "../../../../components/SectionTitle";
import useClasses from "../../../../hooks/useClasses";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ManageClasses = () => {
    const [ classes, refetch ] = useClasses();

    const handleApproved = program => {
        fetch(`https://daily-fit-server.vercel.app/classes/approved/${program._id}`, {
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

    const handleDenied = program => {
        fetch(`https://daily-fit-server.vercel.app/classes/denied/${program._id}`, {
            method: 'PATCH',
        })
         .then(res => res.json())
         .then(data => {
            if(data.modifiedCount > 0) {
                refetch();
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: `${program.name} is Denied`,
                    showConfirmButton: false,
                    timer: 1000
                  })
            }
         })
    }
    
    const handleSendFeedback = id => {
        Swal.fire({
            title: 'Send Feedback to instructor',
            input: 'text',
            inputAttributes: {
              autocapitalize: 'off'
            },
            showCancelButton: true,
            confirmButtonText: 'Send',
            showLoaderOnConfirm: true,
            preConfirm: (feedback) => {
                const comment = { message: feedback }
                fetch(`https://daily-fit-server.vercel.app/classes/${id}`, {
                    method: 'PUT',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(comment)
                })
                .then(res => res.json())
                .then(data => {
                    if(data.modifiedCount > 0) {
                        toast("Feedback Send successfully!")
                    }
                })
            },
          })
    }

    return (
        <section className="mb-10">
            <div className="my-5">
                <SectionTitle heading="Manage Classes" subHeading="At a Glance"  />
            </div>
            <div className="overflow-x-auto">
                <ToastContainer />
                <table className="table w-full">
                    {/* head */}
                    <thead className="bg-slate-500 text-white">
                        <tr>
                        <th>Image</th>
                        <th>Name</th>
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
                                <button disabled={program.status === "approved" || program.status === "denied"} onClick={ () => handleApproved(program) } className="btn btn-xs btn-success">Approve</button> <br />
                                <button disabled={program.status === "approved" || program.status === "denied"} onClick={ () => handleDenied(program) } className="btn btn-xs btn-error">Deny</button> <br />
                                <button onClick={ () => handleSendFeedback(program._id)  } className="btn btn-xs btn-neutral">Feedback</button>
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