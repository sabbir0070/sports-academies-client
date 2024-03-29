import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import useAdmin from '../../Hooks/useAdmin';
import useInstructor from '../../Hooks/useInstructor';
import logo from '../../../src/assets/icon/headerIcon.jpg'
const Navbar = () => {
    
  const { user, logOut } = useAuth();
console.log(user);
  const isAdmin = useAdmin();
  const isInstructor = useInstructor();
  const handleLogOut = () => {
    logOut()
      .then(() => { })
      .catch(error => {
        console.log(error.message);
      })
  }

const [theme, setTheme] = useState(localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light')
  const handleToggle = (e) => {
    if (e.target.checked) {
      setTheme('dark')
    }
    else {
      setTheme('light')
    }
  }
  useEffect(() => {
    localStorage.setItem('theme', theme)
    const localTheme = localStorage.getItem('theme');
    document.querySelector('html').setAttribute('data-theme', localTheme)
  }, [theme,])


  const navOptions = <>
<div className='flex items-center justify-between'>
<ul className="menu menu-horizontal  px-1 mb- text-lg font-bold text-white">
    <li><NavLink to='/'>Home</NavLink ></li>
    <li><NavLink to='/instructors'>Instructors</NavLink ></li>
    <li><NavLink to='/allClasses'>Classes</NavLink ></li>
    <li><NavLink to='/about'>About</NavLink ></li>
    <li><NavLink to='/contact'>Contact</NavLink ></li>
    { user &&
 <li> <NavLink to='/dashboard'>
 Dashboard </NavLink ></li>
}
<div className='flex gap-x-3 items-center  top-0'>
          <label className="swap swap-rotate absolute top-3 ">
            {/* this hidden checkbox controls the state */}
            <input className='w-10 h-10 border-0 rounded-full' checked={theme === 'light' ? false : true} onChange={handleToggle} type="checkbox" />

            {/* sun icon */}
            <svg className="swap-on fill-current w-10 h-14" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" /></svg>

            {/* moon icon */}
            <svg className="swap-off fill-current w-10 h-14" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" /></svg>
          </label>       
</div>
</ul>
</div>

  </>


const navOptionsSmallDevice = <>
<div className='flex justify-between mr-20'>
<ul className="menu menu-horizontal  flex flex-col px-1 mb-4 text-lg font-bold  text-gray-700">
 <li><NavLink to='/'>Home</NavLink ></li>
    <li><NavLink to='/instructors'>Instructors</NavLink ></li>
    <li><NavLink to='/allClasses'>Classes</NavLink ></li>
    <li><NavLink to='/about'>About</NavLink ></li>
    <li><NavLink to='/contact'>Contact</NavLink ></li>
{ user&&
    <li><NavLink to='/dashboard'>Dashboard</NavLink ></li>
}
{user ? <>

{/* <div aria-label={user} title={user?.displayName}>
<div className='w-10 h-10 rounded-full mt-2 mr-3'> <img src={user?.photoURL} className='w-10 h-10 rounded-full' alt="img nai" /> </div>
</div> */}


<li onClick={handleLogOut} className=" left-0 ml-2 bg-orange-700 py-2 text-white rounded-lg px-6">logOut</li>
</>:
<><li><Link to="/login">Login</Link></li> </>
}

<div className='flex gap-x-3 mt-10 ml-5 items-center bottom-0'>
          <label className="swap swap-rotate absolute bottom-0 ">
            {/* this hidden checkbox controls the state */}
            <input className='w-10 h-10 border-0 rounded-full' checked={theme === 'light' ? false : true} onChange={handleToggle} type="checkbox" />

            {/* sun icon */}
            <svg className="swap-on fill-current w-10 h-14" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" /></svg>

            {/* moon icon */}
            <svg className="swap-off fill-current w-10 h-14" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" /></svg>
          </label>       
</div>
</ul>
</div>
</>
  

  return (
<div className='z-10 sticky'>
 <div className="navbar bg-lime-400 z-10 sticky flex h-28">
  <div className="navbar-start z-12">
    <p className="ml-10 flex">
{/* <h2 className=' text-2xl'>Sports Academy</h2> */}
<img src={logo} className='h-12 w-12 rounded-full' alt="nai" />
</p>
  </div>
  <div className="navbar-center hidden  lg:flex justify-between">
    <ul className="menu menu-horizontal pr-10">
{navOptions}

    </ul>
  </div>
<div className='navbar-end'>
<div className='hidden mr-6 lg:flex items-center'>
{user ? <>
<li onClick={handleLogOut} className="bg-orange-700 py-2 flex text-white rounded-lg  px-6 md:mr-6 lg:mr-12">logOut</li>
</>:
<><li className="bg-orange-700 py-2 flex text-white rounded-lg  px-6 md:mr-6 lg:mr-12"><Link to="/login">Login</Link></li> </>
}
</div>

<div className="dropdown ">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-6 p-2 text-white shadow bg-base-100 rounded-box w- right-2">    
{ navOptionsSmallDevice }
      </ul>
    </div>

</div>
</div>

</div>



//     <>
//       {/* <div className="navbar relative index-5 max-w-screen-xl mx-auto z-20 bg:opacity-40 text-white bg-black "> */}
//         {/* <div className="navbar-start">
//           <div className="dropdown">
//             <label tabIndex={0} className="btn btn-ghost lg:hidden">
//               <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
//             </label>
//             <ul tabIndex={0} className="menu text-black menu-compact dropdown-content mt-3 p-2 z-10 shadow bg-base-100 text-lg rounded-box w-52">
//               {navOptions}
//             </ul>
//           </div>
//           <a className="btn btn-ghost normal-case text-xl">Sports Academies</a>
//         </div>
//         <div className="navbar-center hidden lg:flex">

//           <ul className="menu text-lg menu-horizontal text-white px-1">
//             {navOptions}
//           </ul>
//         </div> */}
//  {/* <div className="navbar-end">
            
//           {user ? <> <button onClick={handleLogOut} className='btn btn-ghost'>Logout</button> </> :
//             <><li><NavLink to='/login'>Login</NavLink ></li>
//             </>
//           }
//      <div title={user ? user?.displayName : "No User"} className="navbar-end  mr-4">
//           {user ?
//             <> <div> <img className='w-10 h-10 rounded-full' src={user?.photoURL} alt="" /> </div> </> :
//             <> <FaUserCircle className='w-10 h-10'></FaUserCircle> </>
//           }

//         </div>      
// </div> */}

// {/* <div className="navbar-end pr-4">
//         {user ? (
//           <>
//             <button
//               onClick={handleLogOut}
//               className={` bg-blue-700 px-3 py-2 border-2  rounded-lg text-lg font-bold mr-2 "text-black"}`}
//             >
//               Log Out
//             </button>
//             <img title={user.displayName}
//               className="w-10 h-10 ml-2 rounded-full"
//               src={user?.photoURL}
//               alt=""
//             />
//           </>
//         ) : (
//           <>
//             <NavLink
//               className={`text-[#2cdbde] px-3 py-2 bg-transparent border-2 border-[#2cdbde] rounded-lg text-lg font-bold hover:bg-[#2cdbde] hover:text-white mr-2`}
//               to="/login"
//             >
//               Login
//             </NavLink>
//           </>
//         )}
//       </div> */}
//       {/* </div> */}
//     </>
  );
};

export default Navbar;