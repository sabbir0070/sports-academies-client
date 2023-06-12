import React,{useState,useEffect} from 'react';
import SectionTitle from '../../../Component/SectionTitle';
import PopularInstructorCard from '../Home/PopularInstructorCard/PopularInstructorCard';

const PopularInstructor = () => {
const [PopularInstructor, setPopularInstructor] = useState([]);
useEffect(()=>{
fetch(`http://localhost:4000/popularInstructors/${'instructor'}`).then(res=>res.json())
.then(data=>{
setPopularInstructor(data)})
},[])
  return (
    <div className='my-10'>
      <SectionTitle heading="Popular Instructor" subHeading="Popular Instructor Information"></SectionTitle>
<div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8'>
{
PopularInstructor.map(instructor=><PopularInstructorCard  instructor={instructor} key={instructor.name} ></PopularInstructorCard> )
}
</div>
</div>
  );
};

export default PopularInstructor;