// import { useQuery } from '@tanstack/react-query'
// import React, { useEffect, useState } from 'react';
import MySelectClassRow from '../MySelectClassRow/MySelectClassRow';
import Swal from 'sweetalert2';
import useAuth from '../../../Hooks/useAuth';
import SectionTitle from '../../../Component/SectionTitle';
import useSelectCart from '../../../Hooks/useSelectCart';

const MySelectedClass = () => {
  const { user } = useAuth();
  const [selectedClass, refetch,isLoading] = useSelectCart();
  console.log(selectedClass);
  const total = selectedClass?.reduce((sum, clases) => clases.price + sum, 0);

  const handleDelete = id => {
    console.log(id);
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:4000/selectClass/${id}`, {
          method: 'DELETE'
        })
          .then(res => res.json())
          .then(data => {
            console.log(data);
            if (data.deletedCount > 0) {
              refetch();
              Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
              )

            }
          })

      }
    })
  }

  return (
    <div className='w-full bg-gray-300 px-4 pt-4 pb-20 text-white mt-5'>
      <SectionTitle subheading="Class Show Now" heading="All Select Class"></SectionTitle>
      <div className='flex uppercase gap-10 justify-between items-center'>
        <h2 className='font-semibold  text-xl'>Total Selected Class: {selectedClass?.length}</h2>
        <h2 className='font-semibold text-xl'>Total Price: $ {total}</h2>
        <button className="btn btn-sm bg-pink-500 text-white font-semibold">Payment</button>
      </div>
      <div className="overflow-x-auto mt-9">
        <table className="table border rounded">
          {/* head */}
          <thead className='font-semibold text-lg text-purple-700'>
            <tr>
              <th>#</th>
              <th>Image</th>
              <th>Class Name</th>
              <th>Instructor</th>
              <th>Email</th>
              <th>Seats</th>
              <th>Price</th>
              <th>Delete</th>
              <th>Payment</th>
            </tr>
          </thead>
          <tbody>
            {
              selectedClass?.map((selectClass, index) => <MySelectClassRow
                key={selectClass._id}
                selectClass={selectClass}
                handleDelete={handleDelete}
                index={index}
              ></MySelectClassRow>)
            }

          </tbody>
        </table>
      </div>

    </div>
  );
};

export default MySelectedClass;