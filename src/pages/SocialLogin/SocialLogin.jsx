import React from 'react';
import useAuth from '../../Hooks/useAuth';
import { useLocation, useNavigate } from 'react-router-dom';

const SocialLogin = () => {
  const { googleSignIn } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const from = location?.state?.from?.pathname || '/';
  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        const loggedUser = result.user;
        const saveUser = { name: loggedUser.displayName, email: loggedUser.email }
        fetch(`http://localhost:4000/users`, {
          method: "POST",
          headers: {
            "content-type": "application/json"
          },
          body: JSON.stringify(saveUser)
        })
          .then(res => res.json())
          .then(() => {
             navigate(from, { replace: true })
          })

      })
      .catch(error => {
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