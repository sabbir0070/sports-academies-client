import React, { useEffect, useState } from 'react';
// import useClasses from '../../Hooks/useClasses';
import ClassesCard from '../ClassesCard/ClassesCard';
// import useApproveClass from '../../Hooks/useApproveClass';

const AllClasses = () => {
const [allApprovedClasses,setAllApprovedClasses] = useState([]);
useEffect(()=>{
fetch(`http://localhost:4000/allApprovedClasses/${"approved"}`)
.then(res=>res.json())
.then(data=>{
console.log(data,20)
setAllApprovedClasses(data)
})
},[])

// const [allApprovedClasses] = useApproveClass();
// console.log(allApprovedClasses);
  return (
   <div className='my-10'>
<h2 className='text-center text-blue-600 text-3xl mb-5'>All Instructor Classes</h2>
 <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8'>
      {
allApprovedClasses.map(singleClass=><ClassesCard singleClass={singleClass} key={singleClass._id}></ClassesCard> )
}
    </div>
</div>
  );
};

export default AllClasses;