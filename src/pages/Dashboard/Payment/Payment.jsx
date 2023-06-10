
// import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
// import { loadStripe } from '@stripe/stripe-js';
// import  {Elements} from '@stripe/react-stripe-js';
// import CheckOutForm from '../CheckOutForm/CheckOutForm';
// import UseCart from '../../../Hooks/UseCart';

// // Todo:provide published key

// const Payment = () => {
// const stripePromise = loadStripe(import.meta.env.VITE_payment_gateway_pk)
// const [cart] = UseCart();

// const total = cart.reduce((previousValue, currentValue)=> currentValue.price + previousValue,0)
// const price = parseFloat(total.toFixed(2));

//   return (
//     <div className=''>
// <SectionTitle subHeading="please provide" heading="Payment">
// </SectionTitle>
//       <h2 className='text-center'>takar hisab korte tako</h2>
//   <Elements stripe={stripePromise}>
//       <CheckOutForm price={price} cart={cart} />
//     </Elements>
// </div>
//   );
// };

// export default Payment;