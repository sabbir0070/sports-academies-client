import React, { useContext } from 'react';
import RegisterImg from '../../assets/loginImage/Login.jpg'
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
// import useAuth from '../../Hooks/useAuth';
import { AuthContext } from '../../Providers/AuthProvider';
import SocialLogin from '../SocialLogin/SocialLogin';
import Swal from 'sweetalert2';

const Register = () => {
  const { register, handleSubmit, reset, watch, formState: { errors } } = useForm();
  const password = watch("password")

  const { createUser, updatePhoto } = useContext(AuthContext);
  const navigate = useNavigate()
  const onSubmit = (data) => {
    console.log(data.photoURL);
    createUser(data.email, data.password)
      .then(result => {

        updatePhoto(data.name, data.photoURL).then((result) => {
          const saveUser = { name: data.name, email: data.email, image: data.photoURL }
          fetch(`http://localhost:4000/users`, {
            method: "POST",
            headers: {
              "content-type": "application/json"
            },
            body: JSON.stringify(saveUser)
          })
            .then(res => res.json())
            .then(data => {
              console.log(data.insertedId);
            })
          reset()
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Name And Photo Update Successful',
            showConfirmButton: false,
            timer: 1500
          })
          navigate('/')
        })
          .catch(error => {
            console.log(error.message)
          })
      })
      .catch(error => {
        console.log(error.message);
      })

  }

  return (
    <div className='my-5'>
      <h2 className='text-center'>Sign Up Now</h2>
      <div className="hero mb-20 bg-base-200">
        <div className="hero-content flex-col md:flex-row lg:flex-row">
          <div className="text-center w-1/2 lg:text-left">
            <img src={RegisterImg} alt="w-full h-full" />
          </div>
          <div className="w-1/2  shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text"  {...register("name", { required: true })} name='name' placeholder="Name" className="input input-bordered" />
                {errors.name && <span className='text-red-600'>Name is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo</span>
                </label>
                <input type="text" {...register("photoURL", { required: true })} placeholder="Photo" className="input input-bordered" />
                {errors.photoURL && <span className='text-red-600'>Photo URL is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email"  {...register("email", { required: true })} name='email' placeholder="Email" className="input input-bordered" />
                {errors.email && <span className='text-red-600'>Email is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password"  {...register("password", {
                  required: true,
                  minLength: 6,
                  maxLength: 20,
                  pattern: /(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/
                }
                )} name='password' placeholder="password" className="input input-bordered" />
                {errors.password?.type === 'required' && <span className='text-red-600'>Password is required</span>}
                {errors.password?.type === 'minLength' && <span className='text-red-600'>Password must be 6 character</span>}
                {errors.password?.type === 'maxLength' && <span className='text-red-600'>Password must be less than 20 character</span>}
                {errors.password?.type === 'pattern' && <span className='text-red-600'>Password must be one uppercase one lowercase letter one number one special character</span>}
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text"> Confirm Password</span>
                </label>
                <input type="password"  {...register("confirm", {
                  required: "Confirm Password is required",
                  validate: (value) =>
                    value === password || "Password do not match"
                }
                )}
                  placeholder="Confirm Password" className="input input-bordered" />
                {errors.confirm && (<span className='text-red-600'>{errors.confirm.message}</span>)}
              </div>
              <div className="form-control mt-6">
                <input type="submit" className="btn btn-primary" value='Submit' />
              </div>
            </form>
            <div className="text-center px-8 w-full">
              <SocialLogin></SocialLogin>
            </div>
            <p className='text-center mb-5 text-green-500'><Link to="/login">Already have an account</Link> </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;