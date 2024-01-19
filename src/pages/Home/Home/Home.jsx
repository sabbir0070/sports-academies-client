import React from 'react';
import Banner from '../Banner/Banner';
import PopularInstructor from '../PopularInstructor/PopularInstructor';
import PopularClasses from '../PopularClasses/PopularClasses';
import AchieveMent from '../AchieveMent/AchieveMent';
import EventSchedule from '../EventSchedule/EventSchedule';
import Showcase from '../Showcase/Showcase';

const Home = () => {
  return (
    <div className='my-10'>
     <Banner></Banner>
<PopularClasses></PopularClasses>
<EventSchedule></EventSchedule>
<PopularInstructor></PopularInstructor>
<Showcase></Showcase>
<AchieveMent></AchieveMent>
</div>
  );
};

export default Home;