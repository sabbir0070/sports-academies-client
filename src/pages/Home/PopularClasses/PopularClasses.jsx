import React, { useEffect, useState } from 'react';
import PopularClassCard from '../PopularClassCard/PopularClassCard';
import SectionTitle from '../../../Component/SectionTitle';

const PopularClasses = () => {
const [popularClass,setPopularClass] = useState([]);
useEffect(()=>{
fetch(`popularClass.js`).then(res=>res.json())
.then(data=>setPopularClass(data))

},[])
  return (
    <div className="my-10">
<SectionTitle heading='Popular Classes' subHeading="Popular Class Information">

</SectionTitle>
<div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8'>
      {
popularClass.map(classes=><PopularClassCard key={classes.email} classes={classes}></PopularClassCard>)
}
    </div>
</div>
  );
};

export default PopularClasses;