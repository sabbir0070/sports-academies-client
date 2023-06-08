import React from 'react';
import Banner from '../Banner/Banner';
import PopularInstructor from '../PopularInstructor/PopularInstructor';
import PopularClasses from '../PopularClasses/PopularClasses';

const Home = () => {
  return (
    <div className='my-10'>
     <Banner></Banner>
<PopularClasses></PopularClasses>
<PopularInstructor></PopularInstructor>
</div>
  );
};

export default Home;