import {
  createBrowserRouter,
} from "react-router-dom";
import Main from "../LayOut/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Instructors from "../pages/Instructors/Instructors";
import AllClasses from "../pages/AllClasses/AllClasses";
import DashboardLayout from "../LayOut/Dashboard";
import MySelectedClass from "../pages/Dashboard/MySelectedClass/MySelectedClass";
import ManageClasses from "../pages/Dashboard/ManageClasses/ManageClasses";
import ManageUsers from "../pages/Dashboard/ManageUsers/ManageUsers";
import MyEnrolledClasses from "../pages/Dashboard/MyEnrolledClasses/MyEnrolledClasses";
import AddClass from "../pages/Dashboard/AddClass/AddClass";
import MyClass from "../pages/Dashboard/MyClass/MyClass";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: 'login',
        element: <Login></Login>
      },
      {
        path: 'register',
        element: <Register></Register>
      },
      {
        path: 'instructors',
        element: <Instructors></Instructors>
      },
      {
        path: 'allClasses',
        element: <AllClasses></AllClasses>
      },
    ]
  },
  {
    path: '/dashboard',
    element: <DashboardLayout></DashboardLayout>,
    children: [
      // student users
      {
        path: 'mySelectClass',
        element: <MySelectedClass></MySelectedClass>
      },
      {
        path: 'myEnrolledClass',
        element: <MyEnrolledClasses></MyEnrolledClasses>
      },
// Instructors Route
{
path:'addClass',
element:<AddClass></AddClass>
},
{
path:'myClass',
element:<MyClass></MyClass>
},
// Admin Route
      {
        path: 'manageClasses',
        element: <ManageClasses></ManageClasses>
      },
      {
        path: 'manageUsers',
        element: <ManageUsers></ManageUsers>
      }
    ]
  }
]);

export default router;