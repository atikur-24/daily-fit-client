import { Link, useNavigate } from "react-router-dom";
import loginImg from "../../assets/login/login.svg";
import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
import SocialLogin from "../../components/SocialLogin";
import { useState } from "react";
import Swal from "sweetalert2";

const SignUp = () => {
    const { signUp, updateUserProfile } = useAuth();
    const [passwordMatchError, setPasswordMatchError] = useState('');
    const navigate = useNavigate();
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        if(data.password !== data.confirm) {
            return setPasswordMatchError('password do not match');
        }
        signUp(data.email, data.password)
         .then(() => {
            updateUserProfile(data.name, data.photoURL)
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Your Account has been created successfully',
                showConfirmButton: false,
                timer: 1500
              })
            reset();
            navigate('/');
         })
         .catch(error => console.error(error.message))
    };

  return (
    <section className="my-container">
      <div className="hero min-h-screen">
        <div className="w-full flex justify-between items-center flex-col lg:flex-row">
          <div className="w-2/3 lg:w-1/2">
            <img src={loginImg} alt="login" />
          </div>
          <div className="card w-full lg:w-1/2 border border-inherit">
            <div className="card-body p-8 lg:p-12">
              <h3 className="text-2xl lg:text-4xl font-semibold text-center md-6 lg:mb-12">
                Sign Up
              </h3>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-7">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-semibold">Name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Your name"
                    {...register("name", { required: true })}
                    className="input input-bordered mb-1"
                  />
                  {errors.name && (
                    <small className="text-red-600">
                      Name field is required
                    </small>
                  )}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-semibold">Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="Your email"
                    {...register("email", { required: true })}
                    className="input input-bordered mb-1"
                  />
                  {errors.email && (
                    <small className="text-red-600">
                      Email field is required
                    </small>
                  )}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-semibold">Photo URL</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Your Photo URL"
                    {...register("photoURL", { required: true })}
                    className="input input-bordered mb-1"
                  />
                  {errors.photoURL && (
                    <small className="text-red-600">
                      Photo URL field is required
                    </small>
                  )}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-semibold">Password</span>
                  </label>
                  <input
                    type="password"
                    placeholder="Your password"
                    {...register("password", {
                      required: true,
                      min: 6,
                      max: 20,
                      pattern:
                        /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])/,
                    })}
                    className="input input-bordered mb-1"
                  />
                  {errors.password?.type === "required" && (
                    <small className="text-red-600">
                      Password field is required
                    </small>
                  )}
                  {errors.password?.type === "min" && (
                    <small className="text-red-600">
                      Your password must be at least 6 characters
                    </small>
                  )}
                  {errors.password?.type === "max" && (
                    <small className="text-red-600">
                      Your password must be under 20 characters
                    </small>
                  )}
                  {errors.password?.type === "pattern" && (
                    <small className="text-red-600">
                      Your password must contain at least one digit, uppercase,lowercase and special characters
                    </small>
                  )}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-semibold">Confirm Password</span>
                  </label>
                  <input
                    type="password"
                    placeholder="Your Confirm password"
                    {...register("confirm", {
                      required: true,
                      min: 6,
                      max: 20,
                      pattern:
                        /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])/,
                    })}
                    className="input input-bordered mb-1"
                  />
                  {errors.confirm?.type === "required" && (
                    <small className="text-red-600">
                      Confirm Password field is required
                    </small>
                  )}
                  {errors.password?.type === "min" && (
                    <small className="text-red-600">
                      Your Confirm password must be at least 6 characters
                    </small>
                  )}
                  {errors.password?.type === "max" && (
                    <small className="text-red-600">
                      Your Confirm password must be under 20 characters
                    </small>
                  )}
                  {errors.password?.type === "pattern" && (
                    <small className="text-red-600">
                      Your password must contain at least one digit, uppercase, lowercase and special characters
                    </small>
                  )}
                </div>
               { passwordMatchError && <p className="text-red-600"><small>{passwordMatchError}</small></p>}
                <div className="form-control">
                  <input type="submit" value="Sign Up"className="my-btn" />
                </div>
              </form>
              <div className="divider my-8">Or Sign in with google</div>
              <SocialLogin />
              <p className="text-center text-gray-500 pt-6 lg:pt-12">
                You have an already account? <Link to="/login" className="text-black font-semibold">Login</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
