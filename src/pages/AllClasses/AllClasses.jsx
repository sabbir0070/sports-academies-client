import React, { useEffect } from 'react';
import useClasses from '../../Hooks/useClasses';
import ClassesCard from '../ClassesCard/ClassesCard';

const AllClasses = () => {
const [classes] = useClasses();
console.log(classes);
  return (
   <div className='my-10'>
<h2 className='text-center text-blue-600 text-3xl mb-5'>All Instructor Classes</h2>
 <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8'>
      {
classes.map(singleClass=><ClassesCard singleClass={singleClass} key={singleClass._id}></ClassesCard> )
}
    </div>
</div>
  );
};

export default AllClasses;