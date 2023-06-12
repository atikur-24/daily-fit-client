import { HiOutlineUserGroup } from "react-icons/hi";

const PopularClassesCard = ({item}) => {
    const {name, img, desc, price, students} = item;

    return (
        <div className="card bg-base-100 shadow-xl">
            <figure><img className="h-[261px] w-full" src={img} alt="gym-class" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{desc}</p>
                <div className="card-actions justify-between mt-3">
                    <div className="badge badge-secondary badge-outline font-medium lg:p-3">${price}</div>
                    <div className="badge badge-outline font-medium lg:p-3"><HiOutlineUserGroup className="mr-2" /> {students}</div>
                </div>
            </div>
        </div>
    );
};

export default PopularClassesCard;