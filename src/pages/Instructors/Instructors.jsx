import React from 'react';
import { useQuery } from '@tanstack/react-query'
import InstructorsCard from '../InstructorsCard/InstructorsCard';
import useAxiosSecure from '../../Hooks/useAxiosSecure';

const Instructors = () => {
const [axiosSecure] = useAxiosSecure();
  const { data:instructors=[], error } = useQuery({
    queryKey: ['classes'],
    queryFn: async ()=>{
const res = await axiosSecure.get(`/allInstructor`);
return res.json();
} ,
  })
console.log(instructors);
  return (
    <div className='my-10'>
      <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8'>
        {
          instructors.map(instructor => <InstructorsCard instructor={instructor} key={instructor._id}></InstructorsCard>)
        }
      </div>
    </div>
  );
};

export default Instructors;