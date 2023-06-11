import { Link, useRouteError } from 'react-router-dom';
import errorImg from "../../assets/error/error.jpg"
import { HiArrowLeft } from 'react-icons/hi';
const ErrorPage = () => {
    const {error} = useRouteError();

    return (
        <section className='my-container flex flex-col lg:flex-row items-center justify-between'>
            <div className='w-1/2'>
                <img src={errorImg} alt="error" />
            </div>
            <div className='space-y-10 mr-16 lg:mr-20'>
                <h2 className='text-4xl tracking-wide font-bold'>Page Not Found</h2>
                <h5 className='font-semibold'>{error?.message}</h5>
                <button className='lg:pt-10'>
                <Link to='/' className='my-btn inline-flex items-center gap-3'> <HiArrowLeft /> Back to Home page</Link>
                </button>
            </div>
        </section>
    );
};

export default ErrorPage;