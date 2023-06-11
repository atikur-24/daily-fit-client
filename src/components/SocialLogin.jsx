import { useLocation, useNavigate } from "react-router-dom";
import googleImg from "../assets/login/google.png"
import useAuth from "../hooks/useAuth";
import Swal from "sweetalert2";

const SocialLogin = () => {
    const { googleSignIn } = useAuth();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    const navigate = useNavigate();

    const handleGoogleLogin = () => {
        googleSignIn()
            .then(loggedUser => {
                console.log(loggedUser);
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Login successfully',
                    showConfirmButton: false,
                    timer: 1500
                  })
                navigate(from, {replace: true});
            })
            .catch(error => console.error(error.message))
    }
    return (
        <div>
            <button onClick={handleGoogleLogin} className="btn btn-block"><img src={googleImg} alt="google" /> Google</button>
        </div>
    );
};

export default SocialLogin;