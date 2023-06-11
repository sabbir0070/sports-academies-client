import React from 'react';
import Swal from 'sweetalert2';
import useClasses from '../../../Hooks/useClasses';

const ManageClassTable = ({ index, singleClass }) => {
  const { _id, name, email, instructor, image, seats, price, status, } = singleClass;
  console.log(singleClass);
  const [,refetch] = useClasses();

 const handleStatus = (singleClass, status) => {
    fetch(`http://localhost:4000/classes/${singleClass._id}/?status=${status}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          refetch();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "status update successfully",
            showConfirmButton: "false",
            timer: 1500,
          });
        }
      });
  };

  return (
    <>
      <tr>
        <th className=''>
          {index + 1}
        </th>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className=" rounded-lg w-20 h-16">
                <img src={image} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
          </div>
        </td>
        <td>{name}</td>
        <td>{instructor}</td>
        <td>{email}</td>
        <td>{seats}</td>
        <td>{price}</td>
    <td>  <button className='btn bnt-primary btn-sm'>{status}</button> </td>  
        {<> <td>
          <button
            disabled={ 
              status === "deny" || status === "approved"
            }
            onClick={() => handleStatus(singleClass, "approved")}
            className='btn btn-primary btn-sm hover:bg-orange-600'>Approve</button>
        </td>
          <td>
            <button
              disabled={
                status === "deny" || status === "approved"
              }
              onClick={() => handleStatus(singleClass, "deny")}
              className='btn btn-primary btn-sm hover:bg-orange-500'>Deny</button>
          </td> </>}
        <td>Feedback</td>
      </tr>
    </>
  );
};

export default ManageClassTable;