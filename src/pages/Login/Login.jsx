import React, { useContext, useEffect, useState } from 'react';
import loginImg from '../../assets/loginImage/Login.jpg'

import { Link, useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../../Providers/AuthProvider';
import SocialLogin from '../SocialLogin/SocialLogin';


const Login = () => {
  // const captchaRef = useRef(null);
  const [disabled, setDisabled] = useState(true)
  const { signInUser } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const from = location?.state?.from?.pathname || '/';

  // useEffect(() => {
  //   loadCaptchaEnginge(6);
  // }, [])

  // const handleValidateCaptcha = (e) => {
  //   const user_captcha_value = e.target.value;
  //   console.log(user_captcha_value)
  //   if (user_captcha_value) {
  //     setDisabled(false)
  //   }

  //   else {
  //     alert('Captcha Does Not Match');
  //     setDisabled(true)
  //   }
  // }

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password)
    signInUser(email, password)
      .then(result => {
        const user = result.user;
console.log(user);
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Your work has been saved',
          showConfirmButton: false,
          timer: 1500
        })
        navigate(from, { replace: true })
      })
      .catch(error => {
        console.log(error.message)
      })
  }



  return (
    <div className='my-5'>
      <h2 className='text-center text-3xl'>Please login</h2>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col md:flex-row lg:flex-row">
          <div className="text-center w-1/2 lg:text-left">
            <img src={loginImg} alt="w-full h-full" />
          </div>
          <div className="w-1/2 h-full shadow-2xl bg-base-100">
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name='email' placeholder="email" className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" name='password' placeholder="password" className="input input-bordered" />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
             
              {/* Todo make button disabled for captcha  */}
              <div className="form-control mt-6">
                <input disabled={false} type="submit" className="btn btn-primary" value='Submit' />
              </div>
            </form>
            <div className="text-center px-8 w-full mb-2">
              <SocialLogin></SocialLogin>
            </div>
            <p className='text-center mb-5 text-green-500'>New Here?<Link to="/register">Create an account</Link> </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;