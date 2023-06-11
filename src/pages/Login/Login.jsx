import { Link, useLocation, useNavigate } from 'react-router-dom';
import loginImg from '../../assets/login/login.svg';
import Swal from 'sweetalert2';
import { useState } from 'react';
import useAuth from '../../hooks/useAuth';
import SocialLogin from '../../components/SocialLogin';
import { HiEye, HiEyeOff } from 'react-icons/hi';

const Login = () => {
    const { login } = useAuth();
    const [error, setError] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    const navigate = useNavigate();

    const handleLogin = event  => {
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        setError('');
        
        login(email, password)
         .then(()=> {
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Your Account has been created successfully',
                showConfirmButton: false,
                timer: 1500
              })
            form.reset();
            navigate(from, {replace: true});
         })
         .catch(error => setError(error.message))
    }

    return (
        <section className="my-container">
            <div className="hero min-h-screen">
                <div className="w-full flex justify-between items-center flex-col lg:flex-row">
                    <div className="w-2/3 lg:w-1/2">
                      <img src={loginImg} alt="login" />
                    </div>
                    <div className="card w-full lg:w-1/2 border border-inherit">
                        <div className="card-body p-8 lg:p-12">
                            <h3 className='text-2xl lg:text-4xl font-semibold text-center md-6 lg:mb-12'>Login</h3>
                            <form onSubmit={handleLogin} className='space-y-7'>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-semibold">Email</span>
                                    </label>
                                    <input required type="email" placeholder="Your email" name="email" className="input input-bordered" />
                                </div>
                                <div className="form-control relative">
                                    <label className="label">
                                        <span className="label-text font-semibold">Password</span>
                                    </label>
                                    <input required type={showPassword ? "text": "password"} placeholder="Your password" name="password" className="input input-bordered" />
                                    <span onClick={() => setShowPassword(!showPassword)} className="absolute top-[63%] right-4 cursor-pointer">
                                        {showPassword ? <HiEyeOff /> : <HiEye />}
                                    </span>
                                </div>
                                <div className="form-control">
                                    {error && <p className='text-red-600 pb-2'><small>{error}</small></p>}
                                    <input type="submit" value="Sign In" className='my-btn' />
                                </div>
                            </form>
                            <div className="divider my-8">Or Sign in  with google</div>
                            <SocialLogin />          
                            <p className="text-center text-gray-500 pt-6 lg:pt-12"> To New Daily Fit? <Link to="/signUp" className="text-black font-semibold">Sign Up</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Login;