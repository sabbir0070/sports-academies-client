import React from 'react';
import useInstructors from '../../Hooks/useInstructors';
import InstructorsCard from '../InstructorsCard/InstructorsCard';

const Instructors = () => {
  const [instructors] = useInstructors();
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