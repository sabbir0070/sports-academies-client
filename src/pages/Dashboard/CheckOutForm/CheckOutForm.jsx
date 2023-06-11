import { useStripe, CardElement, useElements, } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import useAxiosSecure from '../../../Hooks/UseAxiosSecure';
import useAuth from '../../../Hooks/useAuth';
// import './CheckOutForm.css'
// import {CardElement, Elements, useElements, useStripe} from '../../src';
const CheckOutForm = ({ price, selectedClass }) => {
console.log(selectedClass,222);
  // console.log(price);
  const stripe = useStripe();
  const elements = useElements();
  const [cardError, setCardError] = useState('');
  const [transactionId, setTransactionId] = useState('');
  const [clientSecret, setClientSecret] = useState('');
  const [axiosSecure] = useAxiosSecure();
  const { user } = useAuth();
  const [processing, setProcessing] = useState(false);
  useEffect(() => {
    if (price > 0) {
      axiosSecure.post('/create-payment-intent', { price })
        .then(res => {
          console.log(res.data.clientSecret);
          setClientSecret(res.data.clientSecret)
        })
    }

  }, [price, axiosSecure])

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);
    console.log(card);
    if (card == null) {
      return;
    }
    const { error } = await stripe.createPaymentMethod({
      type: 'card',
      card,
    })
    if (error) {
      setCardError(error.message)
      console.log(error)
    }
    else {
      setCardError('')

      // console.log('payment method ok', paymentMethod);
    }
    setProcessing(true)
    const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
      clientSecret, {
      payment_method: {
        card: card,
        billing_details: {
          email: user?.email || 'anonymous',
          name: user?.displayName || 'anonymous',
        },
      },
    })
    // .then(function(result) {
    //   // Handle result.error or result.paymentIntent
    // });
    if (confirmError) {
      console.log(confirmError);
      setCardError(confirmError)
    }
    console.log("payment Intent", paymentIntent);
    setProcessing(false)
    if (paymentIntent.status === 'succeeded') {
      setTransactionId(paymentIntent.id)
      //  Save payment information
      const payment = {
        email: user?.email, transactionId: paymentIntent.id,
        price,
        date: new Date(),
        quantity: selectedClass.length,
        cartItems: selectedClass.map(item => item._id),
        menuItems: selectedClass.map(item => item.foodId),
        orderStatus: 'service pending',
        itemName: selectedClass.map(item => item.name)
      }
      axiosSecure.post('/payments', payment)
        .then(res => {
          console.log(res.data)
          if (res.data.insertedId) {
            alert('post data ok')
          }
        })
    }

  }

  return (
    <>
      <form className='px-10' onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: '16px',
                color: '#424770',
                '::placeholder': {
                  color: '#aab7c4',
                },
              },
              invalid: {
                color: '#9e2146',
              },
            },
          }}
        />
        <button className='btn btn-primary my-5' type="submit"
          disabled ={!stripe || !clientSecret || processing}>
          Pay
        </button>
        {cardError && <p className='text-red-500 ml-6'>{cardError}</p>}
        {transactionId && <p className='text-green-500 ml-6'> Transaction complete with transactionId:{transactionId} </p>}
      </form>
    </>
  );
};

export default CheckOutForm;