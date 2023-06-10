import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';
import useInstructor from '../Hooks/useInstructor';

const InstructorRoute = ({children}) => {
// console.log(location)
const {user, loading} = useAuth();
const [isInstructor, isInstructorLoading] = useInstructor();
const location = useLocation();

if(loading || isInstructorLoading){
 return <div> <progress  className='progress w-56'></progress>  </div>
}

if(user && isInstructor){
return children;
}
  return <Navigate to="/" state={{from:location}} replace></Navigate>
};

export default InstructorRoute;