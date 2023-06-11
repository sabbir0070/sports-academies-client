import React from 'react';
import useAuth from '../../../Hooks/useAuth';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const MyEnrolledClasses = () => {

 const { loading,user } = useAuth();
  const [axiosSecure] = useAxiosSecure();
  const { data: enrollStudent= [], error } = useQuery({
    queryKey: ['enrollStudent'],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure.get(`/payments?email=${user?.email}`);
      return res.data;
    },
  })
console.log(enrollStudent);

  return (
    <div>
      <h2>My Enrolled Classes</h2>
    </div>
  );
};

export default MyEnrolledClasses;