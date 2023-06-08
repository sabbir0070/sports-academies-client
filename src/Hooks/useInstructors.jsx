
import { useQuery } from '@tanstack/react-query';

const useInstructors = () => {
const { refetch,isLoading, isError, data:instructors=[], error } = useQuery({
    queryKey: ['instructors'],
    queryFn: async ()=>{
const res = await fetch(`http://localhost:4000/allInstructors`);
return res.json();
} ,
  })
return [instructors,refetch]
};

export default useInstructors;