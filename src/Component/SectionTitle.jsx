import React from 'react';

const SectionTitle = ({ heading, subHeading }) => {
  return (
    <div className='text-center mx-auto md:w-4/12'>
      <p className=' text-yellow-500 text-lg mb-3'> --- {subHeading} ---</p>
      <h3 className='text-4xl uppercase border-y-4 py-2'> {heading} </h3>
    </div>
  );
};

export default SectionTitle;