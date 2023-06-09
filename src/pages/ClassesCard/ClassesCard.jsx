import React from 'react';
import useAuth from '../../Hooks/useAuth';
import { useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const ClassesCard = ({singleClass}) => {
const {_id,name,image,instructor,seats,price} = singleClass;
    const {user} =useAuth();
    const navigate = useNavigate();
    const location = useLocation();

    const handleAddClass = add =>{
        if(user && user.email){
            const selectClasses = {selectClassId: _id, name, image, instructor, seats, price, email: user?.email}
            fetch('http://localhost:4000/selectClass', {
                method: 'POST',
               headers: {
                'content-type' : 'application/json'
               },
               body: JSON.stringify(selectClasses)
            })
            .then(res => res.json())
            .then(data => {
console.log(data);
                if(data.insertedId){
                    Swal.fire({
                        position: 'top-center',
                        icon: 'success',
                        title: 'Your class selected',
                        showConfirmButton: false,
                        timer: 1500
                      })
                }
            })
        }
        else{
            Swal.fire({
                title: 'Please Login First',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login Now'
              }).then((result) => {
                if (result.isConfirmed) {
                  navigate('/login', {state: {from: location}})
                }
              })
        }
    }

  return (
    <div className="card w-96 bg-base-200 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={image} alt="Shoes" className="rounded-xl transition-transform duration-1000 ease-in-out hover:scale-125 cursor-zoom-in" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Name:{name}</h2>
   <p> Instructor: {instructor}.</p>
    <p>Seats: {seats}.</p>
    <p> Price: {price}.</p>
    <div className="card-actions">
      <button onClick={handleAddClass} className="btn btn-primary">Select</button>
    </div>
  </div>
</div>
  );
};

export default ClassesCard;