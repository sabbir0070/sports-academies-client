import React from 'react';
import { Outlet } from "react-router-dom";
import { NavLink } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content my-5 flex flex-col items-center justify-center">
        <Outlet></Outlet>
        <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden ">Open drawer</label>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 h-full bg-[#D1A054] text-base-content">
          {/* Sidebar content here */}

          <li> <NavLink to="/dashboard/mySelectClass"> My Selected classes </NavLink> </li>
          <li> <NavLink to="/dashboard/myEnrolledClass"> My Enrolled classes </NavLink> </li>

          <div className='divider'></div>

          <li> <NavLink to="/manageClasses"> Add A Class </NavLink> </li>
          <li> <NavLink to="/manageClasses"> My Class </NavLink> </li>
          <li> <NavLink to="/manageClasses"> Manage Classes </NavLink> </li>

          <div className='divider'></div>

          <li> <NavLink to="/dashboard/manageClasses"> Manage Classes </NavLink> </li>
          <li> <NavLink to="/dashboard/manageUsers"> Manage Users </NavLink> </li>

        </ul>
      </div>
    </div>

  );
};

export default Dashboard;