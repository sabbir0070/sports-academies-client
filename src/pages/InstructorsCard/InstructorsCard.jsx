import React from 'react';

const InstructorsCard = () => {
  return (
  <div className="card w-96 bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src= {image} alt="Shoes" className="rounded-xl transition-transform duration-1000 ease-in-out hover:scale-125 cursor-zoom-in" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Name: {name}</h2>
    <p>Email: {email}</p>
    <div className="card-actions">
      <button className="btn btn-primary">Favorite</button>
    </div>
  </div>
</div>
  );
};

export default InstructorsCard;