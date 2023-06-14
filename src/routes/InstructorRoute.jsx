import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import useInstructor from '../hooks/useInstructor';
import Spinner from '../components/Spinner';

const InstructorRoute = ({ children }) => {
    const { user, loading } = useAuth();
    const [ isInstructor, isInstructorLoading ] = useInstructor()
    const location = useLocation();

    if(loading || isInstructorLoading) {
        return <Spinner />
    }
    else if(user && isInstructor) {
        return children 
    }

    return <Navigate to='/login' state={{ from: location }} replace />
};

export default InstructorRoute;