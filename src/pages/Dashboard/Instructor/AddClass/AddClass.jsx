import SectionTitle from "../../../../components/SectionTitle";
import { useForm } from "react-hook-form"
import useAuth from "../../../../hooks/useAuth";
import { } from "react-icons/hi";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";

const img_hosting_token = import.meta.env.VITE_IMAGE_UPLOAD_TOKEN;

const AddClass = () => {
    const { user } = useAuth();
    const { register, handleSubmit, reset, formState: { errors }, } = useForm();
    const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`;
    const [ axiosSecure ] = useAxiosSecure();

    const onSubmit = (data) => {
        const formData = new FormData();
        formData.append('image', data.image[0])

        fetch(img_hosting_url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgResponse => {
                if(imgResponse.success) {
                    const imgURL = imgResponse.data.display_url;
                    const { name, instructor_name, email, price, available_seats, rating, description } = data;
                    const newClass = { name, image:imgURL, instructor_name, email, price: parseFloat(price), available_seats: parseInt(available_seats), rating: parseFloat(rating), description, status: "pending", feedback: "", enrolled_students: 0 };
                    axiosSecure.post('/classes', newClass)
                    .then(data => {
                        if(data.data.insertedId){
                            reset();
                            Swal.fire({
                                position: 'top-end',
                                icon: 'success',
                                title: 'New Class added successfully',
                                showConfirmButton: false,
                                timer: 1500
                            })
                        }
                    })
                }
            })
    };

    return (
        <section className="">
            <div className="my-5">
                <SectionTitle heading="Add A Class" subHeading="What's New" />
            </div>
            <div>
                <form onSubmit={handleSubmit(onSubmit)} className="card-body bg-base-200 rounded-lg p-20">
                    <div className="space-y-5">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold">Class Name <span className="text-red-600">*</span></span>
                            </label>
                            <input {...register("name", { required: true })} type="text" placeholder="Class Name"  className="input input-bordered" />
                            {errors.name && <span className="text-red-600" >Class field is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold">Upload Class Image <span className="text-red-600">*</span></span>
                            </label>
                            <input {...register("image", { required: true })} type="file" className="file-input file-input-bordered w-full" />
                            {errors.image && <span className="text-red-600" >Image field is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold">Instructor Name</span>
                            </label>
                            <input readOnly {...register("instructor_name")} defaultValue={ user?.displayName } type="text" placeholder="Instructor Name"  className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold">Instructor email</span>
                            </label>
                            <input readOnly {...register("email")} defaultValue={ user?.email } type="text" placeholder="Instructor email"  className="input input-bordered" />
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold">Price <span className="text-red-600">*</span></span>
                                </label>
                                <input {...register("price", { required: true })} type="number" placeholder="Price" className="input input-bordered" />
                                {errors.price && <span className="text-red-600" >Price field is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold">Available Seats <span className="text-red-600">*</span></span>
                                </label>
                                <input {...register("available_seats", { required: true })} type="number" placeholder="Available seats" className="input input-bordered" />
                                {errors.available_seats && <span className="text-red-600" >Available Seats field is required</span>}
                            </div>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold">Rating <span className="text-red-600">*</span></span>
                            </label>
                            <input {...register("rating", { required: true })} type="text" placeholder="Rating" className="input input-bordered" />
                            {errors.rating && <span className="text-red-600" >Rating field is required</span>}
                        </div>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold">Detail Description <span className="text-red-600">*</span></span>
                        </label>
                        <textarea {...register("description", { required: true })} className="textarea textarea-bordered h-28 resize-none" placeholder="Detail description" ></textarea>
                        {errors.description && <span className="text-red-600" >Description field is required</span>}
                    </div>
                    <div className="form-control mt-6">
                        <input className="my-btn" type="submit" value="Add A Class" />
                    </div>
                </form>
            </div>
        </section>
    );
};

export default AddClass;