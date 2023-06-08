import { useQuery } from '@tanstack/react-query'
import useAuth from './useAuth';

const useClasses = () => {
const {user} = useAuth();

const { refetch,isLoading, isError, data:classes=[], error } = useQuery({
    queryKey: ['classes'],
    queryFn: async ()=>{
const res = await fetch(`http://localhost:4000/allClasses`);
return res.json();
} ,
  })
return [classes,refetch]
};

export default useClasses;