import Swal from "sweetalert2";
import useCart from "../../../../hooks/useCart";
import SectionTitle from "../../../../components/SectionTitle";
import { HiTrash } from "react-icons/hi";

const SelectedClass = () => {
    const [ cart, refetch ] = useCart();
    
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
                fetch(`http://localhost:5000/carts/${id}`, {
                    method: 'DELETE'
                })
                .then(res => res.json())
                .then(data => {
                    if(data.deletedCount > 0) {
                        refetch();
                        Swal.fire(
                            'Deleted!',
                            'Your file has been deleted.',
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
                <SectionTitle heading="Your Selected Classes" subHeading={`Total ${cart.length} Class`} />
            </div>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                    <tr>
                        <th>SL</th>
                        <th>class image</th>
                        <th>class name</th>
                        <th>price</th>
                        <th>actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        cart.map( (program, idx) => <tr key={program._id}>
                        <td>{idx + 1}</td>
                        <td>
                            <div className="flex programs-center space-x-3">
                                <div className="avatar">
                                <div className="mask mask-squircle w-16  h-1w-16 ">
                                    <img src={program.img} alt="class" />
                                </div>
                                </div>
                            </div>
                        </td>
                        <td>{program.name}</td>
                        <td className="">${program.price}</td>
                        <td>
                            <button onClick={ () => handleDelete(program._id)} className="btn btn-accent mr-3"> pay</button>
                            <button onClick={ () => handleDelete(program._id)} className="btn btn-error"> <HiTrash /> </button>
                        </td>
                    </tr>)
                    }
                    
                    </tbody>
                </table>
            </div>
        </section>
    );
};

export default SelectedClass;

