import React from 'react';

const ClassesCard = ({singleClass}) => {
const {Name,Image,Instructor,Seats,Price} = singleClass;
  return (
    <div className="card w-96 bg-base-200 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={Image} alt="Shoes" className="rounded-xl transition-transform duration-1000 ease-in-out hover:scale-125 cursor-zoom-in" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Name:{Name}</h2>
   <p> Instructor: {Instructor}.</p>
    <p>Seats: {Seats}.</p>
    <p> Price: {Price}.</p>
    <div className="card-actions">
      <button className="btn btn-primary">Select</button>
    </div>
  </div>
</div>
  );
};

export default ClassesCard;