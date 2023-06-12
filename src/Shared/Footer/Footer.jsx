import React from 'react';
import logo from '../../assets/icon/logo.webp'
import { FaBook, FaCalculator, FaCarAlt, FaFacebook, FaGoogle, FaInstagram, FaLinkedinIn, FaLocationArrow, FaLongArrowAltUp, FaMusic, FaPhoneSquareAlt, FaReact, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='mb-10 bg-black h-66'>
{/* <h3 className='font-bold hover:text-white text-5xl text-center pt-5 text-green-200'>Toy</h3>
<h2 className='font-bold hover:text-white text-5xl text-center pt-5 text-green-200'>High Quality Car Toy Product Available </h2> */}
  <footer className="footer  p-10 bg-black text-white">
  <div>
    <img src={logo} className='w-52 h-20 transition-transform duration-1000 ease-in-out hover:scale-125 cursor-zoom-in' alt="" />
    <p className='text-3xl text-lime-600 font-bold pt-5'>Sports academies<br/>Providing reliable <br /> tech since 2023</p>
  </div> 
  <div>
    <span className=" text-2xl font-bold text-lime-500">SERVICES</span> 
    <a className="link link-hover flex gap-3 text-lg font-semibold items-center text-gray-200"> <FaCarAlt className='text-green-400 w-14 h-8'></FaCarAlt>Learning  Cricket</a> 
    <a className="link link-hover flex gap-3 text-lg font-semibold items-center text-gray-200"> <FaCalculator className='text-blue-400 w-14 h-8'></FaCalculator>Learning  Football</a> 
    <a className="link link-hover flex gap-3 text-lg font-semibold items-center text-gray-200"> <FaMusic className='text-red-500 w-14 h-8'></FaMusic>Learning  Tennis</a> 
    <a className="link link-hover flex gap-3 text-lg font-semibold items-center text-gray-200"> <FaBook className='text--600 w-14 h-8'></FaBook> Learning Hadudu</a>
  </div> 

<div className='w-full'>
<span className=" text-2xl font-bold text-lime-500">CONTACT</span> 
    <a className="link link-hover flex gap-3 text-lg font-semibold text-gray-200 items-center"> <FaPhoneSquareAlt className='text-blue-600 w-14 h-8'></FaPhoneSquareAlt> 01871126026</a> 
    <a className="link link-hover flex gap-3 text-lg font-semibold items-center text-gray-200"> <FaGoogle className='text-green-600 w-14 h-8'></FaGoogle> mdshariful6026@gmail.com </a> 
    <a className="link link-hover flex gap-3 text-lg font-semibold items-center text-gray-200"> <FaLocationArrow className='text-lime-400 w-14 h-8'></FaLocationArrow> Mymensingh</a> 
    <a className="link link-hover flex gap-3 text-lg font-semibold items-center text-gray-200"> <FaReact className='text-blue-500 w-14 h-8'></FaReact> React developer</a>
</div>  
  <div className='w-full'>
<span className=" text-2xl font-bold text-lime-500">LEGAL</span> 
<ul className='flex md:flex-col lg:grid-col gap-y-3 sm:gap-x-4 justify-center mx-auto '>
                <li className='px-2 w-14 h-8 text-2xl cursor-pointer'>
               <FaFacebook className='w-14 h-8 text-white'></FaFacebook>
                </li>
                <li className='px-2 w-14 h-8 text-xl cursor-pointer'>
                    <FaLinkedinIn className='w-14 h-8 text-green-700'></FaLinkedinIn>
                </li>
                <li className='px-2 text-2xl cursor-pointer'>
                    <FaInstagram className='w-14 h-8 text-red-600'></FaInstagram>
                </li>
                <li className='px-2 text-2xl cursor-pointer'>
                    <FaTwitter className='w-14 h-8 text-blue-600'></FaTwitter>
                </li>
            </ul>
   
  </div> 
</footer>
 
 <div className='px-10 py-1 bg-black mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl'>
                </div>
                <div className='pb-10  block text-2xl text-center text-red-400 hover:text-red-500'>
                    © 2023 copy right. All rights reserved Sports Academies.
                </div>

    </div>
  );
};

export default Footer;