import React from 'react';
import useAxiosSecure from '../../../Hooks/UseAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import useAuth from '../../../Hooks/useAuth';
import PaymentHistoryCard from './PaymentHistoryCard';

const PaymentHistory = () => {
  const { loading,user } = useAuth();
  const [axiosSecure] = useAxiosSecure();
  const { data: payments= [], error } = useQuery({
    queryKey: ['payments'],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure.get(`/payments?email=${user?.email}`);
      return res.data;
    },
  })
  console.log(payments);

  return (
    <div>
      <h2 className='text-center text-3xl my-4  text-blue-800'> Payment History  </h2>
 <div className=''>
{
payments.map(payment=><PaymentHistoryCard
 key={payment._id}
 payment={payment}>
</PaymentHistoryCard>)
}
</div>

</div>    
  );
};

export default PaymentHistory;