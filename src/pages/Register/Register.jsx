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
          fetch(`https://sports-academies-server-nine.vercel.app/users`, {
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
  <div className="mt-12">
      <div className="border-2 border-[#ABABAB] px-4 md:px-12 py-4 md:py-6 md:w-1/2 mx-auto rounded-[10px]">
        <h2 className="mb-8 text-2xl font-bold text-center">
          Create an account
        </h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="">
            <label className="font-semibold" htmlFor="name">
              Name
            </label>
            <input
              className="border-2 border-[#C5C5C5] py-2 px-3 w-full rounded-lg mt-2"
              type="text"
              {...register("name", { required: "Name is required" })}
              id=""
              placeholder="Enter Name"
            />
            {errors.name && (
              <p className="text-sm text-red-500">{errors.name.message}</p>
            )}
          </div>
          <div className="my-3">
            <label className="font-semibold" htmlFor="email">
              Email
            </label>
            <input
              className="border-2 border-[#C5C5C5] py-2 px-3 w-full rounded-lg mt-2"
              type="email"
              {...register("email", { required: "Email is required" })}
              id=""
              placeholder="Enter email"
            />
            {errors.email && (
              <p className="text-sm text-red-500">{errors.email.message}</p>
            )}
          </div>
          <div className="">
            <label className="font-semibold" htmlFor="photoURL">
              Photo URL
            </label>
            <input
              className="border-2 border-[#C5C5C5] py-2 px-3 w-full rounded-lg mt-2"
              type="text"
              {...register("photoURL", { required: "Photo URL is required" })}
              id=""
              placeholder="Enter Photo URL"
            />
            {errors.photoURL && (
              <p className="text-sm text-red-500">{errors.photoURL.message}</p>
            )}
          </div>
          <div className="my-3">
            <label className="font-semibold" htmlFor="password">
              Password
            </label>
            <input
              className="border-2 border-[#C5C5C5] py-2 px-3 w-full rounded-lg mt-2"
              type="password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters",
                },
                pattern: {
                  value: /^(?=.*?[A-Z])(?=.*?[!@#$%^&*])/,
                  message:
                    "Password must contain at least one capital letter and one special character",
                },
              })}
              id=""
              placeholder="Enter Password"
            />
            {errors.password && (
              <p className="text-sm text-red-500">{errors.password.message}</p>
            )}
          </div>
          <div className="mb-4">
            <label className="font-semibold" htmlFor="confirm">
              Confirm Password
            </label>
            <input
              className="border-2 border-[#C5C5C5] py-2 px-3 w-full rounded-lg mt-2"
              type="password"
              {...register("confirm", {
                required: "Confirm Password is required",
                validate: (value) =>
                  value === password || "Passwords do not match",
              })}
              id=""
              placeholder="Confirm Password"
            />
            {errors.confirm && (
              <p className="text-sm text-red-500">{errors.confirm.message}</p>
            )}
          </div>
          <input
            className="w-full py-3 bg-[#2cdbde] rounded-[10px] font-semibold text-lg cursor-pointer"
            type="submit"
            value="Sign Up"
          />
        </form>
        <p className="mt-2 text-center">
          Already have an account?{" "}
          <Link className="font-semibold text-blue-600" to="/login">
            Login
          </Link>
        </p>
      </div>
      <div className="w-1/3 mx-auto mb-3 divider">Or</div>
      <div className="mb-6">
        <SocialLogin></SocialLogin>
      </div>
    </div>

    // <div className='my-5'>
    //   <h2 className='text-center'>Sign Up Now</h2>
    //   <div className="hero mb-20 bg-base-200">
    //     <div className="hero-content flex-col md:flex-row lg:flex-row">
    //       <div className="text-center w-1/2 lg:text-left">
    //         <img src={RegisterImg} alt="w-full h-full" />
    //       </div>
    //       <div className="w-1/2  shadow-2xl bg-base-100">
    //         <form onSubmit={handleSubmit(onSubmit)} className="card-body">
    //           <div className="form-control">
    //             <label className="label">
    //               <span className="label-text">Name</span>
    //             </label>
    //             <input type="text"  {...register("name", { required: true })} name='name' placeholder="Name" className="input input-bordered" />
    //             {errors.name && <span className='text-red-600'>Name is required</span>}
    //           </div>
    //           <div className="form-control">
    //             <label className="label">
    //               <span className="label-text">Photo</span>
    //             </label>
    //             <input type="text" {...register("photoURL", { required: true })} placeholder="Photo" className="input input-bordered" />
    //             {errors.photoURL && <span className='text-red-600'>Photo URL is required</span>}
    //           </div>
    //           <div className="form-control">
    //             <label className="label">
    //               <span className="label-text">Email</span>
    //             </label>
    //             <input type="email"  {...register("email", { required: true })} name='email' placeholder="Email" className="input input-bordered" />
    //             {errors.email && <span className='text-red-600'>Email is required</span>}
    //           </div>
    //           <div className="form-control">
    //             <label className="label">
    //               <span className="label-text">Password</span>
    //             </label>
    //             <input type="password"  {...register("password", {
    //               required: true,
    //               minLength: 6,
    //               maxLength: 20,
    //               pattern: /(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/
    //             }
    //             )} name='password' placeholder="password" className="input input-bordered" />
    //             {errors.password?.type === 'required' && <span className='text-red-600'>Password is required</span>}
    //             {errors.password?.type === 'minLength' && <span className='text-red-600'>Password must be 6 character</span>}
    //             {errors.password?.type === 'maxLength' && <span className='text-red-600'>Password must be less than 20 character</span>}
    //             {errors.password?.type === 'pattern' && <span className='text-red-600'>Password must be one uppercase one lowercase letter one number one special character</span>}
    //             <label className="label">
    //               <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
    //             </label>
    //           </div>
    //           <div className="form-control">
    //             <label className="label">
    //               <span className="label-text"> Confirm Password</span>
    //             </label>
    //             <input type="password"  {...register("confirm", {
    //               required: "Confirm Password is required",
    //               validate: (value) =>
    //                 value === password || "Password do not match"
    //             }
    //             )}
    //               placeholder="Confirm Password" className="input input-bordered" />
    //             {errors.confirm && (<span className='text-red-600'>{errors.confirm.message}</span>)}
    //           </div>
    //           <div className="form-control mt-6">
    //             <input type="submit" className="btn btn-primary" value='Submit' />
    //           </div>
    //         </form>
    //         <div className="text-center px-8 w-full">
    //           <SocialLogin></SocialLogin>
    //         </div>
    //         <p className='text-center mb-5 text-green-500'><Link to="/login">Already have an account</Link> </p>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default Register;