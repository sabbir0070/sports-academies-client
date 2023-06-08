import React from 'react';
import { Outlet } from "react-router-dom";
import { NavLink, Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        <Outlet></Outlet>
        <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden ">Open drawer</label>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 h-full bg-[#D1A054] text-base-content">
          {/* Sidebar content here */}

          <li> <NavLink to="/dashboard/mySelectClass"> My Selected classes </NavLink> </li>
          <li> <Link to="/manageClasses"> My Enrolled classes </Link> </li>

          <div className='divider'></div>

          <li> <Link to="/manageClasses"> Add A Class </Link> </li>
          <li> <Link to="/manageClasses"> My Class </Link> </li>
          <li> <Link to="/manageClasses"> Manage Classes </Link> </li>

          <div className='divider'></div>

          <li> <Link to="/dashboard/manageClasses"> Manage Classes </Link> </li>
          <li> <Link to="/dashboard/manageUsers"> Manage Users </Link> </li>

        </ul>
      </div>
    </div>

  );
};

export default Dashboard;