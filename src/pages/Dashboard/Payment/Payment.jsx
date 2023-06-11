

import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckOutForm from '../CheckoutForm/CheckoutForm';
import { useLoaderData } from 'react-router-dom';
import SectionTitle from '../../../Component/SectionTitle';

const Payment = () => {
  const selectClass = useLoaderData();
  const stripePromise = loadStripe(import.meta.env.VITE_payment_gateway_pk)

  return (
    <div className=''>
      <SectionTitle subHeading="please provide" heading="Payment">
</SectionTitle>
      <h2 className='text-center'>takar hisab korte tako</h2>
      <Elements stripe={stripePromise}>

        <CheckOutForm
          name ={selectClass.name}
          price={selectClass.price}
          id={selectClass._id}
          selectClassId={selectClass.selectClassId}
        >
        </CheckOutForm>
      </Elements>
    </div>
  );
};

export default Payment;