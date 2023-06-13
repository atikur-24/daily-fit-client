import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../../../components/SectionTitle";
import { HiTrash } from "react-icons/hi";
import Swal from "sweetalert2";

const ManageUser = () => {
    const { data: users = [], refetch } = useQuery(['users'], async () => {
        const res = await fetch('http://localhost:5000/users')
        return res.json();
    })

    const handleMakeAdmin = user => {
        fetch(`http://localhost:5000/users/admin/${user._id}`, {
            method: 'PATCH'
        })
          .then(res => res.json())
          .then(data => {
            if(data.modifiedCount > 0) {
                refetch();
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: `${user.name} is an admin`,
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
          })
    }

    const handleMakeInstructor = user => {
        fetch(`http://localhost:5000/users/instructor/${user._id}`, {
            method: 'PATCH'
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount > 0) {
                refetch();
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: `${user.name} is an instructor`,
                    showConfirmButton: false,
                    timer: 1500
                })
            }
        })
    }

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
                <SectionTitle heading="Manage All Users" subHeading={`Total ${users.length} User`} />
            </div>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Role</th>
                        <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user, idx) => (
                        <tr key={user._id}>
                            <td>{idx + 1}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td className="space-y-2">
                                <button disabled={user?.role === 'admin'} onClick={ () => handleMakeAdmin(user) } className="btn btn-xs btn-neutral">Make Admin</button> <br />
                                <button disabled={user?.role === 'instructor'} onClick={ () => handleMakeInstructor(user) } className="btn btn-xs btn-neutral">Make Instructor</button>
                            </td>
                            <td>
                                <button onClick={ () => handleDelete(user._id)} className="btn text-[18px] btn-error"><HiTrash /> </button>
                            </td>
                        </tr>
                        ))}
                    </tbody>
                </table>
      </div>
        </section>
    );
};

export default ManageUser;