import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const ClassesCard = ({ item }) => {
    const { _id, name, img, price, instructor_name, available_seats } = item;
    const { user } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();

    const handleAddToCart = () => {
        if(user) {
            const cartProgram = { programId: _id, name, img, price, email: user.email } 
            fetch('http://localhost:5000/carts', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(cartProgram)
            })
             .then(res => res.json())
             .then(data => {
                 if(data.insertedId) {
                    toast("Added new class");
                }
             })
        }
        else {
            Swal.fire({
                title: 'Please login to select the class',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login now'
              }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', {state: {from: location}})
                }
              }) 
        }
    }

    return (
        <div className={`${available_seats <= 0 ? "bg-red-700 text-white" : ""} card card-compact border border-inherit`}>
        <figure><img className="h-[261px] w-full p-4" src={img} alt="class" /></figure>
        <div className="card-body">
            <h2 className="card-title">{name}</h2>
            <div className="">
                <p className="my-2 text-[16px] text-gray-600">Trainer: <span className="text-black font-medium">{instructor_name}</span></p>
                <p className="my-2 text-[16px] text-gray-600">Available Seats: <span className="text-black font-medium">{available_seats}</span></p>
            </div>
            <div className="card-actions justify-between items-center">
                <p className="text-xl text-[#f34e3a]">${price}</p>
                <button onClick={ handleAddToCart } disabled={available_seats <= 0 } className="btn btn-primary">select</button>
                <ToastContainer />
            </div>
        </div>
        </div>
    );
};

export default ClassesCard;