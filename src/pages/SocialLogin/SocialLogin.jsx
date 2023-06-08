import React from 'react';
import useAuth from '../../Hooks/useAuth';

const SocialLogin = () => {
const {googleSignIn} = useAuth();
const handleGoogleSignIn = () =>{
googleSignIn()
.then(()=>{})
.catch(error=>{
console.log(error.message);
})
}
  return (
  <div>
      <button onClick={handleGoogleSignIn} className='btn btn-primary w-full text-center'>Google SignIn</button>
    </div>
  );
};

export default SocialLogin;